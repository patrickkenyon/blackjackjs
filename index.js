var deck = {
    'ace of hearts': 11,
    'two of hearts': 2,
    'three of hearts': 3,
    'four of hearts': 4,
    'five of hearts': 5,
    'six of hearts': 6,
    'seven of hearts': 7,
    'eight of hearts': 8,
    'nine of hearts': 9,
    'ten of hearts': 10,
    'jack of hearts': 10,
    'queen of hearts': 10,
    'king of hearts': 10,
    'ace of spades': 11,
    'two of spades': 2,
    'three of spades': 3,
    'four of spades': 4,
    'five of spades': 5,
    'six of spades': 6,
    'seven of spades': 7,
    'eight of spades': 8,
    'nine of spades': 9,
    'ten of spades': 10,
    'jack of spades': 10,
    'queen of spades': 10,
    'king of spades': 10,
    'ace of diamonds': 11,
    'two of diamonds': 2,
    'three of diamonds': 3,
    'four of diamonds': 4,
    'five of diamonds': 5,
    'six of diamonds': 6,
    'seven of diamonds': 7,
    'eight of diamonds': 8,
    'nine of diamonds': 9,
    'ten of diamonds': 10,
    'jack of diamonds': 10,
    'queen of diamonds': 10,
    'king of diamonds': 10,
    'ace of clubs': 11,
    'two of clubs': 2,
    'three of clubs': 3,
    'four of clubs': 4,
    'five of clubs': 5,
    'six of clubs': 6,
    'seven of clubs': 7,
    'eight of clubs': 8,
    'nine of clubs': 9,
    'ten of clubs': 10,
    'jack of clubs': 10,
    'queen of clubs': 10,
    'king of clubs': 10,
}

var card1 = drawCard(deck)
var card2 = drawCard(deck)
var card3 = drawCard(deck)
var card4 = drawCard(deck)

var totalScoreP1 = totalScore(card1, card2)
var totalScoreP2 = totalScore(card3, card4)

console.log(totalScoreP1)
console.log(totalScoreP2)

document.querySelector('.p1card1').innerHTML = 'p1s first card is a ' + card1['cardname'] + ' it has a value of ' + card1['value']
document.querySelector('.p1card2').innerHTML = 'p1s second card is a ' + card2['cardname'] + ' it has a value of ' + card2['value']
document.querySelector('.p1score').innerHTML = 'p1s total score is ' + totalScoreP1
document.querySelector('.p2card1').innerHTML = 'p2s first card is a ' + card3['cardname'] + ' it has a value of ' + card3['value']
document.querySelector('.p2card2').innerHTML = 'p2s second card is a ' + card4['cardname'] + ' it has a value of ' + card4['value']
document.querySelector('.p2score').innerHTML = 'p2s total score is ' + totalScoreP2
document.querySelector('.result').innerHTML = scoreCompare(totalScoreP1, totalScoreP2)

console.log(scoreCompare(totalScoreP1, totalScoreP2))

document.querySelector('.p1draw').addEventListener('click', function(){
    drawCard(deck)
})

function drawCard(deck) {
    var randCard = Object.keys(deck)[Math.floor(Math.random()*Object.keys(deck).length)]
    var value = deck[randCard]
    delete deck[randCard]
    return {'cardname': randCard, 'value': value}
}

function totalScore(card1, card2) {
    return card1['value'] + card2['value']
}

function scoreCompare(player1Score, player2Score) {
    switch(true) {
        case (player1Score > 21) && (player2Score > 21):
            return 'both players are bust'
            break
        case (player1Score > 21):
            return 'player 1 is bust, player 2 wins'
            break
        case (player2Score > 21):
            return 'player 2 is bust, player 1 wins'
            break
        case (player1Score > player2Score):
            return 'player 1 wins'
            break
        case (player2Score > player1Score):
            return 'player 2 wins'
            break
        case (player2Score === player1Score):
            return 'draw'
            break
    }
}