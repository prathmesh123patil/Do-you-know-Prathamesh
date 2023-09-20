var readLineSync = require("readline-sync")

score = 0;

var userName = readLineSync.question("What is your name? ");
console.log("--------------------------------------------");

console.log("Hi " + userName + " Welcome to this game. It is for knowing how do you know about me");
console.log("--------------------------------------------");

console.log("Note: All answers should be written in capital letters ");
console.log("--------------------------------------------");




var queone = {
  question: "What is the name of my Hometown? (KOLHAPUR/ PUNE/ MUMBAI) ",
  answer: "KOLHAPUR"
}

var quetwo = {
  question: "From where I have completed my MTech? (IIT/ NIT) ",
  answer: "IIT"
}

var quethree = {
  question: "Which is my favourite sport (CRICKET/ BADMINTON/ FOOTBALL/ HOCKEY) ",
  answer: "CRICKET"
}

var quefour = {
  question: "Which is my favourite sports player? (ROHIT SHARMA/ SACHIN/ VIRAT KOHLI) ",
  answer: "ROHIT SHARMA"
}

var quefive = {
  question: "Which is my favourite color? (PINK/ WHITE/ RED/ BLUE) ",
  answer: "RED"
}

var quesix = {
  question: "My favourite place? (KOLHAPUR/ PUNE/ MUMBAI) ",
  answer: "PUNE"
}

arr = [queone, quetwo, quethree, quefour, quefive, quesix]

for (var i = 0; i < arr.length; i++) {
  var user_response = readLineSync.question(arr[i].question);
  var answer = arr[i].answer;

  if (user_response === answer) {
    console.log("You are Right");
    score++;
  }
  else {
    console.log("You are Wrong");
  }
  console.log("Your score is " + score);
  console.log("----------------------")
}

console.log("Congrats...! Your Final score is " + score);