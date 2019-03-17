//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;
rightTriangle = [
{
  x: -0.65,
  y: 0.65 },

{
  x: 0.8,
  y: -0.5 },

{
  x: 0.8,
  y: 0.65 }];



//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

getDistance = (a, b) => {
  const X = a.x - b.x;
  const Y = a.y - b.y;
  return Math.sqrt(X * X + Y * Y);
};

clipSpaceToPixels = (clipSpace, offset = [0, 0]) => ({
  x: cx + clipSpace.x / 2 * canvas.width + offset[0],
  y: cy + clipSpace.y / 2 * canvas.height + offset[1] });


getSideCenterPoint = (a, b) => {
  return {
    x: a.x + (b.x - a.x) * 0.5,
    y: a.y + (b.y - a.y) * 0.5 };

};

getSideLengths = () => ({
  AB: getDistance(
  clipSpaceToPixels(rightTriangle[0]),
  clipSpaceToPixels(rightTriangle[1])),

  BC: getDistance(
  clipSpaceToPixels(rightTriangle[1]),
  clipSpaceToPixels(rightTriangle[2])),

  AC: getDistance(
  clipSpaceToPixels(rightTriangle[0]),
  clipSpaceToPixels(rightTriangle[2])) });



getAngles = sidesLengths => {
  return {
    A: radToDeg(Math.acos(sidesLengths.AC / sidesLengths.AB)),
    B: radToDeg(Math.asin(sidesLengths.AC / sidesLengths.AB)),
    C: 90 };

};

degToRad = degrees => degrees * Math.PI / 180;

radToDeg = radians => radians * 180 / Math.PI;

drawRightTriangle = () => {
  // draw arc
  const arcVert = clipSpaceToPixels(rightTriangle[1]);
  const angles = getAngles(getSideLengths());
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000';
  ctx.arc(arcVert.x, arcVert.y, 30, degToRad(angles.B) + degToRad(90), degToRad(90), true);
  ctx.stroke();

  for (let i = 0; i < rightTriangle.length; i++) {
    const vert = clipSpaceToPixels(rightTriangle[i]);
    let nextVert = clipSpaceToPixels(rightTriangle[0]);

    // draw triangle sides
    ctx.strokeStyle = i === 2 ? '#f00' : '#000';
    ctx.beginPath();
    ctx.lineWidth = 3;

    if (i < 2) nextVert = clipSpaceToPixels(rightTriangle[i + 1]);

    ctx.moveTo(vert.x, vert.y);
    ctx.lineTo(nextVert.x, nextVert.y);

    ctx.stroke();
  }
};

positionTextElements = () => {
  const centerAB = clipSpaceToPixels(getSideCenterPoint(rightTriangle[0], rightTriangle[1]));
  const centerBC = clipSpaceToPixels(getSideCenterPoint(rightTriangle[1], rightTriangle[2]));
  const centerCA = clipSpaceToPixels(getSideCenterPoint(rightTriangle[2], rightTriangle[0]));
  const a = clipSpaceToPixels(rightTriangle[0], [-10, 5]);
  const b = clipSpaceToPixels(rightTriangle[1], [8, -8]);
  const c = clipSpaceToPixels(rightTriangle[2], [10, 0]);

  jQuery('.angleInput').
  css('top', `${b.y + 50}px`).
  css('left', `${b.x - 65}px`);

  jQuery('.sideInput').
  css('top', `${centerBC.y - 5}px`).
  css('left', `${centerBC.x + 10}px`);

  jQuery('.opposite').
  css('top', `${centerCA.y + 10}px`).
  css('left', `${centerCA.x}px`);

  jQuery('.labelA').css('top', `${a.y}px`).css('left', `${a.x}px`);
  jQuery('.labelB').css('top', `${b.y}px`).css('left', `${b.x}px`);
  jQuery('.labelC').css('top', `${c.y}px`).css('left', `${c.x}px`);
};

solveSide = () => {
  BC = parseFloat(jQuery('.sideInput input').val());

  angleB = parseFloat(jQuery('.angleInput input').val());
  if (angleB >= 90) {
    angleB = 89;
    jQuery('.angleInput input').val(89);
  }

  AC = BC * Math.tan(degToRad(angleB));

  rightTriangle[0].x = rightTriangle[2].x - AC / 10;
  rightTriangle[1].y = rightTriangle[2].y - BC / 10;

  jQuery('.angleB').text(angleB);
  jQuery('.sideBC').text(BC);
  jQuery('.sideAC').text(roundNumber(AC, 2));
};

roundNumber = (num, scale) => {
  if (!("" + num).indexOf("e") >= 0) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
};

draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  solveSide();
  drawRightTriangle();
  positionTextElements();
};

//---------Execution--------
jQuery(document).ready(function ($) {
  draw();

  window.addEventListener('resize', function () {
    resizeCanvas();
    draw();
  });

  $('input').keyup(function () {
    draw();
  });
});