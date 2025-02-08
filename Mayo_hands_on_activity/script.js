const apiKey = 'Yzc8USdbMtlWaRFwTlLkEWQkW99TLMcszvQBnZpz';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const description = document.getElementById('quote');
const pictureContainer = document.getElementById('pictureContainer');
const newQuoteBtn = document.getElementById('newpicBtn');
const date = document.getElementById('date');

async function fetchFact() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();

        description.textContent = data.explanation;
        date.textContent = `📅 Date: ${data.date}`;

        pictureContainer.innerHTML = '';

        if (data.media_type === 'image') {
            const image = document.createElement('img');
            image.src = data.url;
            image.alt = 'NASA Picture of the Day';
            image.classList.add('nasa-image');
            pictureContainer.appendChild(image);

            setTimeout(() => {
                setTimeout(() => {
                    pictureContainer.innerHTML = '';
                    description.textContent = '';
                    pictureContainer.style.opacity = '1';
                    date.textContent = '';
                }, 1000);
            }, 20000);
        }
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        description.textContent = '❌ Failed to load data. Try again!';
    }
}

newQuoteBtn.addEventListener('click', fetchFact);
