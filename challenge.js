/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//--------how you create out fundamental game variables 
var activePlayer, roundScore, scores, gamePlaying;
init();
var lastDice;
//---how to manipulate a DOM
//---this is how to select the element from dom and change the content
//document.querySelector('#current-' + activePlayer).textContent = 'dice';
//---how to read from the dom 
//var x = document.querySelector('#score-0').textContent;
//---how to change css styles 

//how to set up and event handler//define the handler and the anonymous function
//is only callback when you click the button that assigned
//the function doesn't have a name
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        //---how to generate a random number for the scroll the dice
        var  dice1  = Math.floor(Math.random()* 6) + 1;//---howt return random numbers between 1 and 6
        var  dice2  = Math.floor(Math.random()* 6) + 1;//---howt return random numbers between 1 and 6
     
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';//---you have images from 1 to 6 just change the number like this
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';//---you have images from 1 to 6 just change the number like this
        

        if(dice1 !== 1 && dice2 !== 1 ){
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        //here implement if the roll two 6 the score will be 0
        /*if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }else if(dice !== 1){
             // add score
             roundScore += dice;
             document.querySelector('#current-' + activePlayer).textContent= roundScore;
     
         }else{
             //next player               
             nextPlayer();
         }
         lastDice = dice;*/
    }



});

//how to use function to correctly apply the DRY principe
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;
        //this is for set the max score that you want to play
        //undefine, null, 0 or "" are COERCED to false
        //Anything else is coerced to true 
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
    
        //check if the player won
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
            
        }
    }

});


//how to think about the game like a programmer
function nextPlayer(){
    //next player               
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//this is the ternary operator
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');//remove element and inisde the remove function type the name of the class
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';//hide the image dice 
};

document.querySelector('.btn-new').addEventListener('click', init);

//set everything to 0  when the game it's over
function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';//set the values to 0 of the player
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};