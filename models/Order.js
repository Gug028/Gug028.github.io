const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type:
mongoose.Schema.Types.ObjectId, ref:
'User', required: true },
  restaurant: { type: String, required:
true },
  items: [{ name: String, quantity:
Number }],
  totalPrice: { type: Number, required:
true },
  status: { type: String, default:
'pending' },
});

module.exports = mongoose.model('Order',
orderSchema);
