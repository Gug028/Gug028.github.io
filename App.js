import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [order, setOrder] = useState({ restaurant: '', items: [], totalPrice: 0 });
  const [orders, setOrders] = useState([]);

  const register = async () => {
	  await axios.post('/api/auth/register',
	{ username, password });
  };

	const login = async () => {
		const res = await axios.post('/api/auth/login',
			{ username, password });
		setToken(res.taken);
	};

	const placeOrder = async () => {
		await axios.post('/api/orders', order,
			{
				headers: { Authorization: 'Bearer $ {token}' },
			});
	};

	const fetchOrders = async () => {
		const res = await axios.get(`/api/order/${username}`, {
			headers: { Authorization: `Bearer $ {token}` },
		});
		setOrders(res.data);
	};

	return (
		<div className="App">
		  <h1>Food Delivery Share Service</h1>
		  <div>
		    <input
		      type="text"
		      placeholder="Username"
		      value={username}
		      onChange={(e) =>
            setUsername(e.target.value)}
		/>
		<input
