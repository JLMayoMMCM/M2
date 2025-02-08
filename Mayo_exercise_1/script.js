const button = document.getElementById('changeTextBtn');
const header = document.getElementById('text');

button.addEventListener('click', function() {
    header.textContent = 'You clicked the button!';
    setTimeout(function() {
        header.textContent = 'This changes when the button is selected.';
    }, 5000);
});