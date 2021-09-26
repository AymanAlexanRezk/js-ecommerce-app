const data = require('./data.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8081;

app.get('/api/products', (req, res) => {
  // Send data to the client
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/api/products`);
});
