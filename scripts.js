let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
let board = document.getElementById('gameboard');
// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++) {
        let cellName = 'c' + (i+1);
        let bracketButton = document.createElement('button');
        bracketButton.innerHTML = '[ ]';
        document.getElementById(cellName).appendChild(bracketButton);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    let eventButton = event.target;
    if(nextPlayer == 'X'){
        eventButton.innerText = '[X]';
        eventButton.disabled = true;
        nextPlayer = 'O';
        document.getElementById('next-lbl').innerText = nextPlayer;
    }
    else{
        eventButton.innerText = '[O]';
        eventButton.disabled = true;
        nextPlayer = 'X';
        document.getElementById('next-lbl').innerText = nextPlayer;
    }
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let counter = 0;

    for (let i = 0; i < 9; i++) {
        if (buttons[i].disabled == true)
            counter++;
    }


    //counter reaches max
    if (counter == 9)
        return true;

    else
        return false;
   
}
