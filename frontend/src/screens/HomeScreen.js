// import data from '../data.js';

//* Export HomeScreen as an object with render() method
const HomeScreen = {
  // Return unordered list of products, Make render() async for fetching
  render: async () => {
    // const { products } = data; //// Hardcoded.
    // url to which we send a request to.

    //* Get backend data in the frontend:
    const response = await fetch('http://localhost:8081/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`;
    }
    // json() return a Promise, use await to convert it to real data.
    const products = await response.json();

    return `
      <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
                <div class="product">
                  <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.description}" />
                  </a>
                  <div class="product-name">
                    <a href="/#/product/${product._id}">${product.name}</a>
                  </div>
                  <div class="product-brand">${product.brand}</div>
                  <div class="product-price">${product.price}</div>
                </div>
              </li>
            `
          )
          .join('\n')} </ul>
    `;
  },
};

export default HomeScreen;
