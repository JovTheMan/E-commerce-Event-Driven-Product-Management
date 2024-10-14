// Task 2: Select HTML Elements for Price Display and Dropdown
const productPrice = document.getElementById('product-price');
const productSize = document.getElementById('product-size');

// Task 2 & Task 3: Update Price Based on Selected Size and Handle Stock Availability
productSize.addEventListener('change', function () {
    const selectedOption = productSize.options[productSize.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const stockStatus = selectedOption.getAttribute('data-stock');
    
    // Update price display
    productPrice.textContent = `$${price}.00`;

    // Enable or disable purchase button based on stock status
    purchaseButton.disabled = stockStatus !== 'in-stock';
});

// Task 4: Handle Purchase Action for Main Product
const purchaseButton = document.getElementById('purchase-button');

purchaseButton.addEventListener('click', function () {
    const selectedOption = productSize.options[productSize.selectedIndex];
    const stockStatus = selectedOption.getAttribute('data-stock');
    
    if (stockStatus === 'in-stock') {
        alert('Purchase successful!');
    } else {
        alert('Sorry, this product is out of stock.');
    }
});
