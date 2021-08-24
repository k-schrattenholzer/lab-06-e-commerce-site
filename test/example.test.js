// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../products/utils.js';

const test = QUnit.test;

test('renderProduct should take in a seed and return the correct HTML elements', (expect) => {
    const expected = `<li class="seed"><h3 class="seed-name">Pansy</h3><img class="seed-img" src="../assets/pansy.jpeg" alt="seed pack"><div class="flex"><p class="seed-type">Flower</p><p class="plant-height">6-12 in.</p><p class="seed-light">partial sun</p><p class="seed-price"></p>4.99</div></li>`;
    
    const actual = renderProduct(
        {
            id: 8,
            name:'Pansy',
            image:'../assets/pansy.jpeg',
            type:'Flower',
            height:'6-12 in.',
            light:'partial sun',
            price: 4.99,
        });

    expect.deepEqual(actual, expected);
});
