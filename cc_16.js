// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(products => {
            console.log('Products fetched using .then():');
            products.forEach(product => console.log(product.fields.name));
        })
        .catch(handleError);
}

