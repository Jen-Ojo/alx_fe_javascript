// Array of quote objects
let quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "life" },
    { text: "Simplicity is the ultimate sophistication.", category: "design" }
];

// Function: displayRandomQuote()
function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the DOM with the selected quote
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Function: addQuote()
function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");

    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();

    if (newText === "" || newCategory === "") {
        return;
    }

    // Create new quote object
    const newQuote = { text: newText, category: newCategory };

    // Add to array
    quotes.push(newQuote);

    // Clear inputs
    textInput.value = "";
    categoryInput.value = "";

    // Update DOM by showing a new random quote
    displayRandomQuote();
}

// Event listener on "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
