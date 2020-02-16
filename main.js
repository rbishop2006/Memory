$(document).ready(function() {
  var memory = new Memory("pname")

  memory.createGame()
  memory.start()
  $(".cards").flip()

  var name1 = null
  var name2 = null
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
      } else if (name1.data("name") != name2.data("name")) {
        setTimeout(() => {
          name1.flip(false)
          name2.flip(false)
          console.log("mismatch")
          name1 = null
          name2 = null
        }, 1000)
      }
    }
    console.log(name1, name2)
  })
})
