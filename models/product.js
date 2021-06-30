const {Schema, model} = require('mongoose')

const productSchema = new Schema({
  name:{type:String, required: true, unique: false},
  description:{type:String, required: true, unique: false},
  img:{type:String, required: true, unique: false},
  price:{type:String, required: true, unique: false},
  qty:{type:Number, required: true, unique: false},
})

const Product = model('Product', productSchema)

module.exports = Product;
