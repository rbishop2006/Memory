class Deck {
  constructor() {
    this.deck = []
  }

  create() {
    const values = [1, 1, 2, 2, 3, 3]

    values.forEach(x => {
      this.deck.push(new Card(x))
    })
  }
  shuffle() {
    var currentIndex = this.deck.length,
      temporaryValue,
      randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = this.deck[currentIndex]
      this.deck[currentIndex] = this.deck[randomIndex]
      this.deck[randomIndex] = temporaryValue
    }
  }
}
