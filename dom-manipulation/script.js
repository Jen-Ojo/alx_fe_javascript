// script.js — advanced DOM manipulation demo
removeBtn.className = 'remove-btn';
removeBtn.textContent = 'Remove';
removeBtn.addEventListener('click', () => removeQuote(i));


right.appendChild(removeBtn);
li.appendChild(left);
li.appendChild(right);
quotesList.appendChild(li);
});
}


// Add a quote object to the array and update the DOM
function addQuote(text, category) {
const trimmedText = text.trim();
const trimmedCategory = category.trim().toLowerCase();
if (!trimmedText || !trimmedCategory) return;


quotes.push({ text: trimmedText, category: trimmedCategory });


// Update UI
renderCategoryOptions();
renderQuotesList();
showRandomQuote();
}


// Remove quote by index (mutates the array)
function removeQuote(index) {
if (index < 0 || index >= quotes.length) return;
quotes.splice(index, 1);
renderCategoryOptions();
renderQuotesList();
showRandomQuote();
}


// Wire up event listeners
function init() {
renderCategoryOptions();
renderQuotesList();
showRandomQuote();


newQuoteBtn.addEventListener('click', showRandomQuote);


categorySelect.addEventListener('change', showRandomQuote);


addQuoteForm.addEventListener('submit', (e) => {
e.preventDefault();
addQuote(newQuoteText.value, newQuoteCategory.value);
addQuoteForm.reset();
newQuoteText.focus();
});
}


// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}


// Expose functions for testing in the console (optional)
window._dq = { showRandomQuote, addQuote, removeQuote, quotes };