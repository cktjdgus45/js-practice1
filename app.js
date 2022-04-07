const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(res => res.json())
        .then(data => data.content);
}

async function getNextQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = '';
    console.log(quote.split(''));
    quote.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char;
        quoteDisplayElement.appendChild(span);
    })
    quoteInputElement.value = null;
}

getNextQuote();

quoteInputElement.addEventListener('input', () => {
    console.log('changed');
})