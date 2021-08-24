import { renderTableRow } from './render-table.js';
import { cart } from './cart-data.js';
import { seedPacks } from "../products/data.js";

const tableBody = document.querySelector('tbody');

for (let item of cart) {
    const tr = renderTableRow(item);
    tableBody.append(tr);
}

