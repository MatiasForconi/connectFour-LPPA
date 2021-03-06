//  all variables with HTML in their name, refers to the dom element
var turn = 'red',
    acumSP1 = 0,
    acumMP1 = 0,
    acumSP2 = 0,
    acumMP2 = 0,
    acumSP3 = 0,
    acumMP3 = 0,
    ChronometerP1,
    ChronometerP2,
    ChronometerP3,
    savedGamesHTML = null,
    buttonLoadHTML = null,
    timeP1HTML = null,
    timeP2HTML = null,
    timeP3HTML = null,
    timeMP1HTML = null,
    timeSP1HTML = null,
    timeMP2HTML = null,
    timeSP2HTML = null,
    timeMP3HTML = null,
    timeSP3HTML = null,
    playerName1Value = null,
    playerName2Value = null,
    playerName3Value = null,
    PlayerName1TurnHTML = null,
    PlayerName2TurnHTML = null,
    PlayerName3TurnHTML = null,
    playerNameError = null,
    playersNamesHTML = null,
    turnHTML = null,
    players = 2,
    pageLoad = 0;

var validateNames = ()=> {
    var alphaNum = /^[a-zA-Z0-9]*$/; //alphanumeric characters only
    var isValid = true;
    var playersNamesMessageError = [];
    playerNameError = document.getElementById('playerNameError');
    if(playerName1.value.length < 3) {
        playersNamesMessageError.push ('Name 1 is short, minimum three characters');
        isValid = false;
    }
    if(playerName1Value.length > 8) {
        playersNamesMessageError.push ('Name 1 is long, maximum eight characters');
        isValid = false;
    }
    if(!alphaNum.test(playerName1.value)) {
        playersNamesMessageError.push ('Invalid characters in name 1');
        isValid = false;
    }   
    if(playerName2Value.length < 3) {
        playersNamesMessageError.push ('Name 2 is short, minimum three characters');
        isValid = false;
    }
    if(playerName2Value.length > 8) {
        playersNamesMessageError.push ('Name 2 is long, maximum eight characters');
        isValid = false;
    }
    if(!alphaNum.test(playerName2Value)) {
        playerName2Value = '';
        playersNamesMessageError.push ('Invalid characters in name 2');
        isValid = false;
    }   
    if(players == 3) {
        if(playerName3Value.length < 3) {
            playersNamesMessageError.push ('Name 3 is short, minimum three characters');
            isValid = false;
        }
        if(playerName3Value.length > 8) {
            playersNamesMessageError.push ('Name 3 is long, maximum eight characters');
            isValid = false;
        }
        if(!alphaNum.test(playerName3Value)) {
            playerName3Value = '';
            playersNamesMessageError.push ('Invalid characters in name');
            isValid = false;
        }   
    }
    if(isValid) {
        goGame();
        playerNameError.innerHTML = '';
    } else {
        playerNameError.innerHTML = '<p class = "error">' + playersNamesMessageError.join('</p> <p class = "error"> ') + '</p>';
    } 
}
    var buttonLoadHandler = ()=> {
        buttonLoadHTML = document.getElementsByClassName('buttonLoad');
        for (var i = 0; i < buttonLoadHTML.length; i++) {
            buttonLoadHTML[i].onclick = loadGame;
        }
    }
    //  load the saved games
    //  generates HTML content in the screen
var renderLoad = ()=> { 
    var html = '';
    for (var i = 0; i < LSSavedGames.length; i++) {
        html += '<div id="load' + i + '" class="buttonScreen buttonLoad">';
        html +=     '<div>' + i +  '</div>';
        html +=     '<div>' + LSSavedGames[i].playerName1Value + '</div>';
        html +=     '<div>VS</div>';
        html +=     '<div>'+ LSSavedGames[i].playerName2Value + '</div>';
        if(LSSavedGames[i].players == 3 ) {
            html += '<div>VS</div>';
            html += '<div>'+ LSSavedGames[i].playerName3Value + '</div>';
        }
        html += '</div>';
    }
    savedGamesHTML.innerHTML = html;
    buttonLoadHandler();
}
var renderPlayersNames = ()=> {
    var html = '';
    for (var i = 1; i <= players; i++) {
        html += '<label for="playerName' + i + '">Name player ' + i + '</label>';
        html += '<input id="playerName' + i + '" class="ingress" type="text" name="name">';
    }
    html += '<div id="playerNameError"></div>';
    playersNamesHTML.innerHTML = html;
}    
var renderTurn = ()=> {
    var html = '';
    for (var i = 1; i <= players; i++) {
        html += '<div id="timeP'+ i +'" class="time">';
        html +=     '<div id="PlayerName' + i + 'Turn" class="labelTime"></div>';
        html +=     '<div class="labelTime">';
        html +=         '<div id="timeMP' + i + '">0</div>';
        html +=         '<div>:</div>';
        html +=         '<div id="timeSP'+ i +'">0</div>';
        html +=     '</div>';
        html +=     '<div class="labelTime">Player ' + i + '</div>';
        html += '</div>';
    }
    turnHTML.innerHTML = html;
}
//  Stop all Chronometers
var stopChronometer = ()=> {
    clearInterval(ChronometerP1);
    clearInterval(ChronometerP2);
    clearInterval(ChronometerP3);
}
//  Star the Chronometer, depending on the turn
var stopChronometer = ()=> {
    clearInterval(ChronometerP1);
    clearInterval(ChronometerP2);
    clearInterval(ChronometerP3);
}
//  Star the Chronometer, depending on the turn
var startChronometer = ()=> {
    if(turn === 'red'){
        ChronometerP1 = setInterval(
        ()=> {
            if (acumSP1 == 60) {
                acumSP1 = 0;
                acumMP1++;
                timeMP1HTML.innerHTML = acumMP1;
            }
            (acumSP1 < 10) ? timeSP1HTML.innerHTML = ('0') + acumSP1 : timeSP1HTML.innerHTML = acumSP1;
            acumSP1++;
        },1000);
    }else if (turn === 'blue') {
        ChronometerP2 = setInterval(
        ()=> {
            if (acumSP2 == 60) {
                acumSP2 = 0;
                acumMP2++;
                timeMP2HTML.innerHTML = acumMP2;
            }
            (acumSP2 < 10) ? timeSP2HTML.innerHTML = ('0') + acumSP2 : timeSP2HTML.innerHTML = acumSP2;
            acumSP2++;
        },1000);
    }else {
        ChronometerP3 = setInterval(
            ()=> {
                if (acumSP3 == 60) {
                    acumSP3 = 0;
                    acumMP3++;
                    timeMP3HTML.innerHTML = acumMP3;
                }
                (acumSP3 < 10) ? timeSP3HTML.innerHTML = ('0') + acumSP3 : timeSP3HTML.innerHTML = acumSP3;
                acumSP3++;
            },1000);
    }
}
var toggleTurn = ()=> {
    stopChronometer();
    if(players == 2) {
        if(turn === 'red') {
            turn='blue';
            timeP2HTML.style.background = '#4684f8e3';
            timeP1HTML.style.background = 'black';
        }else {
            turn='red';
            timeP1HTML.style.background = ' #f16452e0';
            timeP2HTML.style.background = 'black';
        }
    }else {
        timeP1HTML.style.background = 'black';
        timeP2HTML.style.background = 'black';
        timeP3HTML.style.background = 'black';
        if(turn === 'red') {
            turn='blue';
            timeP2HTML.style.background = '#4684f8e3';
        }else if(turn === 'blue') {
            turn='green';
            timeP3HTML.style.background = '#68d336d8';
        }else {
            turn='red';
            timeP1HTML.style.background = '#f16452e0';
        }
    }
    startChronometer();
}
var loadNewGame = ()=> {
    var playerName1 = null,
        playerName2 = null,
        playerName3 = null;
    turn = 'red';
    acumSP1 = 0;
    acumMP1 = 0;
    acumSP2 = 0;
    acumMP2 = 0;
    acumSP3 = 0;
    acumMP3 = 0;
    //playerName is name in the input
    playerName1 = document.getElementById('playerName1');
    playerName2 = document.getElementById('playerName2');
    playerName1Value = playerName1.value;
    playerName2Value = playerName2.value;
    timeP1HTML = document.getElementById('timeP1');
    timeP2HTML = document.getElementById('timeP2');
    timeMP1HTML = document.getElementById('timeMP1');
    timeSP1HTML = document.getElementById('timeSP1');
    timeMP2HTML = document.getElementById('timeMP2');
    timeSP2HTML = document.getElementById('timeSP2');
    timeSP2HTML.innerHTML = ('0')+acumSP2;
    timeMP2HTML.innerHTML = acumMP2;
    timeSP1HTML.innerHTML = ('0')+acumSP1;
    timeMP1HTML.innerHTML = acumMP1;
    //playerNameTurn is name in the game
    PlayerName1TurnHTML = document.getElementById('PlayerName1Turn');
    PlayerName2TurnHTML = document.getElementById('PlayerName2Turn');
    PlayerName1TurnHTML.innerHTML = playerName1Value;
    PlayerName2TurnHTML.innerHTML = playerName2Value;
    boardArray = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        ];
    if(players == 3) {
        timeP3HTML = document.getElementById('timeP3');
        timeMP3HTML = document.getElementById('timeMP3');
        timeSP3HTML = document.getElementById('timeSP3');
        PlayerName3TurnHTML = document.getElementById('PlayerName3Turn');
        playerName3 = document.getElementById('playerName3');
        playerName3Value = playerName3.value;
        timeSP3HTML.innerHTML = ('0')+acumSP3;
        timeMP3HTML.innerHTML = acumMP3;
        timeP3HTML.style.background = 'black';
        PlayerName3TurnHTML.innerHTML = playerName3Value;
        boardArray = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            ];
    }
    timeP1HTML.style.background = '#f16452e0';
    timeP2HTML.style.background = 'black';
    validateNames();
    renderBoard();
}