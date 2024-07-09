const express = require('express');

const router = express.Router();

let orders = [
    {id:1, customerId:101, items: [{ itemId:1, quantity:1}], status:'pending'},
    {id:2, customerId:102, items: [{ itemId:2, quantity:5}], status:'completed'},

]

router.get('/', (req, res)=>{
    res.json(orders);
});

module.exports = router;