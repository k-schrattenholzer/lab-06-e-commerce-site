import { getOrderTotal, renderTableRow } from './render-table.js';
import { cart } from './cart-data.js';
import { seedPacks } from "../products/data.js";

const tableBody = document.querySelector('tbody');
const total = getOrderTotal(seedPacks, cart);
const totalTd = document.getElementById('total');

for (let item of cart) {
    const tr = renderTableRow(item);
    tableBody.append(tr);
}

totalTd.textContent = total ;