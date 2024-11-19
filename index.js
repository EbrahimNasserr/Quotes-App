

var quoteButton = document.querySelector("button")
var quoteArray = ["“Be yourself; everyone else is already taken.” ― Oscar Wilde", "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“So many books, so little time.”"]
quoteButton.addEventListener("click", function () {

    var randomIndex = Math.floor(Math.random() * quoteArray.length);
    console.log(randomIndex);
    
    var randomQuote = quoteArray[randomIndex];
    document.querySelector(".quote").innerHTML = `<p>${randomQuote}</p>`
})

