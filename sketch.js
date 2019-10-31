let randomIndex;
let num = 0;
let animating = false;
let beginning = true;
let sizze = 50;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function setup() {
  //createCanvas(400, 400);
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#canvasDiv");
  textSize(100);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  //text("Click to randomize", windowWidth/2, windowHeight/2);

  //button = createButton("Click To Randomize!");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);
//  button.class("randomizerButton");

  //addMoreButton = select("#addMoreButton");
  //addMoreButton.mousePressed(addAnotherInput);


  for(let i = 0; i < 2; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

function draw() {
    if (animating == true) {
      fill(random(200), random(0), random(20), 75)
      ellipse(random(width), random(height), sizze,)
      sizze = sizze+5;
    } else {
      sizze = 0;
    }
    //image("assets/funnyanimals_"+0+"jpg",  windowWidth/2, windowHeight/2);
  }



function addAnotherInput() {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer(){
  animating = false;
  beginning = false;

  textSize(100);
  background(255);
  fill(255);
  stroke(0);
  textSize(70);
  strokeWeight(10);
  textAlign(CENTER, TOP);
  text(roster[1], width / 2, height / 20);
  textAlign(CENTER, BOTTOM);
  text(roster[2], width / 2, height);
}

function buttonPressed() {

  if(firstTime) {
    for (let i = 0; i < nameInputs.length; i++) {
      roster.push(nameInputs[i].value());
    }
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 2000);

}

var roster = [{

}]
