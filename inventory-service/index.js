const express = require('express');
const router = express.Router();

let inventory = [
 {id:1, name:'Item 1', quantity:"10"},
 {id:2, name:'Item 2', quantity:"10"},
];

router.get('/', (req, res)=> {
    res.json(inventory);
});

router.post('/', (req, res) =>{
    const newItem = {
        id: inventory.length +1,
        name: req.body.name,
        quantity:req.body.quantity
    };

    inventory.push(newItem);
    res.status(201).json(newItem);
});

module.exports = router;