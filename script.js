var score, roundScore, activePlayer, dice

score = [0,0]
roundScore = 0
activePlayer = 0
/*The dice expression is for generate a random number between 1 and 6. Math.floor is to arround the number if no decimal, times 6 is because Math.random generates a random number
between 0 and 1 and plus 1 is for never giva a 0 number on random. Im thinking if this ever could give a number 7....
*/
dice = Math.floor(Math.random()* 6 ) + 1

//document.querySelector('#current-0').textContent = dice
document.querySelector('#current-' + activePlayer).textContent = dice
