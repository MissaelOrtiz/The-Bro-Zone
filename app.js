import { magicItems } from './Item-Masterlist.js';
import { getRing } from './functions.js';

const button = document.getElementById('button')
const span = document.getElementById('display');

button.addEventListener('click', () => {
    span.textContent = getRing(magicItems);
})