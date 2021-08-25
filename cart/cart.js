import { getOrderTotal, renderTableRow } from './render-table.js';
import { getCart, orderAlert, clearCart, returnUserHome } from './localstorage-utils.js';
import { seedPacks } from '../products/data.js';

const cart = getCart();

const tableBody = document.querySelector('tbody');
const total = getOrderTotal(seedPacks, cart);
const totalTd = document.getElementById('total');
const checkoutButton = document.getElementById('checkout-button');

for (let item of cart) {

    const tr = renderTableRow(item);

    tableBody.append(tr);
}

totalTd.textContent = total ;

checkoutButton.addEventListener('click', () =>{
    orderAlert();
    clearCart();
    returnUserHome();
});