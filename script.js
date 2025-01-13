// Your Clash Royale API Key
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMyOTUwMjNlLThhMzAtNDAzOS1hYjFkLWU5YTMyNTM4NjljOSIsImlhdCI6MTczNjc0NzQ4MSwic3ViIjoiZGV2ZWxvcGVyLzgwMzljMzlhLWQzNmUtZDJmMS0zZWYwLWE4NmIyNGU3MTBjMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0OS4zNy4xMzUuNjIiXSwidHlwZSI6ImNsaWVudCJ9XX0.CwRdaEUe_hSEkEyJAUM48uSxK8UGX_oNC3zke0zn6Ct0Kf_LU8HTbZLnDjlSKM2XwN1t0aVhWpXAyQtUPs-IFg'; 

document.getElementById('playerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const playerTag = document.getElementById('tag').value;
    
    try {
        const response = await fetch(`https://api.clashroyale.com/v1/players/%23${playerTag}/currentdeck`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        if (data.cards) {
            displayDeckInfo(data.cards);
        } else {
            document.getElementById('deckInfo').innerText = 'No deck information found for this player.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('deckInfo').innerText = 'Error fetching data. Please try again.';
    }
});

function displayDeckInfo(cards) {
    const deckInfoContainer = document.getElementById('deckInfo');
    deckInfoContainer.innerHTML = `<h2>Your Deck:</h2>`;
    
    cards.forEach(card => {
        deckInfoContainer.innerHTML += `
            <p>Card: ${card.name} | Level: ${card.level}</p>
        `;
    });
}
