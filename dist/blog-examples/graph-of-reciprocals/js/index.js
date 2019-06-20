// --------INIT-----
Math.csc = function(x) { return 1 / Math.sin(x); }
Math.sec = function(x) { return 1 / Math.cos(x); }
Math.cot = function(x) { return 1 / Math.tan(x); }

var scene = new trize.Scene();
var renderer = new trize.Renderer('view', scene);

var graph = new trize.Graph({
  canvas          : renderer.canvas,
  originLineWidth : 2,
  size            : window.innerWidth / 4,
  width           : 1,
});
scene.add(graph);

var minmax = (n) => Math.max(-10000, Math.min(10000, n))

var funcs = [
  (n) => new trize.Vector2(n, minmax(Math.csc(n * (Math.PI / 2)))),
  (n) => new trize.Vector2(n, minmax(Math.sec(n * (Math.PI / 2)))),
  (n) => new trize.Vector2(n, minmax(Math.cot(n * (Math.PI / 2)))),
];
var colors = [
  'red',
  'green',
  'blue',
];

for (var i = 0; i < funcs.length; i++) {
  var func = new trize.Function({
    canvas              : renderer.canvas,
    condition           : (i) => i <= 5,
    func                : funcs[i],
    incrementExpression : (i) => i + 0.25,
    graph,
    initialValue        : -5,
    pointColor          : colors[i],
    drawCurve           : false,
    pointWidth          : 5,
    lineColor           : colors[i],
    lineWidth           : 2,
  });
  scene.add(func);

  var func = new trize.Function({
    canvas              : renderer.canvas,
    condition           : (i) => i <= 5,
    func                : funcs[i],
    incrementExpression : (i) => i + 0.01,
    graph,
    initialValue        : -5,
    pointColor          : colors[i],
    drawPoints          : false,
    pointWidth          : 5,
    lineColor           : colors[i],
    lineWidth           : 2,
  });
  scene.add(func);
}

// -----FUNCS----
function render() {
  renderer.resizeCanvas();
  renderer.render();
}

window.onresize = function() {
  render();
};
render();
