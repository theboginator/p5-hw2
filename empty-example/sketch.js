let current = "S"; //Here's our axiom
let n = 4; // Number of iterations
let d = 40; // height of line to draw
let angle = 25.8; // When rotating for a new draw
let c = 0; // Controls for leaves
let z = 0; // Controls for leaves
let canvasWidth = 1100;
let canvasHeight = 1100;

function drawLeaves(){
    let step = 0.004;
    translate(-d, 0);
    let leafCanvasWidth = canvasWidth/10;
    let leafCanvasHeight = canvasHeight/10;
    let radius = leafCanvasWidth/2;
    for(let y=0; y<=leafCanvasHeight; y+=20){
        for(let x=0; x<=leafCanvasWidth; x+=20){
            let a = canvasHeight - radius;
            let b = canvasWidth - radius;
            z+=step;
            c = c+step;
            let noiseValue = noise(x*step, y*step, z*step); //3D noise
            //print(noiseValue);
            let angle = map(noiseValue,0,1,-360,360);
            let colorCode =color('#337933');
            //print(colorCode);
            //print(angle);
            push();
            translate(x,y);
            rotate(angle);
            stroke(colorCode);
            //line(-10,0,10,0);
            ellipse(-5, 0, 15, 5)
            pop();

        }
    }
}

function setup() {
    // put setup code here
    angleMode(DEGREES);
    createCanvas(canvasWidth, canvasHeight);
    background(255);

    for(let iter = 0; iter < n; iter++){
        let next = "";
        for(let i=0; i<current.length; i++){
            let c = current[i];
            if(c === "S") next += "F";
            else if(c==="F") {
                /*
                  let randSeq = random(3);
                  if(randSeq < 1) next += "F[+F]F";
                  else if(randSeq <2) next += "F[+F]F[-F]F";
                  else next += "F[-F]F";
                  */
                next += "F[+F]F[-F]F";
            }
            else next += c;
        }
        current = next;
    }


}

function draw() {
    // put drawing code here

    translate(canvasWidth/2,canvasHeight);
    rotate(180);
    //line(0,-d,0,0);
    for(let i = 0; i < current.length; i++){
        let command = current[i];
        if(command === "F"){
            translate(0,d);
            line(0,-d,0,0);
        } //move forward & draw line
        else if(command === "f"){
            translate(0,d);
        } //move forward
        else if(command === "+"){
            rotate(-angle);
        } //turn left
        else if(command === "-"){
            rotate(angle);
        } // turn right
        else if(command === "["){
            push();
        } // record
        else if(command === "]"){
            drawLeaves();
            pop();
        } // restore
    }


}

