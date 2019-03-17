// --------INIT-----
var scene = new trize.Scene();
var renderer = new trize.Renderer('view', scene);


var angle1 = trize.degToRad(45);
var angle2 = trize.degToRad(-45);
var angle1Adjustment = 0.005;
var angle2Adjustment = -0.005;

var xLine = new trize.Line({
  color : 'gray',
  end   : new trize.Vector2(1, 0),
  start : new trize.Vector2(-1, 0),
  width : 1,
});
scene.add(xLine);

var yLine = new trize.Line({
  color : 'gray',
  end   : new trize.Vector2(0, -1),
  start : new trize.Vector2(0, 1),
  width : 1,
});
scene.add(yLine);

var circle = new trize.Circle({
  clipRadius: 0.5,
  shouldFill: false,
  shouldStroke: true,
  strokeWidth: 2,
});
scene.add(circle);

var topLabel = new trize.Label({
  fillStyle: 'gray',
  font: 'sans-serif',
  fontSize: 15,
  text: '(0, 1)',
  position: new trize.Vector2(0, 0.525),
});
scene.add(topLabel);

var bottomLabel = new trize.Label({
  fillStyle: 'gray',
  font: 'sans-serif',
  fontSize: 15,
  text: '(0, -1)',
  position: new trize.Vector2(0, -0.55),
});
scene.add(bottomLabel);

var leftLabel = new trize.Label({
  fillStyle: 'gray',
  font: 'sans-serif',
  fontSize: 15,
  text: '(-1, 0)',
  position: new trize.Vector2(-0.6, 0),
});
scene.add(leftLabel);

var rightLabel = new trize.Label({
  fillStyle: 'gray',
  font: 'sans-serif',
  fontSize: 15,
  text: '(1, 0)',
  position: new trize.Vector2(0.575, 0),
});
scene.add(rightLabel);

var triangle1 = new trize.Triangle([
  new trize.Point({
    arc : {
      color: 'green',
      label : new trize.Label({
        fillStyle: 'green',
        font: 'sans-serif',
        fontSize: 15,
        text: '45°',
        offset: new trize.Vector2(30, 0),
      }),
      radius : 100,
      width: 2,
    },
    label : new trize.Label({
      fillStyle: 'green',
      font: 'sans-serif',
      fontSize: 15,
      text: 'terminal',
      offset: new trize.Vector2(30, 0),
    }),
    position: new trize.Vector2(0, 0),
    side : {
      color: 'green',
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(Math.cos(angle1) / 1.8, Math.sin(angle1) / 1.8),
    side : {
      color: 'transparent',
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(0.5, 0),
    side : {
      color: 'black',
      width: 2,
    },
  }),
]);
scene.add(triangle1);

var triangle2 = new trize.Triangle([
  new trize.Point({
    arc : {
      color: 'red',
      label : new trize.Label({
        fillStyle: 'red',
        font: 'sans-serif',
        fontSize: 15,
        text: '-45°',
        offset: new trize.Vector2(35, 20),
      }),
      radius : 100,
      width: 2,
    },
    position: new trize.Vector2(0, 0),
    side : {
      color: 'red',
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(Math.cos(angle2) / 1.8, Math.sin(angle2) / 1.8),
    side : {
      color: 'transparent',
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(0.5, 0),
    side : {
      color: 'black',
      width: 2,
    },
  }),
]);
scene.add(triangle2);

// -----FUNCS----
function render() {
  triangle1.geometry[1].position = new trize.Vector2(Math.cos(angle1) / 1.8, Math.sin(angle1) / 1.8);
  triangle2.geometry[1].position = new trize.Vector2(Math.cos(angle2) / 1.8, Math.sin(angle2) / 1.8);

  triangle1.geometry[0].arc.label.text = `${trize.round(trize.radToDeg(angle1), 0)}°`;
  triangle2.geometry[0].arc.label.text = `${trize.round(trize.radToDeg(angle2), 0)}°`;

  renderer.resizeCanvas();
  renderer.render();
}

window.setInterval(() => {
  if (angle1 > Math.PI/2) angle1Adjustment *= -1;
  if (angle1 < 0) angle1Adjustment *= -1;
  angle1 += angle1Adjustment;

  if (angle2 < -Math.PI/2) angle2Adjustment *= -1;
  if (angle2 > 0) angle2Adjustment *= -1;
  angle2 -= angle2Adjustment;
  render();
}, 10);
