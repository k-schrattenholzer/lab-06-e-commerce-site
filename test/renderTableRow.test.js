import { renderTableRow } from '../cart/render-table.js';

const test = QUnit.test;

test('renderTableRow should take in a cart item and return the correct HTML element (a <tr>)', (expect) => {

    const expected = `<tr><td>Granny's Bonnet</td><td>2</td><td>$6.99</td><td>$13.98</td></tr>`;

    const actual = renderTableRow({
        id: 1,
        quantity: 2
    });
   
    expect.equal(actual.outerHTML, expected);
});

