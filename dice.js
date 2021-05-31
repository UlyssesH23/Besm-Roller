// eslint version6
const express = require('express');
const bodyParser = require('body-parser');
//const request = require('request');
const https = require("https");
const app = express();
app.use(express.static("public"));
var characterName;
var bodyStat;
var mindStat;
var soulStat;
var dcv;
var acv;
var dieOneNumber;
var dieTwoNumber;
var diceTotal;
var typeOfRoll = "Roll";
app.set('view engine', 'ejs');

// variables/funtctions used throughout



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rollDice() {
  dieOneNumber = getRandomInt(6) + 1;
  dieTwoNumber = getRandomInt(6) + 1;

  diceTotal = dieOneNumber + dieTwoNumber;
}


app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port");
});



app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/info.html")
});

app.post('/', function (req, res) {
  characterName = req.body.cName;
  mindStat = parseInt(req.body.mStat);
  bodyStat = parseInt(req.body.bStat);
  soulStat = parseInt(req.body.sStat);
  dcv = parseInt(req.body.dcv);
  acv = parseInt(req.body.acv);
  rollDice();
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
});

app.post('/regRoll', function (req, res) {
  rollDice();
  typeOfRoll = "Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});

app.post('/mindRoll', function (req, res) {
  rollDice();
  typeOfRoll = "Mind Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  diceTotal = diceTotal + mindStat;
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});

app.post('/bodyRoll', function (req, res) {
  rollDice();
  typeOfRoll = "Body Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  diceTotal = diceTotal + bodyStat;
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});

app.post('/soulRoll', function (req, res) {
  rollDice();
  typeOfRoll = "Soul Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  diceTotal = diceTotal + soulStat;
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});

app.post('/acvRoll', function (req, res) {
  rollDice();
  typeOfRoll = "ACV Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  diceTotal = diceTotal + acv;
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});

app.post('/dcvRoll', function (req, res) {
  rollDice();
  typeOfRoll = "DCV Roll";
  console.log(dieOneNumber);
  console.log(dieTwoNumber);
  diceTotal = diceTotal + dcv;
  res.render('dice', {
    dieOneNumber: dieOneNumber,
    dieTwoNumber: dieTwoNumber,
    diceTotal: diceTotal,
    typeOfRoll: typeOfRoll,
    characterName: characterName
  });
  console.log(diceTotal);
});