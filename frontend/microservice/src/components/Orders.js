import React, { useState, useEffect } from "react";
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('/orders');
            setOrders(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Orders Data</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.customerId} - status {order.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;
