// Array of quote objects
let quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "life" },
    { text: "Simplicity is the ultimate sophistication.", category: "design" }
];

// Function: displayRandomQuote()
function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Function: addQuote()
function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");

    const text = textInput.value.trim();
    const category = categoryInput.value.trim();

    if (text === "" || category === "") {
        return;
    }

    const newQuote = { text: text, category: category };
    quotes.push(newQuote);

    textInput.value = "";
    categoryInput.value = "";

    displayRandomQuote();
}

// Event listener for "Show New Quote"
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
