window.addEventListener('load', init, false);

function init() {

    var canvas = null;
    var context = null;
    var x = 110;
    var y = 120;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var boxWidth = 100;
    var boxHeight = 100;
    var angle = 30;

    canvas = createCanvas(width, height);
    context = canvas.getContext('2d');

    //1. Required position.
    context.fillStyle = 'blue';
    context.fillRect(x, y, boxWidth, boxHeight);

    //2. Save context state.
    context.save();

    //3. Move whole context to coordinates.
    context.translate(x, y);
    context.fillStyle = 'pink';
    context.fillRect(x, y, boxWidth, boxHeight);

    //4. Apply rotation to the whole context.
    context.fillStyle = '#f6e6ca';
    context.rotate(angle * Math.PI / 180);
    context.fillRect(x, y, boxWidth, boxHeight);

    //5. Move whole context back.
    context.fillStyle = '#ee3344';
    context.fillRect((x - x), (y - y), boxWidth, boxHeight);
    //context.fillRect(0, 0, width, height); //draw on the 

    //6. Restore context state.
    context.restore();

    //Reference lines and shapes.
    context.setTransform(1, 0, 0, 1, 0, 0); // reset the canvas transform matrix.
    context.strokeStyle = 'yellow';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
}

function createCanvas(width, height) {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#2b0d3b';
    return canvas;
}