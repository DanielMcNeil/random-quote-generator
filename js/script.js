// load initial quote on page load
window.onload = printQuote;

// change quote every 10 seconds
window.setInterval(printQuote, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var numberOfQuotes = quotes.length;
var quotesUsed = [];

// select a random number and retrieve the object at that index position from quotes.js file
function getRandomQuote(number) {
  var randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}


function printQuote() {
  var used = true;
  var quoteNumber;
  
  // checks to see if a quote has been used yet, if yes call getRandomQuote again
  // if no, push quote number into quotesUsed
  
  while (used) {
    quoteNumber = getRandomQuote(numberOfQuotes);
    if (quotesUsed.includes(quoteNumber) === false) {
      used = false;
      quotesUsed.push(quoteNumber);
    }
  }
  
  // when all quotes are used, empty the quotesUsed array
  // all quotes are used before they repeat
  if (quotesUsed.length == numberOfQuotes) {
    quotesUsed = [];
  }
  
  // retrieve the object at that index position from quotes.js file
  // build an html code block using the selected quote object and inject it into index.html
  var selectedQuote = quotes[quoteNumber];
  var html = "<p class='quote'>" + selectedQuote.quote + "</p>";
  html += "<p class='source'>" + selectedQuote.source;
  if (selectedQuote.citation) {
    html += "<span class='citation'>" + selectedQuote.citation;
  }
  if (selectedQuote.year) {
    html += "<span class='year'>" + selectedQuote.year + "</p>";
  }
  
  document.getElementById('quote-box').innerHTML = html;
  changeBackgroundColor();
}

// random background color gererator
function changeBackgroundColor() {
  var red = getRandomQuote(255);
  var green = getRandomQuote(255);
  var blue = getRandomQuote(255);
  
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
}