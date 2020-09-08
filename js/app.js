//count to keep track of tick rate to not spawn too many raindrops at once
var count = 0;
//raincount used to keep track of how many drops have touched the ground
var raincount = 0;
//array for starting ground color
var ground = [55,55,65];

//raindrop class with standard constructors
class raindrop {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        //speed variable for acceleration
        this.speed = 0.1;
        //reset variable to keep track of maximum resets
        this.reset = 0;
    }

    update() {
        //defining initial speed of drop
        this.y = this.y + this.speed;
        //updating the acceleration every update
        this.speed = this.speed + 0.1;
        //fill the drop it's chosen color.
        fill(this.color);
        //draws the circle with parameters from the class
        circle(this.x, this.y, this.r);
        //randomized y limit to make the drops appear more 3D as they hit the ground at different areas
        var limit = Math.round(Math.random() * 10) + 540;

        if(count >= 3) {
            //randomizes the x value
            x = Math.round(Math.random() * 600);
            //adds a new raindrop to the array
            rain.push(new raindrop(x, -10, 5, [58, 210, 255]));
            //resets the tick count
            count = 0;
        }

        //checks to see how many times the raindrop has reset its y position
        if(this.reset > 2) {
            //deletes it from the array if it is over 3 resets
            rain.shift();
        }
        
        //checks to see if the drop is at it's chosen y limit and if the reset counter isn't above it's max
        else if(this.y > limit && this.reset <= 1) {
            //adds one to the reset counter
            this.reset++;
            //resets the y, this is to keep its velocity and make the rain appear heavier over time as well as give some variety to the movement of the raindrops
            this.y = 0;
            //adds one to the raindrop counter for the ground color
            raincount++;
        }

        //checks to see if 10 drops have hit the ground
        if(raincount >= 10) {
            //adds 1 to the ground colors blue color value
            ground[2] += 1;
            //resets the count to count the next 10 drops
            raincount = 0;
        }
    }
}

//intial randomized x value
var x = Math.round(Math.random() * 600);
var rain = [];
//new raindrop class in the first array slot
rain[0] = new raindrop(x, -10, 5, [58, 210, 255]);

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(155, 155, 155);
    //variable to update the color of the ground from the raindrop class update function
    fill(ground);
    //draws the ground rectangle
    rect(-25, 550, 650, 60);
    //this for loop is used to run through the entierty of the array and update each object within it
    for(var j = 0; j < rain.length; j++) {
        rain[j].update();
    }
    //adds one to the tick count
    count++;
}