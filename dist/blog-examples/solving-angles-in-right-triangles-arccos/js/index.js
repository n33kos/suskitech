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



getAngles = () => {
  const sides = getSideLengths();

  return {
    A: radToDeg(Math.acos(sides.AC / sides.AB)),
    B: radToDeg(Math.asin(sides.AC / sides.AB)),
    C: 90 };

};

degToRad = degrees => degrees * Math.PI / 180;

radToDeg = radians => radians * 180 / Math.PI;

drawRightTriangle = () => {
  // draw arc
  const arcVert = clipSpaceToPixels(rightTriangle[1]);
  const angles = getAngles();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#f00';
  ctx.arc(arcVert.x, arcVert.y, 30, degToRad(angles.B) + degToRad(90), degToRad(90), true);
  ctx.stroke();

  for (let i = 0; i < rightTriangle.length; i++) {
    const vert = clipSpaceToPixels(rightTriangle[i]);
    let nextVert = clipSpaceToPixels(rightTriangle[0]);

    // draw triangle sides
    ctx.strokeStyle = '#000';
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
  const a = clipSpaceToPixels(rightTriangle[0]);
  const b = clipSpaceToPixels(rightTriangle[1]);
  const c = clipSpaceToPixels(rightTriangle[2]);

  jQuery('.sideInputBC').
  css('top', `${centerBC.y - 5}px`).
  css('left', `${centerBC.x + 10}px`);

  jQuery('.sideInputAB').
  css('top', `${centerAB.y - 60}px`).
  css('left', `${centerAB.x - 20}px`);

  jQuery('.measurement.angleB').
  css('top', `${b.y + 40}px`).
  css('left', `${b.x - 60}px`);

  jQuery('.labelA').css('top', `${a.y + 5}px`).css('left', `${a.x - 10}px`);
  jQuery('.labelB').css('top', `${b.y - 8}px`).css('left', `${b.x + 8}px`);
  jQuery('.labelC').css('top', `${c.y + 5}px`).css('left', `${c.x + 10}px`);
};

solveSide = e => {
  BC = parseFloat(jQuery('.sideInputBC input').val());
  AB = parseFloat(jQuery('.sideInputAB input').val());

  if (!AB || BC >= AB) {
    jQuery('.sideInputAB input').val(BC + 1);
    AB = BC + 1;
  }

  angleB = roundNumber(radToDeg(Math.acos(BC / AB)), 2);
  AC = AB * Math.sin(degToRad(angleB));

  rightTriangle[0].x = rightTriangle[2].x - AC / 10;
  rightTriangle[1].y = rightTriangle[2].y - BC / 10;


  jQuery('.angleB').text(`${angleB}°`);
  jQuery('.sideBC').text(BC);
  jQuery('.sideAB').text(AB);
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