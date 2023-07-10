//arrays to feed into the message generator
const actors = ['nuns', 'soccer players', 'dogs', 'ducks', 'lawyers', 'blondes', 'Americans', 'Canadians', 'Russians', 'Jedi', 'Wizards', 'zombies'];

const questions = ['what would you like', 'who are you', 'where are you from', 'what do you want', 'is it hot out', ]

const answers = ['water', 'milk', 'beer', 'whiskey', 'world domination', 'sushi', 'boba', 'its hotter than Hades', 'the Vatican', 'Hoth', 'Hogwarts', 'Darth Vader', 'respect', 'a pond', 'a bone', 'brains', 'flying carpets', 'lightsabers', 'world peace']

let randomActor;
let randomQuestion;
let randomAnswer;

//functions to randomize
const randomizer = (actor, question, answer) => {
  let a =  Math.floor(Math.random()*actors.length);
  randomActor = actors[a];
  //console.log(randomActor);
  //console.log(question)
  let b = Math.floor(Math.random()*questions.length);
  //console.log(b)
  randomQuestion = questions[b];
  //console.log(randomQuestion);
  //console.log(answer);
  let c = Math.floor(Math.random()*answers.length);
  //console.log(c)
  randomAnswer = answers[c];
  //console.log(randomAnswer);
 // console.log(answer)
 //console.log('Results in function: ' + randomActor + randomQuestion + randomAnswer);
 //return console.log('test');
 }

//test function call
randomizer(actors, questions, answers);

//output statements
console.log (`3 ${randomActor} walk into a bar`); //needs actors array
console.log (`The bartender asks ${randomQuestion}`); // needs questions array
console.log (`They say ${randomAnswer}, of course.`) // needs answers array