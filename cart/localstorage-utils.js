import { findById } from './utils.js';

const cart = 'CART';

export function getCart() {
    const stringedCart = localStorage.getItem(cart);
    const finalCart = JSON.parse(stringedCart);

    if (!stringedCart) {
        return [];
    }
    return finalCart;
}

export function sendCart(cartArray) {
    const stringedCart = JSON.stringify(cartArray);
    localStorage.setItem(cart, stringedCart);
}

export function addToCart(addedItemId) {
    // grab the cart from local storage
    const cart = getCart();

    // once we have the cart, use findById to see if the item we're adding is already in the cart
    const productInCart = findById(cart, addedItemId);

    // if this product is already in the cart,simply increment the quantity
    if (productInCart) {
        productInCart.quantity++;
    } else {
    // ELSE (if it is NOT in the cart) make a new object and put it in the cart
        const newAddedItem = { id: addedItemId, quantity: 1 };
        cart.push(newAddedItem);
    }    
     // save the updated cart in local storage
    sendCart(cart);
}

export function clearCart() {

}