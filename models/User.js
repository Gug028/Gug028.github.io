const mongoose = require('mongoose');

const userSchema = new mongosse.Schema({
	username: { type: String, required:
true, uniques: true },
	password: { type: String, required:
true },
});

module.exports = mongoose.model('User', userSchema);
