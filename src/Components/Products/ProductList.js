import React, { Component } from 'react';
import { Badge, Button, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import * as productActions from "../../Redux/Actions/productActions";
import { bindActionCreators } from 'redux'; 
import * as cartAction from "../../Redux/Actions/cartActions"
import alertify from "alertifyjs"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts();
  }
  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1, product});
    alertify.success(`${product.productName} added to cart successfully.`)
  }
  render() {
    return (
      <Row>
      <div>ProductList <Badge color='info'>{this.props.currentCategory.categoryName?this.props.currentCategory.categoryName:"ALL"}</Badge></div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product=>(
              <tr key={product.id}>
              <td>{product.id}</td>
              <td><Link to={"saveproduct/"+product.id}>{product.productName}</Link></td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td onClick={()=>this.addToCart(product)}><Button color='primary'>&nbsp;+&nbsp;</Button></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products:state.productListReducer,
    /* cart:state.cartReducer */

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
    {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartAction.addToCart, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)