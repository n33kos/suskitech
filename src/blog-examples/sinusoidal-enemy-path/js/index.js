// --------INIT-----
var canvas = document.getElementById('view');
var ctx = canvas.getContext('2d');
var img = new Image;
img.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA6dJREFUeJzt3U1qk1EUh/FWlGIHpdBExBaKnRgH7qA6cQHSLYg6c6IDRy6hbsCO3IB0C9qRGzBOlIp1YBUkSKE6iFPvbXhvr+93nuc3uyQ0oflzznk/crO4APNg9DFYT06PgvXK0vo05++Nf7wO1qO1ncLHY7nPT7m1dXfx3/W1qxvB48/3B8H6QqlXU+8ZADgDALeYfkq/5fb8VA9+dP9xRe9stjf7X4L1nXsbhY/HUs/fG28Fn7kVAM4AwBkAuLmbAcr2/FSPT/XgrnMGUMAAwBkAuIttv4Gyqu75fe/xMxTOeVYAOAMAZwDgejcD2POTss7tWAHgDACcAYDr/LUAe/4ZWZ/Z3nir8HErAJwBgDMAcJ2bAez5ZxR+Rqken2IFgDMAcAYArvUZwJ5f7XF9LisAnAGAMwBwjc8AwJ7fao9PsQLAGQA4AwDX+D2BmzdWgvXhh4Wu9/xK56Sme3yKFQDOAMAZALjazwO8evY7WB+OJ8F6c7RSuC9fB4/za70+3zQrAJwBgDMAcJXPAHHPPz46CdbD9eWg53ewx+fq9UxgBYAzAHAGAK70DFC25798fz3r9R7e/JT1/Bb0aiawAsAZADgDAJc9AzTd81OcCcqxAsAZADgDAJecAcr2/FSPm06zfqYvyZkgjxUAzgDAGQC47O8FzOH1/KbFQ0+rezRYAeAMAJwBgEvOAD+/nwbr1cFSbW+G6OTPcbDeHu4G64Pjp7W+vhUAzgDAGQC45AywOlgqddwf7wkEvB+g0OfJQavnBawAcAYAzgDANb5HUNyz5/B7Ab1iBYAzAHAGAC45A9R9vd+e3i4rAJwBgDMAcI2fB6CL90JumxUAzgDAGQC45AxQ9fX7qt2+8iJYj9Z2Wnon/WQFgDMAcAYArvLzAHFPfvvtSa1/355fjhUAzgDAGQC40jNAqieXnQns+fWyAsAZADgDAJc9A+T25NyZYN56/jmu/7tHkNpjAOAMAFyy/2wPd4Pvr/e9J9ftP+75Cz6DuvcEilkB4AwAnAGAS54HGFweBT0q3tdu+dKw2g3/e6Zsz2+bFQDOAMAZALjsfhTv+zfDXM8EVff8po/7Y1YAOAMAZwDgSh+TzttMUMH39zvd82NWADgDAGcA4Co/Lx3PBJPTo2D99de7wpmg7vsNatijp1c9P2YFgDMAcAYArvZr0/Hv4M3Qq/MECz3v+TErAJwBgDMAcI3fn3aOmSDW9IyQ9T/pW8+PWQHgDACcAYD7C0cBLwLlG0kkAAAAAElFTkSuQmCC'
);
canvas.height = window.innerHeight * window.devicePixelRatio;
canvas.width = window.innerWidth * window.devicePixelRatio;
var position = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

var scale = 128 * window.devicePixelRatio;

window.onresize = function() {
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.width = window.innerWidth * window.devicePixelRatio;
};

// -----FUNCS----
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, position.x, position.y, scale, scale);
  position = {
    x : position.x - 5,
    y : (canvas.height / 2) + Math.sin(position.x / 20) * 30 - scale / 2,
  };
  window.requestAnimationFrame(render);

  if (position.x <= -scale) position.x = canvas.width;
}

render(ctx);
