// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../products/utils.js';

const test = QUnit.test;

test('renderProduct should take in a seed and return the correct HTML elements', (expect) => {
    const expected = `<li class="seed"><h3 class="seed-name"></h3><img class="seed-img" src="" alt="seed pack"><div class="flex"><p class="seed-type"></p><p class="plant-height"></p><p class="seed-light"></p><p class="seed-price"></p></div></li>`;
    
    const actual = renderProduct(
        { 
            id: 7,
            name:'Cannas',
            image:'../assets/new cannas.jpeg',
            type:'Flower',
            height:'3-10 ft',
            light:'full sun',
            price: 6.49,
        }
    );

    expect.equal(actual, expected);
});
