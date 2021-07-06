const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
  render(){
    const {product} = this.props;
    return(
        <DefaultLayout className= "banner" title={'Trick\'s Sporting Goods'} styles={[{key:1, href:'/css/indexpage.css'}, {key:0, href:'/css/app.css'}]}>
          <nav className = "new">
            <a href="/product/new">New Merch</a>
          </nav>
          <h2 className = "container">
          <ul>
              {product.map((product)=> {
                return (
                  <li key={product._id}>
                    <img src={product.img}/><br/>
                    {' '} <a href ={`/product/${product._id}`}> {product.name} </a> {' '}{product.price} Gold! Qty:{product.qty}<br></br>
                    <form method="POST" action={`/product/${product._id}?_method=DELETE`}>
                    <input className="button" type="submit" value="DELETE"/>
                    </form>
                    <a href={`/product/${product._id}/edit`}>Edit This product</a>
                  </li>
                )
              })}
          </ul>
          </h2>
        </DefaultLayout>
    );
  }
}

module.exports = Index
