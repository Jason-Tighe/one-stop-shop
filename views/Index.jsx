const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
  render(){
    const {product} = this.props;
    return(
        <DefaultLayout title={'Product Index Page'} styles={[{key:0, href:'/css/app.css'}]}>
          <nav>
            <a href="/product/new">New Product?</a>
          </nav>
          <h1>
          <ul>
              {product.map((product)=> {
                return (
                  <li key={product._id}>
                    <img src={product.img}/><br/>
                    The {' '} <a href ={`/product/${product._id}`}> {product.name} </a> {' '} :{product.price} Gold! Qty:{product.qty}<br></br>
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
