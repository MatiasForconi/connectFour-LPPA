var boardHTML = null,
    columnsHTML = null,
    winHTML = null,
    winDescHTML = null,
    token = new Audio(),
    boardArray = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    ];
    //  search for 4 online or draws
    var checkGameStatus = ()=> {
        var k = 0,
        l = boardArray.length;
    for (var i = 0; i < l; i++) {
        for (var j = 0; j < boardArray[i].length-3; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i][j + 1]) && boardArray[i][j] === (boardArray[i][j + 2]) && boardArray[i][j] === (boardArray[i][j + 3])) {
                    winHTML.innerHTML = (turn + ' won!');
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your adversary!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l-3; i++) {
        for (var j = 0; j < boardArray[i].length; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i + 1][j]) && boardArray[i][j] === (boardArray[i + 2][j]) && boardArray[i][j] === (boardArray[i + 3][j])) {
                    winHTML.innerHTML = (turn + ' won!');
                    winDescHTML.innerHTML = ('Congratulations! You have placed four ' + turn + ' tiles in line and defeated your adversary!');
                    goWin();
                }
                if (boardArray[i][j] === (boardArray[i + 1][j + 1]) && boardArray[i][j] === (boardArray[i + 2][j + 2]) && boardArray[i][j] === (boardArray[i + 3][j + 3])) {
                    winHTML.innerHTML = (turn + ' won!');
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your adversary!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l-3; i++) {
        for (var j = 3; j < boardArray[i].length; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i + 1][j - 1]) && boardArray[i][j] === (boardArray[i + 2][j - 2]) && boardArray[i][j] === (boardArray[i + 3][j - 3])) {
                    winHTML.innerHTML = (turn + ' won!');
                    winDescHTML.innerHTML = ('Congratulations! You have placed four ' + turn + ' tiles in line and beaten/defeated your adversary!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l; i++) {
        for (var j = boardArray[i].length-1; j < boardArray[i].length; j++) {
            if (boardArray[i][j]) {
                k++;
                if(k===l) {
                    winHTML.innerHTML = ('DRAW');
                    winDescHTML.innerHTML = ('No more space for tiles!');
                    goWin();
                }
            }
        }
    }
}
/*  trim the string id, showing only the second element, which is the column, 
then look for the first empty box in that column and run the corresponding events*/
var columnEventHandler = (e)=> {
    var columnId = e.target.id.substr(1, 1);
    for (var i = 0; i < boardArray[columnId].length; i++) {
        if (!boardArray[columnId][i]) {
            boardArray[columnId][i] = turn;
            checkGameStatus();
            toggleTurn();
            renderBoard();
            token.play();
            break;
        }
    }
}
//  add event onclick to all columns creates
var bindColumnHandlers = ()=> {
    columnsHTML = document.getElementsByClassName('column');
    for (var i = 0; i < columnsHTML.length; i++) {
        columnsHTML[i].onclick = columnEventHandler;
    }
}
//generates HTML content in the board
var renderBoard = ()=> { 
    var html = '';
    for (var i = 0; i < boardArray.length; i++) {
        html += '<div id="c' + i + '" class="column">';
        for (var j = boardArray[i].length - 1; j >= 0; j--) {
            html += '<div id="s' + i + j + '" class="spot';
            if(players == 3) {
                html += ' player3';
            }
            if (boardArray[i][j]) html += ' ' + boardArray[i][j];
            {
                html += '"></div>';
            }
        }
    html += '</div>';
    }
    boardHTML.innerHTML = html;
    bindColumnHandlers();
}