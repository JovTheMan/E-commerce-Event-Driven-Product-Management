// Task 2: Select HTML Elements for Price Display and Dropdown
const productPrice = document.getElementById('product-price');
const productSize = document.getElementById('product-size');
const purchaseButton = document.getElementById('purchase-button');

// Task 5: Selectors for New Product Form and Product List Container
const newProductName = document.getElementById('new-product-name');
const newProductSize = document.getElementById('new-product-size');
const newProductPrice = document.getElementById('new-product-price');
const newProductStock = document.getElementById('new-product-stock');
const addProductButton = document.getElementById('add-product-button');
const productList = document.getElementById('product-list');

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
purchaseButton.addEventListener('click', function () {
    const selectedOption = productSize.options[productSize.selectedIndex];
    const stockStatus = selectedOption.getAttribute('data-stock');
    
    if (stockStatus === 'in-stock') {
        alert('Purchase successful!');
    } else {
        alert('Sorry, this product is out of stock.');
    }
});

// Task 5: Event Listener for Adding New Products Dynamically
addProductButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Get values from the form
    const name = newProductName.value;
    const size = newProductSize.value;
    const price = newProductPrice.value;
    const stock = newProductStock.value;
    
    // Create new product element
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <h3>${name}</h3>
        <p>Size: <span class="product-size">${size}</span></p>
        <p>Price: $<span class="product-price">${price}</span></p>
        <p>Stock: <span class="product-stock">${stock}</span></p>
        <button class="purchase-button" ${stock === 'out-of-stock' ? 'disabled' : ''}>Purchase</button>
    `;
    
    productList.appendChild(productElement);
    newProductName.value = '';
    newProductSize.value = '';
    newProductPrice.value = '';
    newProductStock.value = 'in-stock';
});

// Event Delegation for Purchase Button on Dynamic Products
productList.addEventListener('click', function (e) {
    if (e.target.classList.contains('purchase-button')) {
        const product = e.target.closest('.product');
        const stockStatus = product.querySelector('.product-stock').textContent;
        
        if (stockStatus === 'in-stock') {
            alert('Purchase successful!');
        } else {
            alert('Sorry, this product is out of stock.');
        }
    }
});
