/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/*//----CREATE A FUNDAMENTAL GAME VARIABLES
var scores, roundScore, activePlayer, gamePlaying;

init();
//document.querySelector('#current-' + activePlayer).textContent = dice; //-----read from the dom
//var x = document.querySelector("#score-0").textContent;//------manipulate the dom

// function btn(){
//     //Do something here 
// }
//-----set EventListener to the button
//------here you can call the function with the EventListener without the parenthesis
//document.querySelector('.btn-roll').addEventListener('click', btn);

//----or another way is you don't write the function outside like a before you can type inside  of Eventlistener like this 
//------you can call anonimus function because every thing is going to happen when the click was pressed
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
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
    } else{
        //Next player
        nextPlayer();

    }
   } 
});



document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying){
        //Add current score to Global score
    scores[activePlayer] += roundScore;
    
    //Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];//add the result to the player score


    //check if the player won the game
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!!';//set wich player won the game
        document.querySelector('.dice').style.display = 'none';//here you can set the none dispay because on player won the game
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {

        nextPlayer();//for not repeat the function principal we call here the function that we decleare outside already
    }
  }
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //HOW TO CHANGE THE PLAYER WHEN the other want it's lost and change the values
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}


//implement the new game
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';//------change the css style

    //--how to set the all values to 0 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');


}*/













//--------how you create out fundamental game variables 
var activePlayer, roundScore, scores;
scores = [0,0];
roundScore = 0;
activePlayer = 0;



//---how to manipulate a DOM
//---this is how to select the element from dom and change the content
//document.querySelector('#current-' + activePlayer).textContent = 'dice';
//---how to read from the dom 
//var x = document.querySelector('#score-0').textContent;
//---how to change css styles 
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';//set the values to 0 of the player
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//how to set up and event handler//define the handler and the anonymous function
//is only callback when you click the button that assigned
//the function doesn't have a name
document.querySelector('.btn-roll').addEventListener('click', function(){
    //---how to generate a random number for the scroll the dice
   var  dice  = Math.floor(Math.random()* 6) + 1;//---howt return random numbers between 1 and 6

   var diceDOM = document.querySelector('.dice');//---select the dice and store into the variable
   diceDOM.style.display = 'block'//---change style here 
   diceDOM.src = 'dice-' + dice + '.png';//---you have images from 1 to 6 just change the number like this

    if(dice !== 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent= roundScore;

    }else{
        //next player               
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//this is the ternary operator
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');//remove element and inisde the remove function type the name of the class
        document.querySelector('.player-1-panel').classList.toggle('active');
    }



})


//another way to select element by id
//how to change an image on the <img> element

//how to add, remove and toggle html clases


