let c = 0;
let z = 0;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(255);
    let step = 0.004;

    for(let y=0; y<=height; y+=20){
        for(let x=0; x<=width; x+=20){
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