import { magicItems } from './Item-Masterlist.js';


function getRandomIndex() {
    return Math.floor(Math.random() * (magicItems.length));
}


export function getRing(arr) {
    const rings = []

    const ring = arr.map((item) => {
        if (item.type === 'ring') {
            return item.name
        }
    })

    rings.push(ring)
        return rings
}

export function randomItem(array) {
    
    let item = array[Math.floor(Math.random() * magicItems.length)];
    
    return item.name;
}


