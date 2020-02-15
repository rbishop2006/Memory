$(document).ready(function() {
  var memory = new Memory("pname")

  const state = { card1: null, card2: null }
  memory.createGame()
  memory.start()
  $(".cards").flip()

  $(".game").on("click", ".front", function(e) {
    e.preventDefault()
    if (state.card1 === null) {
      state.card1 = $(this)
    } else {
      state.card2 = $(this)
      if (state.card1 == state.card2) {
        state.card1.flip(false)
        state.card2.flip(false)
        state.card1 = null
        state.card2 = null
      } else if (state.card1 !== state.card2) {
        setTimeout(() => {
          state.card1.flip(true)
          state.card2.flip(true)
        }, 2000)
        // state.card1 = null
        // state.card2 = null
      }
    }
    console.log(state)
  })
})

// var name1 = null
// var name2 = null

// if (name1 == null) {
//   name1 = $(this)
// } else {
//   name2 = $(this)

//   if (name1.data("name") === name2.data("name")) {
//     name1.off("flip")
//     name2.off("flip")

//     name1 = null
//     name2 = null
//   } else {
//     setTimeout(() => {
//       name1.flip(true)
//       name2.flip(true)
//       name1 = null
//       name2 = null
//     }, 1000)
//   }
// }
// console.log(name1, name2)
