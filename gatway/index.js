
const express = require('express');
const cors = require('cors');
const inventoryRoutes = require('../inventory-service');
const ordersRoutes = require('../order-service');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/inventory', inventoryRoutes);
app.use('/orders', ordersRoutes);

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
