const Product = require('../models/product.js')


const dataController = {
  index(req, res, next){
      Product.find({}, (err, productItems) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.product = productItems
          next()
        }
      })
  },
  show(req, res, next){
    Product.findById(req.params.id, (err, item)=>{
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.product = item;
          console.log("nooo")
          next();

        }
    })
  },
  create(req, res, next){
    Product.create(req.body, (err, restock) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = restock;
        next();
      }
    })
  },
  destroy(req, res, next){
     Product.findByIdAndDelete(req.params.id, (err, emptyStock) => {
       if(err){
         res.status(404).send({
           msg: err.message
         })
       } else {
         res.locals.data.product = emptyStock;
         next();
       }
     })
   },
 update(req, res, next){
   Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct)=>{
     if(err){
       res.status(404).send({
         msg: err.message
       })
     } else {
       res.locals.data.product = updatedProduct;
       next();
     }
   })
 },
 buy(req, res, next){
   Product.findByIdAndUpdate(req.params.id, {$inc: { "qty": -1} }, {new: true}, (err, updatedQty)=>{
     if(err){
       res.status(404).send({
         msg: err.message
       })
     } else {
       res.locals.data.product = updatedQty;
       next();
       console.log("wooo")
     }
   })
 }

}

module.exports = dataController
