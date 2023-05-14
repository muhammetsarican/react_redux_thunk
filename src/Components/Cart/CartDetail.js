import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as cartActions from '../../Redux/Actions/cartActions'
import { bindActionCreators } from 'redux';
import { Table, Badge } from 'reactstrap';
import alertify from 'alertifyjs';

class CartDetail extends Component {
    removeFromCart=(product)=>{
        this.props.actions.removeFromCart(product);
        alertify.error(`${product.productName} was deleted successfully.`);
    }
    render() {
        return (
            <Table>
                <thead>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {this.props.cart.map((product) => (
                        <tr>
                            <td>{product.product.id}</td>
                            <td>{product.product.productName}</td>
                            <td>{product.product.unitPrice}</td>
                            <td>{product.quantity}</td>
                            <td><Badge color="danger" onClick={() => this.removeFromCart(product.product)}>X
                            </Badge></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)