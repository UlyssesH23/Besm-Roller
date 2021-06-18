// eslint version6
const express = require('express');
const bodyParser = require('body-parser');
//const request = require('request');
const https = require("https");
const app = express();
app.use(express.static("public"));

var MYAPP = {};

MYAPP.character = {
    name: "Character",
    bodyStat: 0,
    mindStat: 0,
    soulStat: 0,
    dcv: 0,
    acv: 0,


}

MYAPP.dice = {
    dieOneNumber: 0,
    dieTwoNumber: 0,
    typeOfRoll: "Roll",
}

MYAPP.results = {
    diceTotal: 0,
    totalOutput: 0,
}

// var characterName;
// //var bodyStat;
// var mindStat;
// var soulStat;
// var dcv;
// var acv;
//var dieOneNumber;
// var dieTwoNumber;
// var diceTotal;
// var typeOfRoll = "Roll";
app.set('view engine', 'ejs');

// var characterInfo = {
//     dieOneNumber: dieOneNumber,
//     dieTwoNumber: dieTwoNumber,
//     diceTotal: diceTotal,
//     typeOfRoll: typeOfRoll,
//     characterName: characterName
// }

// variables/funtctions used throughout



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function rollDice() {
    MYAPP.dice.dieOneNumber = getRandomInt(6) + 1;
    MYAPP.dice.dieTwoNumber = getRandomInt(6) + 1;

    MYAPP.results.diceTotal = MYAPP.dice.dieOneNumber + MYAPP.dice.dieTwoNumber;
}


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port");
});



app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/info.html")
});

app.post("/data", function(req, res) {
    MYAPP.character.name = req.body.cName;
    MYAPP.character.mindStat = parseInt(req.body.mStat);
    MYAPP.character.bodyStat = parseInt(req.body.bStat);
    MYAPP.character.soulStat = parseInt(req.body.sStat);
    MYAPP.character.dcv = parseInt(req.body.dcv);
    MYAPP.character.acv = parseInt(req.body.acv);
    rollDice();

    console.log(MYAPP);

    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.diceTotal,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });
});
app.post('/editStats', function(req, res) {
    res.render('editStats', {

    })
});

app.post('/regRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "Roll";
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.diceTotal,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });

});

app.post('/mindRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "Mind Roll";
    MYAPP.results.totalOutput = MYAPP.results.diceTotal + MYAPP.character.mindStat;
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.totalOutput,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });


});


app.post('/bodyRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "Body Roll";
    MYAPP.results.totalOutput = MYAPP.results.diceTotal + MYAPP.character.bodyStat;
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.totalOutput,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });

});

app.post('/soulRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "Soul Roll";
    diceTotal = MYAPP.results.diceTotal + MYAPP.character.soulStat;
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.totalOutput,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });

});

app.post('/acvRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "ACV Roll";
    MYAPP.results.totalOutput = MYAPP.results.diceTotal + MYAPP.character.acv;
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.totalOutput,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });
});

app.post('/dcvRoll', function(req, res) {
    rollDice();
    MYAPP.dice.typeOfRoll = "DCV Roll";
    MYAPP.results.totalOutput = MYAPP.results.diceTotal + MYAPP.character.dcv;
    res.render('dice', {
        dieOneNumber: MYAPP.dice.dieOneNumber,
        dieTwoNumber: MYAPP.dice.dieTwoNumber,
        totalOutput: MYAPP.results.totalOutput,
        typeOfRoll: MYAPP.dice.typeOfRoll,
        characterName: MYAPP.character.name,
    });
});

//