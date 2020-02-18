$(document).ready(function() {
  var name1 = null
  var name2 = null
  var turns = null
  var matchedCards = null
  var memory = null
  $(".startGame").on("click", function(e) {
    e.preventDefault()
    memory = new Memory("pname")
    memory.createGame()
    memory.start()
    $("body")
      .removeClass("background2 background3")
      .addClass("background1")
    $(".cards").flip()
    $("#turnsLeftInGame").html(`Guesses left 15`)
    $(".startGame").html(`Restart`)
    name1 = null
    name2 = null
    turns = 15
    matchedCards = 0
  })
  $(".game").on("click", ".cards", function(e) {
    e.preventDefault()

    inPlay = $(this)

    if (name1 == null) {
      name1 = inPlay
    } else {
      name2 = inPlay
      if (name1.data("name") == name2.data("name")) {
        name1.off(".flip").click(false)
        name2.off(".flip").click(false)
        console.log("match")
        name1 = null
        name2 = null
        turns = turns
        matchedCards++
        if (matchedCards == 9) {
          setTimeout(() => {
            $("body")
              .removeClass("background1")
              .addClass("background2")
            $(".game").html(
              `<div class="gameWon"><h1>You Win</h1><h3>"Do or do not. There is no try.  Pass on what you have learned"</h3</div>`
            )
          }, 1000)
        }
      } else if (name1.data("name") != name2.data("name")) {
        turns--
        setTimeout(() => {
          name1.flip(false)
          name2.flip(false)
          console.log("mismatch")
          name1 = null
          name2 = null
          if (turns === 0) {
            $("body")
              .removeClass("background1")
              .addClass("background3")
            $(".game").html(
              `<div class="gameLost"><h1>Game Over<h1><h3>“You don’t know the power of the dark side! 
              You must Restart your game.”</h3></div>`
            )
          }
        }, 1000)
      }
    }
    console.log(name1, name2)
    console.log(turns)
    $("#turnsLeftInGame").html(`Guesses left ${turns}`)
  })
})
