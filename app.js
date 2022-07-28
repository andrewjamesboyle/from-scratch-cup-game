// import functions and grab DOM elements
const transportationDropdownEl = document.getElementById('transportation-dropdown');
const transportationImgTag = document.getElementById('transportation-img');
const petDropdownEl = document.getElementById('pet-dropdown');
const petImgTag = document.getElementById('pet-img');
const coffeeDropdownEl = document.getElementById('coffee-dropdown');
const caffeineImgTag = document.getElementById('caffeine-img');

// let state
let timesTransportationChanged = 0;
let timesPetChanged = 0;
let timesCaffeineChanged = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

transportationDropdownEl.addEventListener('change', () => {
    transportationImgTag.src = `./assets/${transportationDropdownEl.value}-img.png`;
    timesTransportationChanged++;
});

petDropdownEl.addEventListener('change', () => {
    petImgTag.src = `./assets/${petDropdownEl.value}-img.png`;
    timesPetChanged = 0;
});

coffeeDropdownEl.addEventListener('change', () => {
    caffeineImgTag.src = `./assets/${coffeeDropdownEl.value}-img.png`;
    timesCaffeineChanged++
})