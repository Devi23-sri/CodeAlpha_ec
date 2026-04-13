let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load products
if (document.getElementById("products")) {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('products');
      data.forEach(p => {
        container.innerHTML += `
          <div>
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <a href="product.html?id=${p.id}">View</a>
          </div>
        `;
      });
    });
}

// Product page
if (window.location.search.includes("id")) {
  const id = new URLSearchParams(window.location.search).get("id");

  fetch(`/api/products/${id}`)
    .then(res => res.json())
    .then(p => {
      document.getElementById("name").innerText = p.name;
      document.getElementById("desc").innerText = p.desc;
      document.getElementById("price").innerText = p.price;

      window.currentProduct = p;
    });
}

function addToCart() {
  cart.push(window.currentProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

// Cart page
if (document.getElementById("cart")) {
  const list = document.getElementById("cart");

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name}</li>`;
  });
}

function checkout() {
  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cart })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

// Auth
function register() {
  fetch('/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function login() {
  fetch('/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}
