import { findById } from './utils.js';
import { seedPacks } from '../products/data.js';

export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const subTotalTd = document.createElement('td');

    const product = findById(seedPacks, cartItem.id);

    nameTd.textContent = product.name;
    priceTd.textContent = product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityTd.textContent = cartItem.quantity;

    const total = getItemTotal(product.price, cartItem.quantity);
    subTotalTd.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    tr.append(nameTd, quantityTd, priceTd, subTotalTd);

    return tr;
}

function getItemTotal(itemPrice, itemQuantity) {
    const total = itemPrice * itemQuantity;
    return total;
}

export function getOrderTotal(allProducts, totalCart) {
    let accumulator = 0;
    for (let item of totalCart) {
        const product = findById(allProducts, item.id);
        const total = product.price * item.quantity;
        accumulator = accumulator + total;
    }
    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}