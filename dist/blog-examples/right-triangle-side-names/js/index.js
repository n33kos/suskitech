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
  y: 0.65,
  col: 'red' },

{
  x: 0.5,
  y: -0.5,
  col: 'blue' },

{
  x: 0.5,
  y: 0.65,
  col: 'green' }];


selectedAcuteAngle = 'A';

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
  // draw right angle
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000';
  const point1 = clipSpaceToPixels(rightTriangle[2], [-20, 0]);
  const point2 = clipSpaceToPixels(rightTriangle[2], [-20, -20]);
  const point3 = clipSpaceToPixels(rightTriangle[2], [0, -20]);
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.lineTo(point3.x, point3.y);
  ctx.stroke();

  for (let i = 0; i < rightTriangle.length; i++) {
    const vert = clipSpaceToPixels(rightTriangle[i]);
    let nextVert = clipSpaceToPixels(rightTriangle[0]);

    // draw arc
    const angles = getAngles();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    if (selectedAcuteAngle === 'A' && i == 0) {
      ctx.arc(vert.x, vert.y, 30, -degToRad(angles.A), 0);
    }
    if (selectedAcuteAngle === 'B' && i == 1) {
      ctx.arc(vert.x, vert.y, 30, degToRad(angles.B) + degToRad(90), degToRad(90), true);
    }
    ctx.stroke();

    // draw triangle sides
    ctx.beginPath();
    ctx.lineWidth = 3;

    if (i < 2) nextVert = clipSpaceToPixels(rightTriangle[i + 1]);

    if (selectedAcuteAngle === 'A') ctx.strokeStyle = rightTriangle[i === 2 ? 1 : 2].col;
    if (selectedAcuteAngle === 'B') ctx.strokeStyle = rightTriangle[i === 2 ? 2 : 1].col;
    if (i === 0) ctx.strokeStyle = rightTriangle[0].col;

    ctx.moveTo(vert.x, vert.y);
    ctx.lineTo(nextVert.x, nextVert.y);

    ctx.stroke();
  }
};

positionTextElements = () => {
  const centerAB = clipSpaceToPixels(getSideCenterPoint(rightTriangle[0], rightTriangle[1]));
  const centerBC = clipSpaceToPixels(getSideCenterPoint(rightTriangle[1], rightTriangle[2]));
  const centerCA = clipSpaceToPixels(getSideCenterPoint(rightTriangle[2], rightTriangle[0]));
  const angles = getAngles(rightTriangle);

  jQuery('.hypotenuse').
  css('top', `${centerAB.y - 25}px`).
  css('left', `${centerAB.x - 50}px`).
  css('transform', `rotate(-${angles.A}deg)`);

  if (selectedAcuteAngle === 'A') {
    jQuery('.adjacent').css('top', `${centerCA.y + 5}px`).css('left', `${centerCA.x - 15}px`).css('transform', `rotate(${0}deg)`);
    jQuery('.opposite').css('top', `${centerBC.y}px`).css('left', `${centerBC.x - 15}px`).css('transform', `rotate(${90}deg)`);
  }

  if (selectedAcuteAngle === 'B') {
    jQuery('.adjacent').css('top', `${centerBC.y}px`).css('left', `${centerBC.x - 15}px`).css('transform', `rotate(${90}deg)`);
    jQuery('.opposite').css('top', `${centerCA.y + 5}px`).css('left', `${centerCA.x - 15}px`).css('transform', `rotate(${0}deg)`);
  }

  const a = clipSpaceToPixels(rightTriangle[0], [-10, 5]);
  const b = clipSpaceToPixels(rightTriangle[1], [8, -8]);
  const c = clipSpaceToPixels(rightTriangle[2], [10, 0]);

  jQuery('.triggerA').css('top', `${a.y}px`).css('left', `${a.x}px`);
  jQuery('.triggerB').css('top', `${b.y}px`).css('left', `${b.x}px`);
  jQuery('.triggerC').css('top', `${c.y}px`).css('left', `${c.x}px`);
};

draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  $('.triggerA').click(function () {
    selectedAcuteAngle = 'A';

    $(this).addClass('active');
    $('.triggerB').removeClass('active');

    $('.side.o').text('BC');
    $('.side.a').text('AC');

    draw();
  });

  $('.triggerB').click(function () {
    selectedAcuteAngle = 'B';

    $(this).addClass('active');
    $('.triggerA').removeClass('active');

    $('.side.o').text('AC');
    $('.side.a').text('BC');

    draw();
  });
});
