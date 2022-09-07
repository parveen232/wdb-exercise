// refactoring
// group together everything that has to do with p1 into an object and for p2 also
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player1, player2) {
    if (!isGameOver) {
        player1.score += 1;
        if (player1.score === winningScore) {
            isGameOver = true;
            player1.display.classList.add('winner');   //has-text-sucess
            player2.display.classList.add('loser');    //has-text-danger  bulma-helpers-color
            player1.button.disabled = true; //bulma
            player2.button.disabled = true; //bulma
        }
        player1.display.textContent = player1.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);  // this.value will give string e.g "6"
    reset();
})

resetButton.addEventListener('click', reset);

// if player are more than 2 a loop is better option
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false; //bulma
    }
}

// function reset() {
//     isGameOver = false;
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.textContent = 0;
//     p2.display.textContent = 0;
//     p1.display.classList.remove('winner', 'loser');
//     p2.display.classList.remove('winner', 'loser');
//     p1.button.disabled = false; //bulma
//     p2.button.disabled = false; //bulma
// }

