// let firstCard=getRandomCard() //5
// let secondCard = getRandomCard() //5
let sum = 0
let cards=[]
let hasBlackJack=false

let isAlive = false

let message =""

let messageEl = document.getElementById("message-el")

let sumEl=document.getElementById("sum-el")

let cardsEl=document.getElementById("cards-el")

// let playerName = "Per"
// let playerChips = 145

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = playerName + ": $" + playerChips
let player = {
    name :"Sunny",
    chips:120
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
   if (randomNumber > 10){
     return 10
   }else if(randomNumber == 1){
    return 11
   }
   else{
    return randomNumber
   }
}
function startGame(){
    isAlive = true

    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    sum =firstCard+secondCard
    cards=[firstCard,secondCard]

    renderGame()

}
function renderGame() {
    cardsEl.textContent="Cards:"
    for(let x in cards){
        console.log(cards[x])
        cardsEl.textContent += cards[x]+ " "
    }
    sumEl.textContent = "Sum:" +sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()//    7
    sum += card
    cards.push(card)
    //pop() is to pop out(remove) last element of the Array
    //unshift to add at start of array and shift to remove
    renderGame()
    }
}





///similarly rock paper sesor game js psedo code
//let hands = ["rock", "paper", "scissor"]
//function random(){
    //let hand = Math.floor((Math.random()*3))
   // console.log(hands[hand])}
 // random()





