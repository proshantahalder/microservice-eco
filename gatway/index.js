const express = require('express');

const inventoryRoutes = require('../inventory-service');
const ordersRoutes = require('../order-service');

const app = express();

const port = 3000;

app.use(express.json());

app.use('/inventory', inventoryRoutes);
app.use('/orders',ordersRoutes);

app.listen(port, () =>{
    console.log(`API getway listing at http://localhost:${port}`);
})

