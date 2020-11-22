var goHome = function(){
    document.getElementsByClassName('main')[0].style.display = 'none';
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById('contactScreen').style.display= 'none';
    document.getElementById('winScreen').style.display= 'none';
    document.getElementById('initialScreen').style.display= 'flex';
  }

  var goContact = function(){
    document.getElementById('contactScreen').style.display= 'flex';
    document.getElementById('initialScreen').style.display= 'none';
    render();
  }

  var goWin = function(){
    document.getElementsByClassName('main')[0].style.display = 'none';
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById('winScreen').style.display= 'flex';
  }