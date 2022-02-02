let container = document.querySelector('.container');
createGrid();
let fields = document.querySelectorAll('.field')
let simbol = 'O';
let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', insertSimbol)
}

function createGrid() {
    let all = '';
    for (let i = 0; i < 9; i++) {
        all += `<div class="field"></div>`;
    }
    container.innerHTML = all;
}

function insertSimbol() {
    (simbol == 'X') ? simbol = 'O': simbol = 'X';
    this.innerHTML = simbol;
    this.removeEventListener('click', insertSimbol)
    checkWinner();
}

function checkWinner() {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (fields[line[0]].innerHTML == fields[line[1]].innerHTML && fields[line[0]].innerHTML == fields[line[2]].innerHTML && fields[line[0]].innerHTML !== '') {
            colorFields(line[0], line[1], line[2])
            let loop = setTimeout(function () {
                alert(`Winner is player ${simbol}`);
            }, 700)
        }
    }
}

function colorFields(a, b, c) {
    fields[a].style.background = 'green';
    fields[b].style.background = 'green';
    fields[c].style.background = 'green';
    removeAllClicks();
}

function removeAllClicks() {
    for (let i = 0; i < fields.length; i++) {
        fields[i].removeEventListener('click', insertSimbol);
    }
}

function newGame(){

}
