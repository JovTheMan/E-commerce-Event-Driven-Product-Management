// Task 2: Select HTML Elements for Price Display and Dropdown
const productPrice = document.getElementById('product-price');
const productSize = document.getElementById('product-size');

// Update price based on selected size
productSize.addEventListener('change', function () {
    const selectedOption = productSize.options[productSize.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    
    // Update price display
    productPrice.textContent = `$${price}.00`;
});

// Task 3: Update Price and Handle Stock Availability
productSize.addEventListener('change', function () {
    const selectedOption = productSize.options[productSize.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const stockStatus = selectedOption.getAttribute('data-stock');
    
    // Update price display
    productPrice.textContent = `$${price}.00`;

    // Enable or disable purchase button based on stock status
    purchaseButton.disabled = stockStatus !== 'in-stock';
});
