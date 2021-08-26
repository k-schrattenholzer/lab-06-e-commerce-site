// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addToCart } from '../cart/localstorage-utils.js';
import { renderProduct } from '../products/utils.js';

const test = QUnit.test;

test('renderProduct should take in a seed and return the correct HTML elements', (expect) => {
    const expected = `<li class="seed"><h3 class="seed-name">Pansy</h3><img class="seed-img" src="../assets/pansy.jpeg"><div class="flex"><p class="seed-type">Seed type: Flower</p><p class="plant-height">Grows to: 6-12 in.</p><p class="seed-light">Needs: partial sun</p><p class="seed-price">$4.99</p></div><button class=\"cart-button\">Add to Cart</button></li>`;
    
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

    expect.equal(actual.outerHTML, expected);
});

test('addToCart should take an id and increment quantity of that item ', (expect) => {
    const cartBefore = [{
        id: 4,
        quantity: 6,
    },
    {
        id: 7,
        quantity: 3,
    }
    ];

    const cartAfter = [{
        id: 4,
        quantity: 6,
    },
    {
        id: 7,
        quantity: 4,
    }
    ];

    const stringyCart = JSON.stringify(cartBefore);
    localStorage.setItem('CART', stringyCart);

    addToCart(7, 1);

    stringyCartAfter = localStorage.getItem('CART');
    const actual = JSON.parse(stringyCartAfter);

    expect.deepEqual(actual, cartAfter);
});

