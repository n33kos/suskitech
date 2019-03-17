// --------INIT-----
var angle = trize.degToRad(0);

var scene = new trize.Scene();
var renderer = new trize.Renderer('view', scene);

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

var xPositionLabel = new trize.Label({
  font: 'sans-serif',
  fontSize: 15,
  text: '',
  position: new trize.Vector2(-0.45, -0.75),
});
scene.add(xPositionLabel);

var yPositionLabel = new trize.Label({
  font: 'sans-serif',
  fontSize: 15,
  text: '',
  position: new trize.Vector2(0.45, -0.75),
});
scene.add(yPositionLabel);

var thetaLabel = new trize.Label({
  font: 'sans-serif',
  fontSize: 15,
  text: '0',
  position: new trize.Vector2(0, 0.75),
});
scene.add(thetaLabel);

var thetaArc = new trize.Circle({
  radius: 50,
  shouldFill: false,
  shouldStroke: true,
  strokeWidth: 2,
  strokeStyle: 'gray'
});
scene.add(thetaArc);

var triangle = new trize.Triangle([
  new trize.Point({
    arc : {
      color: 'red',
      radius : 50,
      width: 2,
    },
    side : {
      color: 'green',
      width: 2,
    },
    vertex : {
      color: 'green',
      width: 2,
    }
  }),
  new trize.Point({
    side : {
      color: 'red',
      width: 2,
    },
    vertex : {
      color: 'red',
      width: 2,
    }
  }),
  new trize.Point({
    side : {
      color: 'blue',
      width: 2,
    },
    vertex : {
      color: 'blue',
      label : new trize.Label({
        font: 'sans-serif',
        fontSize: 15,
        text: '(0,0)',
        offset: new trize.Vector2(0, -20),
      }),
      width: 2,
    }
  }),
]);
scene.add(triangle);

// -----FUNCS----
function recaclulate() {
  var x = Math.cos(angle) / 2;
  var y = Math.sin(angle) / 2;

  // Set point positions
  triangle.geometry[1].position = new trize.Vector2(x, 0);
  triangle.geometry[2].position = new trize.Vector2(x, y);

  // Set positon labels. Multiply position by 2 because we made the example half size
  triangle.geometry[2].vertex.label.text = `(${trize.round(x*2, 1)}, ${trize.round(y*2, 1)})`;

  // Move the labels
  triangle.geometry[2].vertex.label.offset = new trize.Vector2(
    0,
    triangle.geometry[2].position.y > 0 ? -20 : 30,
  );

  // set angle value and arc radius
  thetaArc.arcEnd = (Math.PI * 2) - angle;

  //Set position label data
  xPositionLabel.text = `x = cos(Θ) = ${trize.round(x*2, 1)}`;
  yPositionLabel.text = `y = sin(Θ) = ${trize.round(y*2, 1)}`;
  thetaLabel.text = `Θ = ${trize.round(trize.radToDeg(angle), 0)}°`;
}

function render() {
  renderer.resizeCanvas();
  recaclulate();
  renderer.render();
}

window.setInterval(() => {
  angle += 0.005;
  if (angle >= Math.PI*2) angle = 0;
  render();
}, 10);
