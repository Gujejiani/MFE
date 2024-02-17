
import faker from 'faker'




 const mount = (el)=>{
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;

}

// Context/Situation: #1
// We are running the products application in isolation
// We are using the local index.html file
// which definitely has a div with an id of 'dev-products'
// we want to immediately render our app into that div
if(process.env.NODE_ENV === 'development'){ // in webpack we can set the NODE_ENV to development
    const el = document.querySelector('#cart-dev');
    if(el){
        mount(el);
    }
}

// Context/Situation: #2 
// We are running the dev-products application in development or production
// through the container application
// No guarantee that an element with an id of 'dev-products' exists
// We DO NOT WaNT to immediately render our app into the element with an id of 'dev-products'

export { mount}