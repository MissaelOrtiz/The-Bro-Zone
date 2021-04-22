import { magicItems } from './Item-Masterlist.js';
import { getRing , randomItem } from './functions.js';

const button = document.getElementById('button')
const span = document.getElementById('display');
const randomResult = document.getElementById('randomResult')
const rngButton = document.getElementById('button-rng');
const itemCard = document.getElementById('item-card');
const itemSquare = document.getElementById('item-square');



//button.addEventListener('click', () => {
//    span.textContent = getRing(magicItems);
//})
function removeSpin() {
    itemCard.classList.remove('spin')
}
function addSpin() {
    itemCard.classList.add('spin')
}

rngButton.addEventListener('click', () => {
    randomResult.textContent =  randomItem(magicItems);
    
    
    itemCard.classList.remove('hidden')
    

    if (itemCard.classList.contains('spin')) {
        setTimeout(removeSpin, 3000);
    } 
    if (itemCard.classList.length === 1) {
        addSpin()
        setTimeout(removeSpin, 3000)
    }
    // itemCard.classList.add('spin')
    // itemCard.classList.remove('spin')
    
})