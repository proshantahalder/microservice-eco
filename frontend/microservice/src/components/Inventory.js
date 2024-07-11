import React, { useState, useEffect } from "react";
import axios from 'axios';

function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [error, setError] = useState(null);

    const [newTem, setNewItem] = useState({name:'', quantity:0})

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const response = await axios.get('/inventory');
            setInventory(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const addItem = async (e) =>{
        e.preventDefault();
        await axios.post('/inventory', newTem);
        setNewItem({name: '', quantity:0});
        fetchInventory();
    };

    return (
        <div>
            <h2>Inventory</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>{item.name} - Quantity {item.quantity}</li>
                ))}
            </ul>

            <form onSubmit={addItem}>

                <input
                type="text"
                placeholder="Item Name here"
                value={newTem.name}
                onChange={(e) => setNewItem({ ...newTem, name:e.target.value})}
                />

                <input
                type="number"
                placeholder="Item Quantity"
                value={newTem.quantity}
                onChange={(e)=> setNewItem({...newTem, quantity: parseInt(e.target.value)})} />
                
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default Inventory;
