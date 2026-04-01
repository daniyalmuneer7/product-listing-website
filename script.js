const products = [
  {
    title: "iPhone 13",
    owner: "Daniyal",
    price: 799,
    image: "assests/iphone-13.jpg"
  },
  {
    title: "MacBook Pro",
    owner: "Ali",
    price: 1299,
    image: "assests/macbook-pro.jpg"
  },
  {
    title: "AirPods Pro",
    owner: "Usman",
    price: 249,
    image: "assests/airpod-pro.jpg"
  },
  {
    title: "Samsung S22",
    owner: "Ahmed",
    price: 499,
    image: "assests/samsung-s22.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(data) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  data.forEach((product, index) => {
    list.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>Owner: ${product.owner}</p>
        <p class="price">$${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

function searchProduct() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}

function filterCheap() {
  const filtered = products.filter(p => p.price < 500);
  displayProducts(filtered);
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
}

// Initial load
displayProducts(products);
updateCart();
