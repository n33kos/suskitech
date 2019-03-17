//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;
triangle = [
{
  x: 0,
  y: -0.75 },

{
  x: -0.75,
  y: 0.25 },

{
  x: 0.75,
  y: 0.25 }];



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
  clipSpaceToPixels(triangle[0]),
  clipSpaceToPixels(triangle[1])),

  BC: getDistance(
  clipSpaceToPixels(triangle[1]),
  clipSpaceToPixels(triangle[2])),

  AC: getDistance(
  clipSpaceToPixels(triangle[0]),
  clipSpaceToPixels(triangle[2])) });



getAngles = () => {
  const sides = getSideLengths();
  let A = sides.BC;
  let B = sides.AB;
  let C = sides.AC;

  return {
    A: radToDeg(lawOfCosines(A, B, C)),
    B: radToDeg(lawOfCosines(C, A, B)),
    C: radToDeg(lawOfCosines(B, A, C)) };

};

lawOfCosines = (A, B, C) => Math.acos(
(Math.pow(A, 2) - (Math.pow(B, 2) + Math.pow(C, 2))) / (-2 * B * C));


degToRad = degrees => degrees * Math.PI / 180;

radToDeg = radians => radians * 180 / Math.PI;

drawArc = (triangleIndex, color) => {
  const arcVert = clipSpaceToPixels(triangle[triangleIndex]);
  const angles = getAngles();

  let ABSlider = parseFloat(jQuery('.inputAB input').val()) / 100;
  let ACSlider = parseFloat(jQuery('.inputAC input').val()) / 100;

  let totalSlider = ABSlider + ACSlider;

  let ABPercentage = ABSlider / totalSlider;
  let ACPercentage = ACSlider / totalSlider;

  let offset = 90;
  let startDegree = angles.A * ACPercentage;
  let endDegree = angles.A * ABPercentage;

  if (triangleIndex === 1) {
    offset = 0;
    startDegree = 0;
    endDegree = -angles.B;
  }

  if (triangleIndex === 2) {
    offset = 180;
    startDegree = 0;
    endDegree = angles.C;
  }

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.arc(
  arcVert.x,
  arcVert.y,
  30,
  degToRad(offset - startDegree),
  degToRad(offset + endDegree),
  triangleIndex === 1);

  ctx.stroke();
};

drawTriangle = () => {
  // draw arc
  drawArc(0, 'red');
  drawArc(1, 'green');
  drawArc(2, 'blue');

  for (let i = 0; i < triangle.length; i++) {
    const vert = clipSpaceToPixels(triangle[i]);
    let nextVert = clipSpaceToPixels(triangle[0]);

    // draw triangle sides
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.lineWidth = 3;

    if (i == 1) ctx.strokeStyle = 'red';
    if (i == 2) ctx.strokeStyle = 'green';


    if (i < 2) nextVert = clipSpaceToPixels(triangle[i + 1]);

    ctx.moveTo(vert.x, vert.y);
    ctx.lineTo(nextVert.x, nextVert.y);

    ctx.stroke();
  }
};

positionTextElements = () => {
  const centerAB = clipSpaceToPixels(getSideCenterPoint(triangle[0], triangle[1]));
  const centerBC = clipSpaceToPixels(getSideCenterPoint(triangle[1], triangle[2]));
  const centerCA = clipSpaceToPixels(getSideCenterPoint(triangle[2], triangle[0]));
  const a = clipSpaceToPixels(triangle[0]);
  const b = clipSpaceToPixels(triangle[1]);
  const c = clipSpaceToPixels(triangle[2]);

  jQuery('.sideA').css('top', `${centerBC.y + 25}px`).css('left', `${centerBC.x}px`);
  jQuery('.sideB').css('top', `${centerAB.y}px`).css('left', `${centerAB.x - 25}px`);
  jQuery('.sideC').css('top', `${centerCA.y}px`).css('left', `${centerCA.x + 25}px`);

  jQuery('.angleA').css('top', `${a.y + 45}px`).css('left', `${a.x}px`);
  jQuery('.angleB').css('top', `${b.y - 15}px`).css('left', `${b.x + 45}px`);
  jQuery('.angleC').css('top', `${c.y - 15}px`).css('left', `${c.x - 45}px`);

  jQuery('.labelA').css('top', `${a.y - 15}px`).css('left', `${a.x}px`);
  jQuery('.labelB').css('top', `${b.y}px`).css('left', `${b.x - 15}px`);
  jQuery('.labelC').css('top', `${c.y}px`).css('left', `${c.x + 15}px`);
};

solve = e => {
  let AB = parseFloat(jQuery('.inputAB input').val()) / 100;
  let AC = parseFloat(jQuery('.inputAC input').val()) / 100;

  let angles = getAngles();
  let lengths = getSideLengths();

  triangle[1].x = -AB;
  triangle[2].x = AC;

  jQuery('.angleA').text(`${roundNumber(angles.A, 0)}°`);
  jQuery('.angleB').text(`${roundNumber(angles.B, 0)}°`);
  jQuery('.angleC').text(`${roundNumber(angles.C, 0)}°`);

  jQuery('.sideB').text(roundNumber(lengths.AB / 10, 1));
  jQuery('.sideC').text(roundNumber(lengths.AC / 10, 1));
  jQuery('.sideA').text(roundNumber(lengths.BC / 10, 1));

  jQuery('.sideB').text(roundNumber(lengths.AB / 10, 1));
  jQuery('.sideC').text(roundNumber(lengths.AC / 10, 1));
  jQuery('.sideA').text(roundNumber(lengths.BC / 10, 1));

  jQuery('.sinA').text('sin(' + roundNumber(angles.C, 0) + ')');
  jQuery('.sinB').text('sin(' + roundNumber(angles.B, 0) + ')');
  jQuery('.sinC').text('sin(' + roundNumber(angles.A, 0) + ')');

  jQuery('.AB').text(roundNumber(lengths.AB / 10, 1));
  jQuery('.AC').text(roundNumber(lengths.AC / 10, 1));
  jQuery('.BC').text(roundNumber(lengths.BC / 10, 1));
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
  solve();
  drawTriangle();
  positionTextElements();
};

//---------Execution--------
jQuery(document).ready(function ($) {
  draw();

  window.addEventListener('resize', function () {
    resizeCanvas();
    draw();
  });

  $('input').on('input change', function () {
    draw();
  });
});
