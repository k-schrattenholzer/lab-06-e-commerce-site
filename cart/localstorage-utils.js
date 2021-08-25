const cart = 'CART'

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

export function addToCart() {

}

export function clearCart() {

}