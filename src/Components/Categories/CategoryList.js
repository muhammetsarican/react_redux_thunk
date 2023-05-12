import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Row } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../Redux/Actions/categoryActions"
import categoryListReducer from '../../Redux/Reducers/categoryListReducer'

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }
  selectCategory = category => {
    this.props.actions.changeCategory(category)
  }

  render() {
    return (
      <Row>
        <div><h4>CategoryList: {this.props.categories.length}</h4></div>
        <ListGroup>
          {this.props.categories.map((category) =>
            <ListGroupItem color='danger' active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
          )}
        </ListGroup>
      </Row>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
    {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)