class Deck {
  constructor() {
    this.deck = []
  }

  create() {
    const data = [
      {
        name: "bobafett",
        img: "assets/bobaF.jpg"
      },

      {
        name: "C3po",
        img: "assets/C3po.jpg"
      },

      {
        name: "Chewy",
        img: "assets/Chewy.jpg"
      },

      {
        name: "darthMaul",
        img: "assets/darthMaul.jpeg"
      },

      {
        name: "darthSidious",
        img: "assets/darthSidious.jpg"
      },

      {
        name: "deathstar",
        img: "assets/deathstar.jpg"
      },

      {
        name: "greivous",
        img: "assets/greivous.jpg"
      },

      {
        name: "jediSymbol",
        img: "assets/jediSymbol.jpg"
      },

      {
        name: "MilliniumFalcon",
        img: "assets/MilliniumFalcon.jpg"
      }
    ]

    data.forEach(face => {
      this.deck.push(new Card(face.img, face.name))
      this.deck.push(new Card(face.img, face.name))
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
