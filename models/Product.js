var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {


   name: {
    type: String,
    default: '',
    trim: true,
    required: 'name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'description required'

  },
  price: {
    type: Number,
    //default: '',
    trim: true,
    required: 'price required'
  },

  quantity: {
    type: Number,
    default: '',
    trim: true,
    
},

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
