$(document).ready(function() {
  var memory = new Memory("pname")

  memory.createGame()
  memory.start()
  $(".cards").flip()
  var num1 = ""
  var num2 = ""
  $(".cards").on("click", ".front", function(e) {
    e.preventDefault()

    value = $(this)
      .find("+ .back")
      .html()
    if (num1 == "") {
      num1 += value
    } else {
      num2 += value
    }
    if (num1 !== "" && num2 !== "" && num1 === num2) {
      num1 = ""
      num2 = ""
      console.log("match")
    } else if (num1 !== "" && num2 !== "" && num1 !== num2) {
      num1 = ""
      num2 = ""

      console.log("flip over")
    }

    console.log(num1, num2)
  })
 
