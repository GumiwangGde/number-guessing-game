const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Welcome to the Number Guessing Game!`)
console.log(`I'm thinking of a number between 1 and 100.`)

function playGame(){
    const number = Math.floor(Math.random() * 100) + 1;
    let attempts;
    
    readline.question('Please select the difficulity level (easy, medium, hard): ', (difficulity) => {
        switch(difficulity){
            case 'easy':
                attempts = 10;
                console.log(`You have 10 chances to guess the correct number.`)
                guessNumber( number, attempts )
                break;
            case 'medium':
                attempts = 7;
                console.log(`You have 7 chances to guess the correct number.`)
                guessNumber( number, attempts )
                break;
            case 'hard':
                attempts = 5;
                console.log(`You have 5 chances to guess the correct number.`)
                guessNumber( number, attempts )
                break;
            default:
                console.log(`Invalid difficulity level.`)
                break;
        }
    });
}

function guessNumber( number, attempts ){
    if ( attempts == 0){
        console.log(`Game Over! The correct number was ${number}.`)
        readline.close();
        return;
    }
    console.log(`You have ${attempts} attempts left.`)

    readline.question('Please guess the number: ', (guess) => {
        if ( Number(guess) === number ){
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`)
            readline.close();
            return;
        } else if( Number(guess) < number ){
            console.log(`Too low. Please try again.`)
            attempts--;
        } else{
            console.log(`Too high. Please try again.`)
            attempts--;
        }
        guessNumber( number, attempts )
    });
}

playGame();