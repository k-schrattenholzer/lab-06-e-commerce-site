export function renderProduct(seed) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const flexDiv = document.createElement('div');
    const typeP = document.createElement('p');
    const heightP = document.createElement('p');
    const lightP = document.createElement('p');
    const priceP = document.createElement('p');
    const cartButton = document.createElement('button');

    li.classList.add('seed');
    h3.classList.add('seed-name');
    img.classList.add('seed-img');
    flexDiv.classList.add('flex');
    typeP.classList.add('seed-type');
    heightP.classList.add('plant-height');
    lightP.classList.add('seed-light');
    priceP.classList.add('seed-price');
    cartButton.classList.add('cart-button');

    h3.textContent = seed.name;
    img.src = seed.image;
    typeP.textContent = `Seed type: ${seed.type}`;
    heightP.textContent = `Grows to: ${seed.height}`;
    lightP.textContent = `Needs: ${seed.light}`;
    priceP.textContent = `$${seed.price}`;
    cartButton.textContent = 'Add to Cart';

    flexDiv.append(
        typeP,
        heightP,
        lightP,
        priceP
    );

    li.append(
        h3,
        img,
        flexDiv,
        cartButton
    );
    cartButton.addEventListener('click', () => {
        alert(`Added ${seed.name} to the cart`);
    });
    return li;

}