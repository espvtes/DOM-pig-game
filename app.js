/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


//DOM manipulation

//document.querySelector('#current-' + activePlayer).textContent = dice;//this is change the value when you reload the page or muve the dices.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//add css using query selector
//document.querySelector('#score-0').style.color = 'blue';

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

//////HOW TO SET UP AN EVENT HANDLER
// function btn(){
//     //Do something here
// }
// btn(); // this how you call this function

//you can declare the function inside the event listener or outside and then call the function inside of event listener 
document.querySelector('.btn-roll').addEventListener('click', function() {//the first argument in addEventeListener is the type of event 
    //1-random number
    var dice = Math.floor(Math.random() * 6) + 1;//random number

    //2-display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3-update the round score IF the rolled number was not a 1
    if(dice !== 1 ){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //is the same likr this:
        /*if(activePlayer === 0){
            activePlayer = 0
        }else{
            activePlayer = 1;
        } */
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector('.player-1-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
        
    }



});//the second part is call the function as soon as the event happens




