var colors = [
  "aqua",
  "black",
  "plum",
  "brown",
  "peru",
  "gold",
  "green",
  "gray",
  "magenta",
  "orchid",
  "orange",
  "pink",
  "tan",
];
var target;
var guesses = 0;
var finished = false;
var guess_input;

function do_game() {
  //  colors.sort();
  target = Math.floor(Math.random() * colors.length);
  do {
    guess_input = prompt(
      "I am thinking of one of these colors\n\n" + colors +
      "\n\nGuess the color?"
    )
    guesses += 1;
  } while (check_guess());
}

function check_guess() {
  var index = colors.indexOf(guess_input);
  if (index < 0)
    alert("I don’t recognize that color!");
  else if (index > target)
    alert("Your input is alphabetically higher than mine!");
  else if (index < target)
    alert("Your input is alphabetically lower than mine!");
  else {
    elem_body = document.getElementsByTagName("body")[0];
    elem_body.style.background = colors[target];
    alert("You\'re right! It took you " + guesses + " guesses!");
    return false;
  }
  return true;
}
