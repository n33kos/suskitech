// --------INIT-----
var scene = new trize.Scene();
var renderer = new trize.Renderer('view', scene);

var graph = new trize.Graph({
  canvas          : renderer.canvas,
  originLineWidth : 2,
  size            : window.innerWidth / 4,
  width           : 1,
});
scene.add(graph);

var func = new trize.Function({
  canvas              : renderer.canvas,
  condition           : (i) => i <= 5,
  func                : (n) => new trize.Vector2(n, Math.sin(n * (Math.PI / 2))),
  incrementExpression : (i) => i + 2,
  graph,
  initialValue        : -5,
  pointColor          : 'black',
  pointWidth          : 5,
  lineColor           : 'black',
  lineWidth           : 2,
});
scene.add(func);

// -----FUNCS----
function render() {
  renderer.resizeCanvas();
  renderer.render();
}

window.onresize = function() {
  render();
};
render();
