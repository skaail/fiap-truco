const SUITS = ['♠', '♥', '♣', '♦'];
const VALUES = ['2', '3', '4', '5', '6', '7', 'J', 'Q', 'K', 'A'];

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }
    
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    giveHands(){
        const hands = []
        for (let i = 0; i < 1; i += 1) {
            hands.push(this.cards.slice(i, i + 3))
            this.cards.splice(this.cards, 1)
        }
        return hands
    }

    dealCard() {
        const manilha = []
        for (let i = 0; i < 1; i += 1) {
            manilha.push(this.cards.slice(i, i + 1))
            this.cards.splice(this.cards, 1)
        }
        return manilha
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

function freshDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

