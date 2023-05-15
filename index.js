var readlinesync = require("readline-sync")

var userName = readlinesync.question("Can I have your name, please? ")

var welcomeMessage = "Hey " + userName
console.log(welcomeMessage)

console.log("I have a quiz for you. Let's see how well you do\n")

var score = 0;

function play(question, answer)
{var userAnswer = readlinesync.question(question)
if (userAnswer === answer) 
{console.log("You are right!\n")
score = score + 1} 
else { console.log("You are wrong!\n")
      score = score - 1}

console.log("Current score: ", score)
console.log("________________")
}

var questions = [{
  question: `When is Selena Gomez's birthday?
            a: august 22nd 1993
            b: july 22nd 1993
            c: may 22nd 1993
            d: june 22nd 1993\n`,
  answer: "b"
}, {
  question: `What is the name of Selena's baby sister?
            a: gabriella
            b: isabella
            c: gracie
            d: stacie`,
  answer: "c"
}, {
  question: `What was the name of Selena's wizards of waverly place character?
            a: alex
            b: ashley
            c: amy
            d: anastasia\n`,
  answer: "a"
}, {
  question: `Who is Selena's favourite friends character?
            a: joey
            b: phoebe
            c: rachel
            d: chandler\n`,
  answer: "c"
  
}, {
  question: `What is Selena Gomez's middle name?
            a: mindy
            b: mila
            c: max
            d: marie\n`,
  answer: "d"
}]


for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("Final Score: ", score)


var highScore = [
  { name: "Dharini",
   score: 5,}
]