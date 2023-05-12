import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import { connect } from 'react-redux'

class ProductList extends Component {
  render() {
    return (
      <div>ProductList <Badge color='info'>{this.props.currentCategory.categoryName}</Badge></div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  }
}
export default connect(mapStateToProps)(ProductList)