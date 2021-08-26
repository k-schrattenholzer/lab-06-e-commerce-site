import { renderProduct } from './utils.js';
import { seedPacks } from './data.js';

const ul = document.querySelector('#seed');

for (let seed of seedPacks) {
    const li = renderProduct(seed);
    ul.append(li);
}
