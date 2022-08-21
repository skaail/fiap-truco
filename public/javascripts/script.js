import Deck from './deck.js'

const deck = new Deck()
deck.shuffle()
deck.giveHands()
console.log(deck)

const hand1 = [deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit]
const hand2 = [deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit]
const hand3 = [deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit]
const hand4 = [deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit, deck.giveHands()[0][0].value + deck.giveHands()[0][0].suit]
const manilha = deck.dealCard()[0][0].value + deck.dealCard()[0][0].suit

const hand1Html = document.getElementById('hand1')
const hand2Html = document.getElementById('hand2')
const hand3Html = document.getElementById('hand3')
const hand4Html = document.getElementById('hand4')

console.log(hand1)
console.log(hand2)
console.log(hand3)
console.log(hand4)
console.log(manilha)

const manilhaHtml = document.getElementById('manilha')

manilhaHtml.innerHTML = manilha
