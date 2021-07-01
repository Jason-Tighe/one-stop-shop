const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
  render(){
    const {product} = this.props;
    return(
        <DefaultLayout title={'Trick\'s Sporting Goods'} styles={[{key:0, href:'/css/indexpage.css'}]}>
          <nav>
            <a href="/product/new">New Merch</a>
          </nav>
          <h1 className = "container">
          <ul>
              {product.map((product)=> {
                return (
                  <li key={product._id}>
                    <img src={product.img}/><br/>
                    {' '} <a href ={`/product/${product._id}`}> {product.name} </a> {' '}{product.price} Gold! Qty:{product.qty}<br></br>
                    <form method="POST" action={`/product/${product._id}?_method=DELETE`}>
                    <input type="submit" value="DELETE"/>
                    </form>
                    <a href={`/product/${product._id}/edit`}>Edit This product</a>
                  </li>
                )
              })}
          </ul>
          </h1>
        </DefaultLayout>
    );
  }
}

module.exports = Index
