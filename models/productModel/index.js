const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
