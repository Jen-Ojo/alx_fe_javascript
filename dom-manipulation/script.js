// Quotes Array
let quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "life" },
    { text: "Simplicity is the ultimate sophistication.", category: "design" }
];

// Function: displayRandomQuote
function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Function: addQuote
function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (text === "" || category === "") {
        return;
    }

    quotes.push({ text: text, category: category });

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    displayRandomQuote();
}

// Event listener on "Show New Quote"
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
