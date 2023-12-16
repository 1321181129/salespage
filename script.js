html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clothing Store</title>
    <style>
        /* Your existing CSS styles go here */
    </style>
</head>
<body>
    <header>
        <h1>Clothing Store</h1>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#shop">Shop</a>
    </nav>

    <section id="shop">
        <h2>New Arrivals</h2>
        <div class="product" onclick="addToCart('Stylish Denim Jacket', 49.99)">
            <div class="product-container">
                <img src="product1.jpg" alt="Product 1">
                <div class="product-info">
                    <h2>Stylish Denim Jacket</h2>
                    <p>This trendy denim jacket is a must-have for your wardrobe.</p>
                    <p class="price">$49.99</p>
                    <div class="rating">
                        <img src="star.png" alt="Star">
                        <img src="star.png" alt="Star">
                        <img src="star.png" alt="Star">
                        <img src="star.png" alt="Star">
                        <img src="star-half.png" alt="Half Star">
                    </div>
                </div>
            </div>
        </div>

        <!-- Add more product entries as needed -->

        <div id="cart">
            <h2>Shopping Cart</h2>
            <ul id="cart-items"></ul>
            <p id="total-price">Total: $0.00</p>
        </div>
    </section>

    <script>
        let cartItems = [];
        let totalPrice = 0;

        function addToCart(productName, price) {
            cartItems.push({ name: productName, price: price });
            totalPrice += price;

            updateCartUI();
        }

        function updateCartUI() {
            const cartList = document.getElementById('cart-items');
            const totalElement = document.getElementById('total-price');

            // Clear previous items
            cartList.innerHTML = '';

            // Populate cart items
            cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                cartList.appendChild(listItem);
            });

            // Update total price
            totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
    </script>
</body>
</html>
