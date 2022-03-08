let deck = createDeck();
let hand = [];

const createDeckBtn = document.getElementById('create-deck');
const shuffleDeckBtn = document.getElementById('shuffle');
const drawCardBtn = document.getElementById('draw');
const emptyCardsBtn = document.getElementById('empty');
const cardsDrawn = document.getElementById('cards-drawn');
const cardsTable = document.getElementById('cards-table');


createDeckBtn.addEventListener('click', function() {
    cardsTable.innerHTML = "";
    cardsDrawn.innerText = "0/52";
    hand = [];
    deck = createDeck();
})

shuffleDeckBtn.addEventListener('click', function() {
    shuffle(deck);
})

drawCardBtn.addEventListener('click', function() {

    let card = drawCard();
    const newCard = document.createElement("tr");
    newCard.classList.add(card.suit.toLowerCase());

    newCard.innerHTML = `
    
    <td>${hand.length}</td>
        <td>

        <article class="card">

        <aside class="top">${"&" + card.suit.toLowerCase() + ";"}<span>${card.value}</span></aside>
        <span class="middle">${"&" + card.suit.toLowerCase() + ";"}</span>
        <aside class="bottom">${"&" + card.suit.toLowerCase() + ";"}<span>${card.value}</span></aside>
        
        </article>

        </td>
    <td>${getCardValue(card)}</td>

    `;

    cardsTable.appendChild(newCard);


    //Works but hard to change color as I would need to access the child elements of cardsTable. (Dont know how)

    /*
    cardsTable.innerHTML += `
    <tr>
        <td>${hand.length}</td>
        <td>
        <article class="card">

        <aside class="top">${"&" + card.suit.toLowerCase() + ";"}<span>${card.value}</span></aside>
        <span class="middle">${"&" + card.suit.toLowerCase() + ";"}</span>
        <aside class="bottom">${"&" + card.suit.toLowerCase() + ";"}<span>${card.value}</span></aside>
        
        </article>
        </td>
        <td>${getCardValue(card)}</td>
    </tr>
    `;
*/
})

emptyCardsBtn.addEventListener('click', function() {
    console.log(deck.length);
    console.log(hand.length);
})

function getCardValue(card) {
    switch (card.value) {

        case "A":
            return "1 / 11";
        case "J":
            return "10";
        case "Q":
            return "10";
        case "K":
            return "10";
        default:
            return card.value;
    }
}

function createDeck() {

    const cards = [];

    const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const suits = ["Hearts", "Diams", "Spades", "Clubs"];


    for(const s of suits) {
        for(const v of values) {

            let value = v;
            let suit = s;

            cards.push({ value, suit });
        }
    }

    return cards;
}

function shuffle(cards) {
    var m = cards.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }
  
    return cards;
  }

  function drawCard() {
    if(deck.length >= 1) {
        hand.push(...deck.splice(deck[0],1));
        console.log(deck[0]);
        cardsDrawn.innerText = hand.length + "/52";
        return deck[0];
    }
  }
