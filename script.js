//arrays to feed into the message generator
const actors = ['nuns', 'soccer players', 'dogs', 'ducks', 'lawyers', 'blondes', 'Americans', 'Canadians', 'Russians', 'Jedi', 'Wizards', 'zombies'];

const questions = ['what would you like', 'who are you', 'where are you from', 'what do you want', 'is it hot out', ]

const answers = ['water', 'milk', 'beer', 'whiskey', 'world domination', 'sushi', 'boba', 'its hotter than Hades', 'the Vatican', 'Hoth', 'Hogwarts', 'Darth Vader', 'respect', 'a pond', 'a bone', 'brains', 'flying carpets', 'lightsabers', 'world peace']

//functions to randomize
const randomizer = (actor, question, answer) => {
  let a =  Math.floor(Math.random()*actors.length);
  let randomActor = actors[a];
  console.log(randomActor);
  let b = Math.floor(Math.random()*questions.lenth);
  let randomQuestion = questions[b];
  console.log(randomQuestion);
  let c = Math.floor(Math.random()*answers.length)
  let randomAnswer = answers[c];
  console.log(answer)
  //return actor;
  //return question;
  //return answer;
  }


//output statements
console.log ('3 _________ walk into a bar'); //needs actors array
console.log ('The bartender asks _________'); // needs questions array
console.log ('They say ____________, of course.') // needs answers array