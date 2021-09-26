import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
import NotFoundScreen from './screens/NotFoundScreen.js';

//* URLs and their screens:
const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  //* Compare with the routes object:
  const screen = routes[parseUrl] ? routes[parseUrl] : NotFoundScreen;

  const main = document.getElementById('main-container');
  // The render() method inside HomeScreen is async, so we use await here.
  main.innerHTML = await screen.render(); // Instead of HomeScreen.render()
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
