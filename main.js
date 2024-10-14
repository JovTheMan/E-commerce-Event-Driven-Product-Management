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
