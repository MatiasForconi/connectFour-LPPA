var timeP1HTML = null,
    timeP2HTML = null,
    timeMP1HTML = null,
    timeSP1HTML = null,
    timeMP2HTML = null,
    timeSP2HTML = null;
    winScreen = null;
var init = function () {
    turn = Math.random() > 0.5 ? 'red' : 'blue';
    turn = turn = Math.random() > 0.5 ? 'red' : 'blue';
    boardHTML = document.getElementById('board');
    winScreen = document.getElementById('winScreen');
    timeP1HTML = document.getElementById('timeP1');
    timeP2HTML = document.getElementById('timeP2');
    timeMP1HTML = document.getElementById('timeMP1');
    timeSP1HTML = document.getElementById('timeSP1');
    timeMP2HTML = document.getElementById('timeMP2');
    timeSP2HTML = document.getElementById('timeSP2');
    Players2 = document.getElementById('Players2');
    contact = document.getElementById('contact');
    home = document.getElementById('home');
    back = document.getElementById('back');
    Players2.onclick = goGame;
    contact.onclick = goContact;
    home.onclick = goHome;
    back.onclick = goHome;
    goHome();
}
window.onload = init;