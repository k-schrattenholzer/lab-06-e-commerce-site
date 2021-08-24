import { renderTableRow, getOrderTotal } from '../cart/render-table.js';

const test = QUnit.test;

test('renderTableRow should take in a cart item and return the correct HTML element (a <tr>)', (expect) => {

    const expected = `<tr><td>Granny's Bonnet</td><td>2</td><td>$6.99</td><td>$13.98</td></tr>`;

    const actual = renderTableRow({
        id: 1,
        quantity: 2
    });
   
    expect.equal(actual.outerHTML, expected);
});

test('getOrderTotal should take in products and cart and return the total price of all items in the cart', (expect) => {

    const expected = '$72.00';

    const actual = getOrderTotal([
        { id: 1, price: 12 },
        { id: 2, price: 8 },
        { id: 3, price: 5 },
    ],
    [
        { id: 4, price: 4 },
        { id: 2, price: 6 },
    ]
    );
   
    expect.equal(actual.outerHTML, expected);
});

