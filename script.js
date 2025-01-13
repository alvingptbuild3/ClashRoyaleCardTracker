document.getElementById('tagForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let tag = document.getElementById('tag').value;
    
    if(tag) {
        fetchCardMastery(tag);
    } else {
        document.getElementById('progress').innerHTML = "Please enter a valid Clash Royale tag.";
    }
});

function fetchCardMastery(tag) {
    // Replace 'your_api_key' with your actual Supercell API key.
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMyOTUwMjNlLThhMzAtNDAzOS1hYjFkLWU5YTMyNTM4NjljOSIsImlhdCI6MTczNjc0NzQ4MSwic3ViIjoiZGV2ZWxvcGVyLzgwMzljMzlhLWQzNmUtZDJmMS0zZWYwLWE4NmIyNGU3MTBjMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0OS4zNy4xMzUuNjIiXSwidHlwZSI6ImNsaWVudCJ9XX0.CwRdaEUe_hSEkEyJAUM48uSxK8UGX_oNC3zke0zn6Ct0Kf_LU8HTbZLnDjlSKM2XwN1t0aVhWpXAyQtUPs-IFg'; 
    const url = `https://api.clashroyale.com/v1/players/%23${tag}/currentdeck`;
    
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayProgress(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('progress').innerHTML = "Could not fetch data. Please check your tag.";
    });
}

function displayProgress(data) {
    if (data.cards) {
        let html = `<h3>Your Card Mastery Progress:</h3>`;
        data.cards.forEach(card => {
            html += `<p>${card.name}: ${card.level} (${card.maxLevel})</p>`;
        });
        document.getElementById('progress').innerHTML = html;
    } else {
        document.getElementById('progress').innerHTML = "No data found for this tag.";
    }
}

document.getElementById('card-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardName = document.getElementById('card-name').value.trim();
    const masteryLevel = document.getElementById('mastery-level').value;

    if (cardName && masteryLevel) {
        const listItem = document.createElement('li');
        listItem.textContent = `${cardName} - Mastery Level: ${masteryLevel}`;
        document.querySelector('#card-list ul').appendChild(listItem);

        document.getElementById('card-name').value = '';
        document.getElementById('mastery-level').value = '';
    }
});
