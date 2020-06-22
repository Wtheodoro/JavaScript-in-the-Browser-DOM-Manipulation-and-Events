/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score, roundScore, activePlayer, dice

score = [0,0]
roundScore = 0
activePlayer = 0

document.querySelector('.dice').style.display = 'none'

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    dice = Math.floor(Math.random()* 6 ) + 1

    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'image/dice-' + dice + '.png'

    //3. Update the round score IF the rolled number was NOT a 1
})



/*The dice expression is for generate a random number between 1 and 6. Math.floor is to arround the number if no decimal, times 6 is because Math.random generates a random number
between 0 and 1 and plus 1 is for never giva a 0 number on random. Im thinking if this ever could give a number 7....
*/


//document.querySelector('#current-0').textContent = dice
//document.querySelector('#current-' + activePlayer).textContent = dice
document.querySelector('.dice').style.display = 'none'
