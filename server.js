const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/foodDelivery', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
