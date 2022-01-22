var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 given - to use for user1
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6 given - used for user 2


var diceSource1 = "images/dice" + randomNumber1 + ".png"; // to get the dice to display on the site
var diceSource2 = "images/dice" + randomNumber2 + ".png"; // the second dice to be displayed for the other user

// The 7 Deadly Sins + Love -going to add more
var deadlySins = ["Ego", "Pride", "Greed", "Love", "Anger", "Lust"]; //players 2 -array to randomly get your opponent

// Selecting my two images
var imgUser = document.querySelector('.img_user');
var imgGuess = document.querySelector('.img_guess');

imgUser.setAttribute('src', diceSource1); // setting the source of image randomly
imgGuess.setAttribute('src', diceSource2);


var firstName = document.getElementById('fname'); // got the attribute value from this

var mainPlayerName = document.querySelector('.main_player'); // loged and got property textContent
var guestPlayer = document.querySelector('.guessed_player');

// var guestPlayerName = guestPlayer.innerHTML; //selecting the guest name

var winnerClass = document.querySelector('.winner'); // selecting winner h2 to change

var signUp = document.getElementById('submit'); //select the reg button element
var rollDice = document.querySelector('.roll')

// On clicking the sign-up form the text change to your name + a random sin with some love though
signUp.addEventListener('click', function() {

  // changing innertext to inputted fname + randomSin
  mainPlayerName.innerHTML = firstName.value;
  guestPlayer.innerHTML = deadlySins[Math.floor(Math.random() * 6)];

  // console.log(firstName.value);
})

// Custom messages as per the winner
// let ego1 = "You won against your ego 💪🏽";
// let ego2 = "Your ego demolished you 😏";
//
// let pride1 = "Pride's got nothing on you 🤜🏽";
// let pride2 = "They say pride comes before ... 🍂";
//
// let greed1 = "Show our government your ways🙏🏾";
// let greed2 = "How's your campaign going😏";
//
// let love = "Love conquers all 👏🏾 Its a draw";
//
// let anger1 = "What you using?🤔 give some to the world😉";
// let anger2 = "Hey you😡... chill😮‍💨";
//
// let lust1 = "👏🏾Your probably 1 in a 10000000";
// let lust2 = "Lust wins 🤤";

// Add more here ---


// To the fun stuff -- rolling the dice  -- use arrow fxn for practice
rollDice.addEventListener('click', function() {
  // created new random numbers == probably should have made a randomNumber generator with two inputs
  var randomNew1 = Math.floor(Math.random() * 6) + 1;
  var randomNew2 = Math.floor(Math.random() * 6) + 1;
  // changingText();
  // Changing to the new dice randomly generated
  diceSource1 = "images/dice" + randomNew1 + ".png";
  diceSource2 = "images/dice" + randomNew2 + ".png";
  imgUser.setAttribute('src', diceSource1);
  imgGuess.setAttribute('src', diceSource2);


  let ego1 = "You won against your ego 💪🏽";
  let ego2 = "Your ego demolished you 😏";

  let pride1 = "Pride's got nothing on you 🤜🏽";
  let pride2 = "They say pride comes before ... 🍂";

  let greed1 = "Go save our politicians 👀🙏🏾";
  let greed2 = "How's your campaign going😏";

  let love = "Love's fair n conquers all 👏🏾 Its a draw";

  let anger1 = "What you using?🤔 give some to the world😉";
  let anger2 = "Anger wins!!😡 ... chill😮‍💨";

  let lust1 = "👏🏾Your probably one in a 10000";
  let lust2 = "Lust wins 🤤";

  // changingText();

  // let winner = winnerClass.textContent; // selecting the innerHTML

  // Start of if statements for all sins 😰
  // Draws and Love
  if (guestPlayer.innerText == "Love" || (guestPlayer.innerText == "Love" && randomNew1 == randomNew2)) {
    winnerClass.innerText = love;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  // Draw -- re-run required
  if (randomNew1 == randomNew2 && guestPlayer.innerText !== "Love") {
    winnerClass.innerText = "Its a draw !! Roll Again🎲";
  }
  // Ego
  if ((randomNew1 > randomNew2 && guestPlayer.innerText == "Ego")) {
    winnerClass.innerText = ego1;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  if ((randomNew1 < randomNew2 && guestPlayer.innerText == "Ego")) {
    winnerClass.innerText = ego2;
  }
  // Pride
  if ((randomNew1 > randomNew2 && guestPlayer.innerText == "Pride")) {
    winnerClass.innerText = pride1;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  if ((randomNew1 < randomNew2 && guestPlayer.innerText == "Pride")) {
    winnerClass.innerText = pride2;
  }
  // Greed
  if ((randomNew1 > randomNew2 && guestPlayer.innerText == "Greed")) {
    winnerClass.innerText = greed1;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  if ((randomNew1 < randomNew2 && guestPlayer.innerText == "Greed")) {
    winnerClass.innerText = greed2;
  }
  // Anger
  if ((randomNew1 > randomNew2 && guestPlayer.innerText == "Anger")) {
    winnerClass.innerText = anger1;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  if ((randomNew1 < randomNew2 && guestPlayer.innerText == "Anger")) {
    winnerClass.innerText = anger2;
  }
  // lust
  if ((randomNew1 > randomNew2 && guestPlayer.innerText == "Lust")) {
    winnerClass.innerText = lust1;
    winnerClass.style.fontSize = "3rem";
    winnerClass.style.color = "#548CFF";
  }
  if ((randomNew1 < randomNew2 && guestPlayer.innerText == "Lust")) {
    winnerClass.innerText = lust2;
  }
  // END ---- 😰

  // Draws
  // console.log(winner);
  // Ego
  // if (randomNew1 > randomNew2 && guestPlayerName = "Ego") {
  //   winner = ego1;
  // } else {
  //   winner = ego2;
  // }

})


// function changingText() {
//
//   var randomNew1 = Math.floor(Math.random() * 6) + 1;
//   var randomNew2 = Math.floor(Math.random() * 6) + 1;
//   // Answers -- headache on this part
//   let ego1 = "You won against your ego 💪🏽";
//   let ego2 = "Your ego demolished you 😏";
//
//   let pride1 = "Pride's got nothing on you 🤜🏽";
//   let pride2 = "They say pride comes before ... 🍂";
//
//   let greed1 = "Show our government your ways🙏🏾";
//   let greed2 = "How's your campaign going😏";
//
//   let love = "Love conquers all 👏🏾 Its a draw";
//
//   let anger1 = "What you using?🤔 give some to the world😉";
//   let anger2 = "Hey you😡... chill😮‍💨";
//
//   let lust1 = "👏🏾Your probably 1 in a 10000000";
//   let lust2 = "Lust wins 🤤";
//
//
//   let winner = winnerClass.textContent; // selecting the innerHTML
//
//
//   // Draws and Love
//   while (guestPlayerName == "Love" || (guestPlayerName == "Love" && randomNew1 == randomNew2)) {
//     winnerClass.innerText = love;
//     winnerClass.style.fontSize = "3rem";
//     winnerClass.style.color = "#548CFF";
//   }
//   while (randomNew1 == randomNew2) {
//     winnerClass.innerText = "Its a draw !! Roll Again🎲";
//   }
//   while ((randomNew1 > randomNew2 && guestPlayer.innerText == "Lust")) {
//     winnerClass.innerText = ego1;
//   }
//   // Draws
//
//
// }



// console.log(mainPlayerName.textContent);