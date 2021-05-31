
var die1 = document.querySelector(".img1");
var die2 = document.querySelector(".img2");
var rollButton = document.querySelector("#reg-roll-button");
var result;
var outputArea = document.querySelector("#output");
var dieOneNumber;
var dieTwoNumber;
var diceTotal;
var formInfo = document.querySelectorAll("form input");
var collectionForm = document.querySelector('#collectionForm');
// Gets random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//
function collectInfo(){
  console.log(formInfo).submit();
  collection.submit();
}

rollButton.addEventListener('click', function() {
  rollDice();
  console.log(rollOutput);
});

function rollDice () {
   dieOneNumber = getRandomInt(6) + 1;
die1.innerHTML = "<img class='rounded mx-auto d-block' id='die1' src='/images/dice" + dieOneNumber + ".png'>";
dieTwoNumber = getRandomInt(6) + 1;
  die2.innerHTML = "<img class='rounded mx-auto d-block'  id='die2' src='/images/dice" + dieTwoNumber + ".png'>";
    diceTotal= dieOneNumber+dieTwoNumber;
 outputArea.innerHTML = "<h1 class='text-center'> Roll:" + diceTotal + "</h1>";
}


// collectionForm.addEventListener("submit", function(event) {
  //   rollerContainer.style.visibility="visible";
  //   collectionForm.style.display="none";
  //   console.log(formInfo)

  // });

//
//