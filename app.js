import { magicItems } from './Item-Masterlist.js';
import { getRing , randomItem } from './functions.js';

const button = document.getElementById('button')
const span = document.getElementById('display');
const randomResult = document.getElementById('randomResult')
const rngButton = document.getElementById('button-rng');

//button.addEventListener('click', () => {
//    span.textContent = getRing(magicItems);
//})

rngButton.addEventListener('click', () => {
    randomResult.textContent =  randomItem(magicItems);
    
})