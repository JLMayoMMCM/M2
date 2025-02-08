const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');
const copyButton = document.getElementById('CopyQuoteBtn');


function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';


    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

function copyQuote() {
    alert('Quote copied to clipboard!');
    const text = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Quote copied to clipboard:', text);
        })
        .catch(error => {
            console.error('Failed to copy quote to clipboard:', error);
        });
}

button.addEventListener('click', fetchQuote);
fetchQuote();

copyButton.addEventListener('click', copyQuote);