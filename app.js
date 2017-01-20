window.addEventListener('load', init, false);

function init() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');

    let x = 100;
    let y = 100;
    let boxWidth = 100;
    let boxHeight = 100;
    let angle = 20;

    //1. Required position.
    context.fillStyle = 'blue';
    context.fillRect(x, y, boxWidth, boxHeight);

    context.strokeStyle = 'blue';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

    //2. Save context state.
    context.save();

    //3. Move whole context to coordinates x and y.
    context.translate(x, y);
    context.strokeStyle = 'yellow';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

    context.fillStyle = 'yellow';
    context.fillRect(x, y, boxWidth, boxHeight);

    //4. Apply rotation to the whole context.
    context.rotate(angle * Math.PI / 180);
    context.strokeStyle = 'cyan';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

    context.fillStyle = 'cyan';
    context.fillRect(x, y, boxWidth, boxHeight);

    //5. Move whole context back.
    context.translate(-100, -100);
    context.strokeStyle = 'red';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

    context.fillStyle = 'red';
    context.fillRect((x), (y), boxWidth, boxHeight);

    //6. Restore context state or reset transform
    context.restore();
    // context.resetTransform();
    // context.setTransform(1, 0, 0, 1, 0, 0); // reset the canvas transform matrix.

    // context.fillStyle = 'green';
    // context.fillRect(200, 0, boxWidth, boxHeight);
}
