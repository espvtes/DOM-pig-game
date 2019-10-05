/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//----CREATE A FUNDAMENTAL GAME VARIABLES
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


//document.querySelector('#current-' + activePlayer).textContent = dice; //-----read from the dom
//var x = document.querySelector("#score-0").textContent;//------manipulate the dom

document.querySelector('.dice').style.display = 'none';//------change the css style

//--how to set the all values to 0 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// function btn(){
//     //Do something here 
// }
//-----set EventListener to the button
//------here you can call the function with the EventListener without the parenthesis
//document.querySelector('.btn-roll').addEventListener('click', btn);

//----or another way is you don't write the function outside like a before you can type inside  of Eventlistener like this 
//------you can call anonimus function because every thing is going to happen when the click was pressed
document.querySelector('.btn-roll').addEventListener('click', function(){
    //random number
    dice = Math.floor(Math.random() * 6) + 1; //-----generate the random numbers
    //display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';//---how to change the image of the dice from 1 to 6 with extention.

    //update the round score 
    if(dice !== 1){ //type coercion
        //Add the score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //HOW TO CHANGE THE PLAYER WHEN the other want it's lost and change the values
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }
})



