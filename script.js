const decrementButton = document.getElementById('decrement');
        const incrementButton = document.getElementById('increment');
        const quantityElement = document.getElementById('quantity');

        let quantity = 0;

        decrementButton.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                quantityElement.innerText = quantity;
            }
        });

        incrementButton.addEventListener('click', () => {
            quantity++;
            quantityElement.innerText = quantity;
        });

        // JavaScript for adding to cart (you can implement your cart logic here)
        const addToCartButton = document.getElementById('addToCart');

        addToCartButton.addEventListener('click', () => {
            // Add your cart logic here
            alert(`Added ${quantity} item(s) to the cart.`);
        });