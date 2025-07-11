// Lista inicial de productos
let products = [
  {
    name: "Camiseta",
    price: 15.99,
    description: "Camiseta 100% algodón."
  },
  {
    name: "Pantalón",
    price: 29.99,
    description: "Pantalón casual para uso diario."
  },
  {
    name: "Zapatos",
    price: 49.99,
    description: "Zapatos de cuero."
  }
];

// Función para renderizar la lista
function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach(product => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${product.name}</strong><br>
      Precio: $${product.price.toFixed(2)}<br>
      ${product.description}
    `;
    list.appendChild(item);
  });
}

// Renderizar al cargar
window.onload = renderProducts;

// Agregar producto con datos ingresados
document.getElementById("add-product").addEventListener("click", () => {
  const nameInput = document.getElementById("product-name");
  const priceInput = document.getElementById("product-price");
  const descriptionInput = document.getElementById("product-description");

  const newProduct = {
    name: nameInput.value || "Sin nombre",
    price: parseFloat(priceInput.value) || 0.0,
    description: descriptionInput.value || "Sin descripción"
  };

  products.push(newProduct);
  renderProducts();

  // Limpiar campos
  nameInput.value = "";
  priceInput.value = "";
  descriptionInput.value = "";
});
