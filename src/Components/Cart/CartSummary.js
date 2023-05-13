import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as cartActions from '../../Redux/Actions/cartActions'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import alertify from 'alertifyjs';

import {
    Col,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Badge,
    Button
} from 'reactstrap';

class CartSummary extends Component {
    removeFromCart=(product)=>{
        this.props.actions.removeFromCart(product);
        alertify.error(`${product.productName} was deleted successfully.`)
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart <Badge color='info'>{this.props.cart.length}</Badge>
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(product => (
                        <DropdownItem key={product.product.id}>
                            <Row>
                                <Col xs="4">
                                    <Badge color='danger' onClick={()=>this.removeFromCart(product.product)}>x</Badge>
                                </Col>
                                <Col xs="6">
                                    {product.product.productName}
                                </Col>
                                <Col xs="2">
                                    <Badge>{product.quantity}</Badge>
                                </Col>
                            </Row>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Show Cart</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmpty() {
        return (
            <NavLink>
                Empty Cart
            </NavLink>
        )
    }
    render() {
        return (
            this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)