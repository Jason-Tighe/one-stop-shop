const React = require('react')
const DefaultLayout = require('./layouts/Default.jsx')


class Edit extends React.Component{
  render(){
    return(
      <DefaultLayout className ="bannerBoi" title="Edit Page" styles={[{key:1, href:'/css/editpage.css'}, {key:0, href:'/css/app.css'}]}>
      <form className = "container" method="POST" action={`/product/${this.props.product._id}?_method=PUT`}>
      Name: <input className ="name" type="text" name="name" defaultValue={this.props.product.name} /><br/>
      Description:<textarea className ="scrip" type="text" name="description" defaultValue={this.props.product.description}/><br/>
      Image: <input  className ="pic" type="text" name="img" defaultValue={this.props.product.img}/><br/>
      Price:<input className ="price"  type ="text" name="price" defaultValue={this.props.product.price}/><br/>
      Quantity:<input className ="qty"  type="number" name="qty" defaultValue={this.props.product.qty} /><br/>
      <input  className ="btn" type="submit" name="" value="Submit Changes"/>
      <nav className = "Nav">
        <a  className = "home" href="/product/">Home</a><br/>
      </nav>
      </form>
      </DefaultLayout>
    )
  }
}

module.exports =Edit;
