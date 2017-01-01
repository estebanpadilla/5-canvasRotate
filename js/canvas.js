window.addEventListener('load', init, false);

function init() {
    var canvas = undefined;
    var context = undefined;
    var x = 110;
    var y = 120;
    var width = 100;
    var height = 100;
    var canvasX = 50;
    var canvasY = 50;
    var canvasWidth = 400;
    var canvasHeight = 400;
    var angle = 0;

    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    canvas.style.position = 'absolute';
    canvas.style.left = '' + canvasX + 'px';
    canvas.style.top = '' + canvasY + 'px';
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.background = '#ee3344';
    context = canvas.getContext('2d');

    angle = 30;

    //1. Required position.
    context.fillStyle = 'blue';
    context.fillRect(x, y, width, height);

    //2. Save context state.
    context.save();

    //3. Move whole context to coordinates.
    context.translate(x, y);
    context.fillStyle = 'pink';
    context.fillRect(x, y, width, height);

    //4. Apply rotation to the whole context.
    context.fillStyle = 'green';
    context.rotate(angle * Math.PI / 180);
    context.fillRect(x, y, width, height);

    //5. Move whole context back.
    context.fillStyle = 'yellow';
    context.fillRect((x - x), (y - y), width, height);
    //context.fillRect(0, 0, width, height); //draw on the 

    //6. Restore context state.
    context.restore();

    //Reference lines and shapes.
    context.setTransform(1, 0, 0, 1, 0, 0); // reset the canvas transform matrix.
    context.strokeStyle = 'yellow';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
    context.moveTo(0, y);
    context.lineTo(canvasWidth, y);
    context.stroke();
}