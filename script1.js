const merchandise = [
    { id: 1, name: 'hoodie', price: 15, image: 'img/9.png' },
    { id: 2, name: 'T-shirt', price: 12, image: 'img/2.png' },
    { id: 3, name: 'Hoddie', price: 20, image: 'img/3.png' },
    { id: 4, name: 'Hoddie', price: 5, image: 'img/1.png' },
    { id: 5, name: 'sweater', price: 25, image: 'img/4.png' },
    { id: 6, name: 'T-shirt Print', price: 18, image: 'img/6.png' },
    { id: 7, name: 'art hoddie', price: 8, image: 'img/2.png' },
    { id: 8, name: 'Hoodie', price: 45, image: 'img/1.png' },
    { id: 9, name: 'T-shirt', price: 30, image: 'img/3.png' },
    { id: 10, name: 'Print shirt', price: 10, image: 'img/1.png' }
];

let cart = [];

function renderMerchandise() {
    const container = document.getElementById('merchandise');
    merchandise.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow-lg';
        card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-lg">
        <h3 class="text-xl font-semibold mt-2">${item.name}</h3>
        <p class="text-lg text-gray-700">$${item.price}</p>
        <button onclick='addToCart(${JSON.stringify(item)})' class="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
      `;
        container.appendChild(card);
    });
}

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <div>
            <span>$${item.price}</span>
            <button onclick="removeFromCart(${index})" class="ml-4 text-red-500">Remove</button>
          </div>
        </div>
      `;
    });
    document.getElementById('total').innerText = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
}

renderMerchandise();