import data from '../data.js';

//* Export HomeScreen as an object with render() method
const HomeScreen = {
  // Return unordered list of products
  render: () => {
    const { products } = data;
    return `
      <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
                <div class="product">
                  <a href="/product/${product._id}">
                    <img src="${product.image}" alt="${product.description}" />
                  </a>
                  <div class="product-name">
                    <a href="/products/${product._id}">${product.name}</a>
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