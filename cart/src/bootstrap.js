
import('faker')

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;