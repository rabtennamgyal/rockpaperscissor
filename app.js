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


let playerChoice = window.prompt()
let computerChoice = computerPlay()


function playGame(p, c) {
    if (p === c) {
        console.log('Draw')
    }  else if (p === 'rock') {
        if (c === 'paper') {
            //return 'computer'
            console.log('Computer wins!')
        } else {
            //return 'player';
            console.log('You wins!')
        } 
    } else if (p === 'paper') {
        if (c === 'scissor') {
            //return 'computer';
            console.log('Computer wins!')
        } else {
            //return 'player';
            console.log('You wins!')
        }
    } else if (p === 'scissor') {
        if (c === 'rock') {
            //return 'computer';
            console.log('Computer wins!')
        } else {
            //return 'player';
            console.log('You wins!')
        }
    }
}

function game() {
    playGame(playerChoice, computerChoice)
}

game()

