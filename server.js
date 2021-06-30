require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const db = require('./models/db.js')
const app = express();
const PORT = process.env.PORT || 3000;

//Setup Data
db.once('connected', ()=>{
  console.log('connect to mongo')
})

//View engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

// middleware and controllers
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/product', require('./controllers/routeController'));

app.listen(PORT, () => {
  console.log('Open for Business', PORT)
})


///products/:id/buy
