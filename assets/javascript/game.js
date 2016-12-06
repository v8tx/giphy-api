/* Array of Questions */

var questions = {
    firstQuestion: {question: "Barack Obama was the 44th President of the United States?", answer: true},
    secondQuestion: {question: "Did the Texas Rangers win the 2016 MLB World Series?", answer: false},
    thirdQuestion: {question: "It snowed in Austin, TX during the winter of 2015?", answer: false},
}

// if userInput.firstQuestion === false;
// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var unanswered = 0;


/*Declaration of Variables */

var wins = 0;
var losses = 0;
var userInput = 0;
// var randomNumber = ;
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var pinkCrystal = 0;


/* Functions that will be used */
// newGems();
var totalScore = minMaxRandom(19, 120);
createGems();

$("#totalScore").text(totalScore);
// newGame();

function winLoss(totalScore, userInput) {
    if (totalScore === userInput) {
        $('#status').text('You won!!!!');
        wins++;
        $('#wins').text(wins);
        console.log(wins)
        $('#crystals').empty();
        $('#winOrLoseNotification').html("FINISH HIM!");
        reset();


    } else if (userInput > totalScore) {
        $('#status').text('You lost!')
        losses++;
        $('#loss').text(losses);
        $('#crystals').empty();
        $("#losses").text(losses);
        $('#winOrLoseNotification').html("You are not Worthy!");
        reset();
    } else {
        $('#winOrLoseNotification').html("");
    }
}

//this funtion closes on line 51.  This will return a random number between the max and the min number.
function minMaxRandom(min, max) {
    var randomNumber = Math.floor((Math.random() * (max - min) + min));
    return randomNumber;

};

//This section is for creating click listeners on each of the crystals.
$("#redCrystal").on("click", function() {
    userInput += redCrystal;
    //userInput = userInput+redCystal
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);

});
$("#blueCrystal").on("click", function() {
    userInput += blueCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);
});
$("#yellowCrystal").on("click", function() {
    userInput += yellowCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);
});



$("#pinkCrystal").on("click", function() {
    userInput += pinkCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);

});

function reset() {
    userInput = 0;
    totalScore = minMaxRandom(19, 120);
    $("#totalScore").text(totalScore);
    createGems();
    var newGame = true;

}

function createGems() {
    redCrystal = minMaxRandom(1, 12);
    blueCrystal = minMaxRandom(1, 12);
    yellowCrystal = minMaxRandom(1, 12);
    pinkCrystal = minMaxRandom(1, 12);
}


var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  document.getElementById("timer").innerHTML=count + " secs";
}




// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
// window.onload = function() {
//   $("#lap").on("click", stopwatch.recordLap);
//   $("#stop").on("click", stopwatch.stop);
//   $("#reset").on("click", stopwatch.reset);
//   $("#start").on("click", stopwatch.start);
// };

// //  Variable that will hold our setInterval that runs the stopwatch
// var counter;

// // Our stopwatch object
// var stopwatch = {

//   time: 0,
//   lap: 1,

//   reset: function() {

//     stopwatch.time = 0;
//     stopwatch.lap = 1;

//     // DONE: Change the "display" div to "00:00."
//     $("#display").html("00:00");

//     // DONE: Empty the "laps" div.
//     $("#laps").html("");
//   },
//   start: function() {

//     // DONE: Use setInterval to start the count here.
//     counter = setInterval(stopwatch.count, 1000);
//   },
//   stop: function() {

//     // DONE: Use clearInterval to stop the count here.
//     clearInterval(counter);
//   },
//   recordLap: function() {

//     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//     //       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);

//     // DONE: Add the current lap and time to the "laps" div.
//     $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

//     // DONE: Increment lap by 1. Remember, we can't use "this" here.
//     stopwatch.lap++;
//   },
//   count: function() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     stopwatch.time++;

//     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//     //       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);
//     console.log(converted);

//     // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#display").html(converted);
//   },
//   timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// };
