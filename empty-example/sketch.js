function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
    for(let y=0; y<=height; y+=20){
        for(let x=0; x<=width; x+=20){
            push();
            translate(x,y);
            line(-10,0,10,0);
            pop();
        }
    }
}