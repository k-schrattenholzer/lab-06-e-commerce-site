export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === id) {
            console.log(item);
            return item;
        }
    }
}