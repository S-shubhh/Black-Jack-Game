let player = {
    name:  "Shubham" ,
    chips : "150$"
}
let playEl = document.getElementById("intro-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let message = " "
let cards = []
playEl.textContent = player.name + "  :  " + player.chips


function getRandomCard()
{
    let RandomNumber = Math.floor(Math.random() * 13) + 1
    if(RandomNumber === 1)
    {
    return 11
    }
else if (RandomNumber > 10)
    {
        return 10
     }
else{ 
return RandomNumber 
} 
}
function startGame()
{
    isAlive = true
    let firstCard = getRandomCard() , secondCard = getRandomCard()
cards = [
    firstCard ,
    secondCard
]
 sum  = firstCard + secondCard
    renderGame()
}
function renderGame()
{ 
    cardsEl.textContent = "Cards : "
    for(let i = 0; i< cards.length ; i++)
    {
    cardsEl.textContent += cards[i] + " "
    }
 sumEl.textContent = "Sum : " + sum

 if(sum <= 20)
 {
  message = "Do you want to draw a new record?"  
 } else if (sum === 21) {
    message = "You got the BlackJack"
    hasBlackJack = true
 }
 else{
    message = "You are out of the Game"
    isAlive = false
 }

 messageEl.textContent = message 
}
function newCard()
{
    if(isAlive == true && hasBlackJack == false)
    {
    let card = getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
    }
}



