const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Show extends React.Component{
  render(){
    const product = this.props.product
    return (
      <DefaultLayout styles={[{key:0, href:'/css/showpage.css'}]}>
        <h1>Show Page</h1>
        <div className = "container">
          <div> Name: {product.name} </div>
          <div> Price: {product.price} Gold </div>
          <div> Quantity:{product.qty} </div>
          <div>Description: {product.description}</div>
        <img src={product.img}/>
        <nav>
          <a href="/product/">Home</a>
        </nav>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
