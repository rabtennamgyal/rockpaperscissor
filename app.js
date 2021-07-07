let scoreBoard = {
    player: 0,
    computer: 0
}

const restart = document.querySelector('.restart')

function computerPlay() {
    let random = Math.random()

    if (random <= 0.33) {
        return 'rock'
    } else if (random <= 0.54) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function playGame(p, c) {
    if (p === c) {
        console.log(`It is a Draw. Computer choose ${c}`)
    }  else if (p === 'rock') {
        if (c === 'paper') {
            //return 'computer'
            console.log('Computer wins! It choose Paper')
            scoreBoard.computer++
        } else {
            //return 'player';
            console.log('You wins!')
            scoreBoard.player++
        } 
    } else if (p === 'paper') {
        if (c === 'scissor') {
            //return 'computer';
            console.log('Computer wins! It choose scissor')
            scoreBoard.computer++
        } else {
            //return 'player';
            console.log('You wins!')
            scoreBoard.player++
        }
    } else if (p === 'scissor') {
        if (c === 'rock') {
            //return 'computer';
            console.log('Computer wins! It choose rock')
            scoreBoard.computer++
        } else {
            //return 'player';
            console.log('You wins!')
            scoreBoard.player++
        }
    }
}

function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    let ps = document.getElementById('ps')
    let cs = document.getElementById('cs')
    ps.innerText = 'Player: 0'
    cs.innerText = 'Computer: 0'
}

function update() {
    const playerScore = document.getElementById('ps')
    const computerScore = document.getElementById('cs')
    playerScore.innerText = `Player: ${scoreBoard.player}`
    computerScore.innerText = `Computer: ${scoreBoard.computer}`
}

function game(e) {
    let playerChoice = e.target.id
    let computerChoice = computerPlay()
    playGame(playerChoice, computerChoice)
    update()
}

const choice = document.querySelectorAll('.choice')

choice.forEach(el => el.addEventListener('click', game))
restart.addEventListener('click', restartGame)