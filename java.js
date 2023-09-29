// Initialize variables
let cart = [];
let total = 0;

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutOrder = document.getElementById("checkout-button");

  // Clear the cart display
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    // Display "Your cart is empty" message when the cart is empty
    const emptyCartMessage = document.createElement("div");
    emptyCartMessage.textContent = "Your cart is empty.";
    emptyCartMessage.classList.add("empty-cart-message");
    cartItemsContainer.appendChild(emptyCartMessage);
    cartTotal.style.display = "none";
    checkoutOrder.style.display = "none";
  } else {
    // Iterate through the cart and display each item
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      checkoutOrder.style.display = "block";

      // Create and set the product image
      const productImage = document.createElement("img");
      productImage.classList.add("imager")
      productImage.src = item.image;
      productImage.alt = item.name;

      // Create and set the product name
      const productName = document.createElement("div");
      productName.textContent = item.name;
      productName.classList.add("cart-item-name");

      // Create and set the product quantity
      const productQuantity = document.createElement("div");
      productQuantity.textContent =` $125.00 x ${item.quantity}`;
      productQuantity.classList.add("pricer");

      // Create and set the product total
      const productTotal = document.createElement("div");
      productTotal.textContent =`$${item.price * item.quantity}.00`;
      productTotal.classList.add("quantita");

     // Create and set the delete button
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");

// Create an image element for the delete icon
const deleteIcon = document.createElement("img");
deleteIcon.classList.add("deleter")
deleteIcon.src = "./images/icon-delete.svg"; // Replace with the actual path to your delete icon image
deleteIcon.alt = "Delete";
deleteIcon.style.width = "15px"

deleteButton.addEventListener("click", function () {
  const emptyCartMessage = document.createElement("div");
  emptyCartMessage.textContent = "Your cart is empty.";
  emptyCartMessage.classList.add("empty-cart-message");
  cartItemsContainer.appendChild(emptyCartMessage);
  // Clear the cart logic goes here
  cartItem.innerHTML = ''; 
  cartItem.style.display = "none"
  checkoutOrder.style.display = "none"
  document.getElementById('icon-no').textContent = "0"
  // This will clear the contents of the cart
});

// Append the image element to the delete button
deleteButton.appendChild(deleteIcon);

      cartItem.appendChild(productImage);
      cartItem.appendChild(deleteButton);
      cartItem.appendChild(productName);
      cartItem.appendChild(productQuantity);
      cartItem.appendChild(productTotal);
      cartItem.appendChild(deleteButton);
      productName.appendChild(productQuantity)
      productName.appendChild(productTotal)
      productQuantity.appendChild(productTotal)

      cartItemsContainer.appendChild(cartItem);
    });
  }

  // Update the total price
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listener for the "+" button
document.getElementById("increment").addEventListener("click", () => {
  const quantityElement = document.getElementById("quantity");
  const currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity ++;
});

// Event listener for the "-" button
document.getElementById("decrement").addEventListener("click", () => {
  const quantityElement = document.getElementById("quantity");
  const currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity --;
  }
});

// Event listener for the "Add to Cart" button
document.getElementById("addToCart").addEventListener("click", () => {
  const productName = document.querySelector(".product-text").textContent;
  const productImage = document.querySelector(".carousel-image").src;
  const price = 125.00; // You can set the price dynamically if needed
  const quantity = parseInt(document.getElementById("quantity").textContent);

  if (quantity > 0) {
    // Add the product to the cart
    const item = {
      name: productName,
      image: productImage,
      price: price,
      quantity: quantity,
    };
    cart.push(item);
    total += price * quantity;

    // Update the cart display
    updateCartDisplay();

    // Reset the quantity
    document.getElementById("quantity").textContent = "0";
  }
});

// Initialize the cart display
updateCartDisplay();

