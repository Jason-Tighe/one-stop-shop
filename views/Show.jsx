const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Show extends React.Component{
  render(){
    const product = this.props.product
    return (
      <DefaultLayout styles={[{key:0, href:'/css/showpage.css'}]}>
        <h1>Show Page</h1>
        <div className = "container">
          <div className = "productName">{product.name} </div>
          <div className = "numbBoi">
            <div className = "productPrice"> Price: {product.price} Gold </div>
            <div className = "qty"> Available:{product.qty} </div>
            <div className ="buy">BUY</div>
            <img className = "pic" src={product.img}/>
          </div>
          <div className = "scrip">Description: {product.description}</div>
        <nav className = "Nav">
          <a  className = "home" href="/product/">Home</a> <br/>
          <a className = "contact" href = "/product/contact">Contact Info</a>
        </nav>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
