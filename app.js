const selectBtns = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const score = document.querySelector('[data-your-score]');
const computerScore = document.querySelector('[data-computer-score]');

const SELECTION = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
]

selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener('click', e => {
        const selectionName = selectBtn.dataset.selection;
        const selection = SELECTION.find(selection => selection.name === selectionName);
        makeSelection(selection);
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    addSelectionResult(selection, yourWinner);
    addSelectionResult(computerSelection, computerWinner);
    if (yourWinner) incrementScore(score);
    if (computerWinner) incrementScore(computerScore);
}

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = `${selection.emoji}`;
    finalColumn.after(div);
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length);
    return SELECTION[randomIndex];
}

