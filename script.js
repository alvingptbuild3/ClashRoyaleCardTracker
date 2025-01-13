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
