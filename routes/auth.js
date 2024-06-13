const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res)
=> {
  const { username, password } = req.body;
  const hashedPassword = await
bcrypt.hash(password, 10);
  const newUser = new Userr({ username,
	  password: hashedPassword });
  await newUser.save();
  res.status(201).send('User registered');
});

// Login
router.post('/login', async (req, res_ =>
{
  const { username, password } = req.body;
  const user = await
User.findOne({ username });
  if (!user || !(await
bcrypt.compare(password, user.password)))
{
   return res.status(400).send('Invalid credentials');
}
const token = jwt.sign({ id: user._id },
'secret', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
