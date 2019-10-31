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
let funnyanimals = [];
let imageCounter = 0;
let randomNumber = 0;

function preload() {
  for(let i = 0; i <= 10; i++) {
    funnyanimals[i] = loadImage("assets/funnyanimals_" + i + ".jpg");
    console.log(funnyanimals);
  }
}

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

  randomNumber = int(random(0, 10));
  image(funnyanimals[randomNumber], windowWidth/3, windowHeight/6);
  //text(randomNumber, windowWidth / 3, windowHeight / 6);
}

function draw() {
    if (animating == true) {
      clear();
      image(funnyanimals[imageCounter], windowWidth/3, windowHeight/6);
      if (imageCounter < funnyanimals.length) {
        imageCounter++;
        }
    } else {
      imageCounter = 0;
    }
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
  text(roster[1], windowWidth / 2, windowHeight / 20);
  textAlign(CENTER, BOTTOM);
  text(roster[2], windowWidth / 2, windowHeight);

  image(funnyanimals[randomNumber], windowWidth/3, windowHeight/6);
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
