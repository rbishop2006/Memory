class Memory {
  constructor(player1) {
    this.player1 = new Player(player1, [])
    this.deck = []
  }

  createGame() {
    var deck = new Deck()
    deck.create()
    deck.shuffle()
    this.deal(deck.deck)
  }
  deal(cards) {
    cards.forEach(card => {
      this.player1.receiveCard(card)
    })
  }
  start() {
    var player1 = ""

    this.player1.hand.forEach(card => {
      player1 += `<div class="cards" > 
      <div class="front" data-name="${card.name}"> 
        Front content
      </div> 
      <div class="back" >
        <img src="${card.img}"></img>
      </div> 
    </div>`
      document.querySelector(".game").innerHTML = player1
    })
    console.log(this.player1.hand)
  }
}
