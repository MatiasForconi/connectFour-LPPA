/*this file controll all windows*/
var goHome = function(){
	document.getElementsByClassName('main')[0].style.display = 'none';	
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('contactScreen').style.display= 'none';
	document.getElementById('winScreen').style.display= 'none';
	document.getElementById('loadScreen').style.display= 'none';
	document.getElementById('initialScreen').style.display= 'flex';
}

var goContact = function(){
	document.getElementById('contactScreen').style.display= 'flex';
	document.getElementById('initialScreen').style.display= 'none';
}

var goGame = function(){
	document.getElementsByClassName('main')[0].style.display = 'flex';
	document.getElementsByClassName('footer')[0].style.display = 'flex';
	document.getElementsByClassName('screen')[0].style.display = 'none';
  	document.getElementById('loadScreen').style.display= 'none';
	document.getElementById('winScreen').style.display= 'none';
  	renderBoard();
}

var goWin = function(){
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('winScreen').style.display= 'flex';
}

var goLoad = function(){
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('loadScreen').style.display= 'flex';
	renderLoad();
}