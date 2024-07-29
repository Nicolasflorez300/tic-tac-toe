let isPlayerOne = true;
let cells = document.getElementsByClassName("cell");
let gameOver = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

function userMove(e) {
    if (gameOver) return;

    let cellValue = e.target.innerHTML;
    if (!cellValue.length) {
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        isPlayerOne = !isPlayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(2, 4, 6);

        checkForDraw();
    }
}

function checkLine(c1, c2, c3) {
    if (
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML === cells[c2].innerHTML &&
        cells[c2].innerHTML === cells[c3].innerHTML
    ) {
        showWinner(cells[c1].innerHTML);
    }
}

function checkForDraw() {
    let isDraw = true;
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].innerHTML.length) {
            isDraw = false;
            break;
        }
    }
    if (isDraw && !gameOver) {
        showDraw();
    }
}

function showWinner(player) {
    document.querySelector('#results').innerHTML = player + " wins";
    gameOver = true;
    disableCells();
}

function showDraw() {
    document.querySelector('#results').innerHTML = "No hay ganador";
    gameOver = true;
    disableCells();
}

function disableCells() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', userMove);
    }
}
