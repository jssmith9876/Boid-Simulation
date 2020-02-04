
function initialize() {

    //let testBoid = new Boid(WIDTH / 2, HEIGHT / 2);
    let boids = [];
    for (let i = 0; i < 5; i++){
        boids.push(new Boid(Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT)));
    }

    var loop = function() {
        drawBackground();
        for (let i = 0; i < boids.length; i++){
            boids[i].update(boids);
        }
        // testBoid.draw();
        // testBoid.move();
    }

    var interval = setInterval(loop, 1);
}
document.onload = initialize();

function drawBackground() {
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);    
}