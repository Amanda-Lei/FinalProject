var button = $('.buttonOne')
var edittedText = $('.newMessage')

var quotes = ["It's nice to be important but it's more important to be nice. -Unknown (This is Abby's favorite Quote)", "I don't believe in failure, by simply saying you've failed, you've admitted you attempted.  And anyone who attempts is not a failure. -Sarah Dessen (This is Ilana's favorite quote)", "Fall seven times, get up eight. -Unknown (This is Tara's favorite quote)", "Be the change you want to see in the world. -Mahatma Ghandi (This is Mara's favorite quote)"]

button.on("click", pickQuote);

function pickQuote() {
  event.preventDefault();
  console.log("You clicked me");
  var random = Math.random() * quotes.length;
  var rounded = Math.floor(random);
  var newQuote = quotes[rounded];
  edittedText.text(newQuote);
}

var hopper = $("#Hopper-Text");
var hopperImg = $("#Hopper");
var hopperText = "Grace Hopper was a computer scientist and United States Navyrear admiral.  She was a pioneer of computer programming who popularized the idea of machine-independent programming languages. Hopper earned a Ph.D. in mathematics from Yale University and was a professor of mathematics at Vassar College. Hopper joined the Navy Reserves and was part of the team that developed the UNIVAC I computer. At Eckert–Mauchly she began developing the compiler. She believed that a programming language based on English was possible. Her compiler converted English terms into machine code understood by computers. At the age of 79, she was the oldest officer on active U.S. naval duty when she retired again in 1986."

hopperImg.on("mouseover",expandHopper);
function expandHopper(){
  console.log("HI BITCHES");
  event.preventDefault();
  hopper.text("hopperText");
}
