// import functions and grab DOM elements
const transportationDropdownEl = document.getElementById('transportation-dropdown');
const transportationImgTag = document.getElementById('transportation-img');
const petDropdownEl = document.getElementById('pet-dropdown');
const petImgTag = document.getElementById('pet-img');
const coffeeDropdownEl = document.getElementById('coffee-dropdown');
const caffeineImgTag = document.getElementById('caffeine-img');
const displayScoresEl = document.getElementById('display-scores');
const sloganInputEl = document.getElementById('overheard-portlandia');
const sloganButton = document.getElementById('overheard-portlandia-btn');
const displaySlogansEl = document.getElementById('display-slogans');

const slogans = [''];

let timesTransportationChanged = 0;
let timesPetChanged = 0;
let timesCaffeineChanged = 0;

transportationDropdownEl.addEventListener('change', () => {
    transportationImgTag.src = `./assets/${transportationDropdownEl.value}-img.png`;
    timesTransportationChanged++;
    displayStats();
});

petDropdownEl.addEventListener('change', () => {
    petImgTag.src = `./assets/${petDropdownEl.value}-img.png`;
    timesPetChanged++;
    displayStats();
});

coffeeDropdownEl.addEventListener('change', () => {
    caffeineImgTag.src = `./assets/${coffeeDropdownEl.value}-img.png`;
    timesCaffeineChanged++;
    displayStats();
});

sloganButton.addEventListener('click', () => {
  slogans.push(sloganInputEl.value);
  sloganInputEl.value = '';
  displaySlogans();
});

function displayStats() {
    displayScoresEl.textContent = `You have changed your main transportation method ${timesTransportationChanged} times, you've changed your favorite pet ${timesPetChanged} times, and you've changed your favorite beverage ${timesCaffeineChanged} times.`;
}

function displaySlogans() {
    displaySlogansEl.textContent = '';
    for (let slogan of slogans) {
        const newPtag = document.createElement('p');
        newPtag.textContent = slogan;
        displaySlogansEl.append(newPtag);
    }

}

