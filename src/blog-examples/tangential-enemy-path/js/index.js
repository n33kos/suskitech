// --------INIT-----
var canvas = document.getElementById('view');
var ctx = canvas.getContext('2d');
var img = new Image;
img.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA5pJREFUeJzt3T1OVFEYh3EwkokUNFxQMzROw6jLcAGELWhto4VxEbgVwh6s7EVotHEKAQvRmIwU2HoOk3s43u95nl93mAkzYf553/d+zGF1Bebzk2mwns3nwXo8Gl3n/L7Di+/Ber/YLH08lvv8lGeTyeq/652HD4LHi8OjYH2n0qtp8AwAnAGAW00/Zdhye36qB7988bymd7bY16OwR+/s7ZU+Hks9f3J8EnzmVgA4AwBnAOCWbgao2vNTPT7Vg/vOGUABAwBnAODudv0Gqqq75w+9xy9QOudZAeAMAJwBgBvcDGDPT8o6t2MFgDMAcAYArvfXAuz5N2R9ZpPjk9LHrQBwBgDOAMD1bgaw599Q+hmlenyKFQDOAMAZALjOZwB7fr3H9bmsAHAGAM4AwLU+AwB7fqc9PsUKAGcA4AwAXOv3BG7s7oY/OD3te8+vdU5qu8enWAHgDACcAYBr/DzAn7dvgvXlSdgDN6bT0n35enic3+j1+bZZAeAMAJwBgKt9Boh7/u/ZLFivj8dBz+9hj8816JnACgBnAOAMAFzlGaBqz3/08VPW6315+jjr+R0Y1ExgBYAzAHAGAC57Bmi756c4E1RjBYAzAHAGAC45A1Tt+aked32d9W/6kpwJ8lgB4AwAnAGAy/5ewBJez29bPPR0ukeDFQDOAMAZALjkDDC/uAjWo6Jo7M0QnV9dBeuD7a1g/frsvNHXtwLAGQA4AwCXnAFGRVHpuD/eEwh4P0Cp9z8uOz0vYAWAMwBwBgCu9T2C4p69hN8LGBQrAJwBgDMAcMkZoOnr/fb0blkB4AwAnAGAa/08AF28F3LXrABwBgDOAMAlZ4C6r9/X7d397WC9X2x29E6GyQoAZwDgDABc7ecB4p786ttZo7/fnl+NFQDOAMAZALjKM0CqJ1edCez5zbICwBkAOAMAlz0D5Pbk3Jlg2Xr+La7/u0eQumMA4AwAXLL/HGxvBd9fH3pPbtp/3PMXfAZN7wkUswLAGQA4AwCXPA8wXb8X9Kh4X7uttbV6N/wfmKo9v2tWADgDAGcA4LL7Ubzv3wJLPRPU3fPbPu6PWQHgDACcAYCrfEy6bDNBDd/f73XPj1kB4AwAnAGAq/28dDwTzObzYP3h56/SmaDp+w0a2KNnUD0/ZgWAMwBwBgCu8WvT8f/BW2BQ5wlWBt7zY1YAOAMAZwDgWr8/7RYzQaztGSHrbzK0nh+zAsAZADgDAPcXJX8tAZBI03UAAAAASUVORK5CYII='
);
canvas.height = window.innerHeight * window.devicePixelRatio;
canvas.width = window.innerWidth * window.devicePixelRatio;
var position = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

var scale = 128 * window.devicePixelRatio;

var increment = 1;

window.onresize = function() {
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.width = window.innerWidth * window.devicePixelRatio;
};

// -----FUNCS----
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, position.x, position.y, scale, scale);
  position = {
    x : Math.tan(increment / 50) * -scale,
    y : canvas.height / 2 - (scale / 2),
  };
  increment++;

  if (increment > 10000) increment = 0;
  if (position.x <= -scale) position.x = canvas.width;
  if (position.x >= canvas.width+scale) position.x = -scale;
  if (position.y <= -scale) position.y = canvas.height;
  if (position.y >= canvas.height+scale) position.y = -scale;

  window.requestAnimationFrame(render);
}

render(ctx);
