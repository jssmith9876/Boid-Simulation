class Boid {
    constructor(xpos, ypos) {
        this.position = [xpos, ypos];

        //Sizing
        this.width = 15;
        this.height = 28;
        
        //Movement
        this.speed = 1;
        this.direction = Math.floor(Math.random() * 360);   //degrees
        this.velocity = [this.speed * Math.cos(this.direction * Math.PI / 180), this.speed * Math.sin(this.direction * Math.PI / 180)];

        this.sightRange = 40;

        this.neighborhood = []

    }

    update(allBoids) {
        this.neighborhood = [];
        for (let i = 0; i < allBoids.length; i++){
            let dist = Math.sqrt(Math.pow(this.position[0] - allBoids[i].position[0], 2) + Math.pow(this.position[1] - allBoids[i].position[1], 2));
            if (dist <= this.sightRange && dist > 0) {
                this.neighborhood.push(allBoids[i]);
            }
        }



        this.move();
        this.draw();
    }

    draw() {
        //Set the styling 
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;

        //Start drawing the shape
        ctx.beginPath();
        //Move the scene to the center of the boid
        ctx.translate(this.position[0], this.position[1]);
        //Rotate the boid in the correct direction
        ctx.rotate((this.direction + 270) * Math.PI / 180);

        //Draw the boid
        ctx.lineTo(0, 0);
        ctx.lineTo(0.5 * this.width, -0.2 * this.height);
        ctx.lineTo(0, 0.8 * this.height);
        ctx.lineTo(0, 0.8 * this.height + this.sightRange);
        ctx.lineTo(0, 0.8 * this.height);
        ctx.lineTo(-0.5 * this.width, -0.2 * this.height);
        ctx.lineTo(0, 0);

        //Reset the rotations so the boid stays properly rotated
        ctx.rotate(-(this.direction + 270) * Math.PI / 180);
        //Move the scene back to the correct position
        ctx.translate(-this.position[0], -this.position[1]);
        ctx.stroke();
    }

    move() {
        //Increment the position in both direction by the velocity in both directions
        this.position[0] += this.velocity[0];
        this.position[1] += this.velocity[1];

        //Screen Wrapping
        if (this.position[0] > WIDTH) {
            this.position[0] = 0;
        }
        else if (this.position[0] < 0) {
            this.position[0] = WIDTH;
        }

        if (this.position[1] > HEIGHT) {
            this.position[1] = 0;
        }
        else if (this.position[1] < 0) {
            this.position[1] = HEIGHT;
        }
    }

    cohesion() {
        
    }
}