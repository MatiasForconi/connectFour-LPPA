/*this file controll all windows*/
var goHome = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';	
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('contactScreen').style.display= 'none';
	document.getElementById('winScreen').style.display= 'none';
	document.getElementById('loadScreen').style.display= 'none';
	document.getElementById('playersNamesScreen').style.display= 'none';
	document.getElementById('initialScreen').style.display= 'flex';
	stopChronometer();
}

var goContact = ()=> {
	document.getElementById('initialScreen').style.display= 'none';
	document.getElementById('contactScreen').style.display= 'flex';
}

var goGame = ()=> {
	document.getElementsByClassName('screen')[0].style.display = 'none';
  	document.getElementById('loadScreen').style.display= 'none';
	document.getElementById('winScreen').style.display= 'none';
	document.getElementById('playersNamesScreen').style.display= 'none';
	document.getElementsByClassName('main')[0].style.display = 'flex';
	document.getElementsByClassName('footer')[0].style.display = 'flex';
	renderBoard();
	stopChronometer();
}

var goWin = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('winScreen').style.display= 'flex';
}

var goLoad = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('loadScreen').style.display= 'flex';
	renderLoad();
}

var go2PlayersNames = ()=> {
	document.getElementById('initialScreen').style.display= 'none';
	document.getElementById('playersNamesScreen').style.display= 'flex';
	players = 2;
	renderPlayersNames();
	renderTurn();
}
var go3PlayersNames = ()=> {
	document.getElementById('initialScreen').style.display= 'none';
	document.getElementById('playersNamesScreen').style.display= 'flex';
	players = 3;
	renderPlayersNames();
	renderTurn();
}