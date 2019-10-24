let randomIndex;
let favoriteThing = ["book", "movie", "animal", "color", "game", "superHero"];
let animating = false;
let num = 0;
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

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);


  for(let i = 0; i < 3; i++) {
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

    }

function addAnotherInput() {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer(){
  animating = false;
  beginning = false;
  num = 0;

  if(roster[0]){
  textSize(100);
  //background(random(200, 255));
  background(random(0, 255), random(0, 255), random(0, 255));
  randomIndex = int(random(roster.length));
  fill(random(0, 255), random(0, 255), random(0, 255));
  stroke(0);
  textSize(70);
  text(roster[randomIndex], width / 2, height / 2);
  roster.splice(randomIndex, 1);
  /*
  let thisThing = random(favoriteThing);
  text(roster[randomIndex].firstName + " " + roster[randomIndex].lastName, windowWidth/2, windowHeight/2);
  fill(random(0, 255), random(0, 255), random(0, 255));
   stroke(0);
  textSize(70);
  text("\nFavorite " + thisThing + ":", windowWidth/2, windowHeight/1.8);
  fill(random(0, 255), random(0, 255), random(0, 255));
  // stroke(random(0, 255), random(0, 255), random(0, 255));
  textSize(70);
  text(random([roster[randomIndex][thisThing]]), windowWidth/2, windowHeight/1.4);
  roster.splice(randomIndex, 1);
  */
  }
  else{
    background(random(200, 255));
    text("Nothing left!", windowWidth/2, windowHeight/2);
  }
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

/*
var roster = [{
    firstName: "Zainib",
    lastName: "Ahmed",
    color: "Blue",
    animal: "Giraffe",
    book: "The Book Thief",
    movie: "Amelie",
    game: "none",
    superHero: "The Hulk",
    randomFact: "I love to eat olives.",
  }, {
    firstName: "Camila",
    lastName: "Avina Garcia",
    color: "Green",
    animal: "Dog",
    book: "Match",
    movie: "Lady and the Tramp",
    game: " Guitar Hero",
    superHero: "Spiderman",
    randomFact: "I have a twin",
  }, {
    firstName: "Hector",
    lastName: "Flores",
    color: "Blue",
    animal: "Lion",
    book: "Captain Underpants",
    movie: "Ace Ventura pet detective",
    game: "League Of Legends",
    superHero: "Flash",
    randomFact: "I'm a Libra",
  }, {
    firstName: "Eddson",
    lastName: "Jose",
    color: "midnight blue",
    animal: "pig",
    book: "The Dark Forest",
    movie: "The Fountain",
    game: "Halo Reach",
    superHero: "Superman",
    randomFact: "I am made up of stardust",
  }, {
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    animal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    randomFact: "birds are tetrapods even though they only walk on two legs",
  }, {
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    randomFact: "Lately this year, monsters have especially",
  }, {
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    randomFact: "I have two pet guinea pigs",
  }, {

    firstName: "Hao",
    lastName: "Rong",
    color: "hex(#4285F4)",





    animal: "otter",





    book: "A Brief History of Time",





    movie: "Angry Birds 2",





    game: "Final Fantasy XIV",





    superHero: "Tony Stark",





    randomFact: "I like cats.",





  }, {





    firstName: "Kaicong",





    lastName: "Tang",





    color: "black",





    animal: "dog",





    book: "none",
    movie: "iron man123",





    game: "csgo",





    superHero: "iron man",





    randomFact: "love gaming",


  }, {


    firstName: "Sumedh",


    lastName: "Vedanthi",


    color: "Blue",


    animal: "Crow",


    book: "Of Mice and Men",
    movie: "American Psycho",


    game: "Fruit Ninja",


    superHero: "Batman",


    randomFact: "im a black belt",


  }


  , {


    firstName: "Chris",


    lastName: "Weber",


    color: "green",


    animal: "cat",


    book: "Hitchhiker's Guide to the Galaxy",


    movie: "Spiderman Into The Spiderverse",


    game: "The Legend of Zelda Breath of the Wild",


    superHero: "Iron Man",


    randomFact: "I'm vegetarian"

      ,
  }, {


    firstName: "Andy",


    lastName: "Wu",


    color: "Red",


    animal: "Kiwi",


    book: "Romance of the Three Kingdoms",


    movie: "Shrek 2",


    game: "Super Mario 64",


    superHero: "Static Shock",


    randomFact: "I've had jaw correction surgery"

      ,
  }, {


    firstName: "xiaowei",


    lastName: "zheng",


    color: "green",


    animal: "babies",


    book: "the little girl at the window",


    movie: "eat drink man woman",


    game: "none",


    superHero: "none",


    randomFact: "don't drink coke",
  },
  {

    firstName: "Vanessa",

    lastName: "Blacow-Berggen",
    color: "pink",
    animal: "cat",
    book: "The Heartstriker series",
    movie: "Cats Don't Dance",
    game: "Spyro Reignited Trilogy",
    superHero: "Spiderman",
    randomFact: "I really like cats, especially my cat",
  }, {
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie: "The Godfather",
    game: "Witcher 3",
    superHero: "spider man",
    randomFact: "I'm disappointed in GOT season 8",
  }, {
    firstName: "Anthony",
    lastName: "Valdovinos",
    color: "purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years",
  }, {
    firstName: "Rachel",
    lastName: "Centinaje",
    color: "green",
    animal: "dogs",
    book: "none",
    movie: "Drive",
    game: "Dishonored",
    superHero: "Deadpool",
    randomFact: "I went camping this weekend",
  }, {
    firstName: "Alicia",
    lastName: "Breinke",
    color: "purple",
    animal: "dog",
    book: "The Art of Racing in the Rain",
    movie: "Spirited Away",
    game: "none",
    superHero: "Wonder Woman",
    randomFact: "I want to live in another country someday",
  }, {
    firstName: "Asra",
    lastName: "Siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "Pulp Fiction",
    game: "idk",
    superHero: "hate em all",
    randomFact: "im grumpy",
  }






]
*/
