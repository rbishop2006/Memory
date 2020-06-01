/*create players for the game, takes a name as a parameter, Player object has the argument.name and empty.hand.  
Then, the hand property receives and is assigned a card.*/

class Player {
  constructor(name) {
    this.name = name
    this.hand = []
  }
  receiveCard(card) {
    this.hand.push(card)
  }
}
