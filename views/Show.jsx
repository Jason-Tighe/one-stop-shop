const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Show extends React.Component{
  render(){
    const product = this.props.product
    return (
      <DefaultLayout styles={[{key:1, href:'/css/showpage.css'}, {key:0, href:'/css/app.css'}]}>
        <h1>Trick's  Sporting Goods</h1>
        <div className = "container">
          <div className = "productName">{product.name} </div>
          <div className = "numbBoi">
            <div className = "productPrice"> Price: {product.price} Gold </div>
            <div className = "qty"> Available:{product.qty} </div>
            <form action={`/product/${product._id}/buy`}>
              <input className="button"  type="submit" value="BUY"/>
            </form>
            <img className = "pic" src={product.img}/>
          </div>
          <div className = "scrip">Description: {product.description}</div>
        <nav className = "Nav">
          <a  className = "home" href="/product/">Home</a><br/>
          <a className = "contact" href = "/product/contact">Contact Info</a>
        </nav>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
