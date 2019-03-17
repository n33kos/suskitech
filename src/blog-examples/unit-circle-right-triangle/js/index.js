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

var mathLabel = new trize.Label({
  fillStyle: 'black',
  font: '34px sans-serif',
  text: 'X = cos(Θ)',
  textAlign: 'left',
  position: new trize.Vector2(-0.1, -0.70),
});
scene.add(mathLabel);

var mathLabel2 = new trize.Label({
  fillStyle: 'black',
  font: '34px sans-serif',
  text: 'Y = sin(Θ)',
  textAlign: 'left',
  position: new trize.Vector2(-0.1, -0.80),
});
scene.add(mathLabel2);

var triangle1 = new trize.Triangle([
  new trize.Point({
    position: new trize.Vector2(0, 0),
    arc : {
      width: 2,
      radius: 50,
      label : new trize.Label({
        fillStyle: 'black',
        font: 'sans-serif',
        fontSize: 15,
        text: 'Θ',
        offset: new trize.Vector2(25, 0),
      }),
    },
    side : {
      color: 'black',
      width: 2,
    },
    vertex : {
      color: 'black',
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(Math.cos(angle1) / 2, Math.sin(angle1) / 2),
    side : {
      color: 'blue',
      label : new trize.Label({
        fillStyle: 'blue',
        font: 'sans-serif',
        fontSize: 15,
        text: 'b',
        offset: new trize.Vector2(25, 10),
      }),
      width: 2,
    },
    vertex : {
      color: 'blue',
      label : new trize.Label({
        fillStyle: 'black',
        font: 'sans-serif',
        fontSize: 15,
        text: '(X, Y)',
        offset: new trize.Vector2(50, -25),
      }),
      width: 2,
    },
  }),
  new trize.Point({
    position: new trize.Vector2(Math.cos(angle1) / 2, 0),
    side : {
      color: 'red',
      width: 2,
      label : new trize.Label({
        fillStyle: 'red',
        font: 'sans-serif',
        fontSize: 15,
        text: 'a',
        offset: new trize.Vector2(0, 35),
      }),
    },
    vertex : {
      color: 'red',
      width: 2,
    },
  }),
]);
scene.add(triangle1);

// -----FUNCS----
function render() {
  renderer.resizeCanvas();
  renderer.render();
}

window.onresize = function() {
  render();
};
render();
