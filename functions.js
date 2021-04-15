import { magicItems } from './Item-Masterlist.js';
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




