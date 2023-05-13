import * as actionTypes from "../Actions/actionTypes";
import initialState from "./initialState"

export default function addToCart(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADDTOCART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map((item) => {
                    if (item.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 });
                    }
                    return item;
                })
                return newState;
            } else {
                return [...state, { ...action.payload }]
            }
        case actionTypes.REMOVEFROMCART:
            return state.filter(cartItem=>cartItem.product.id!==action.payload.id)
        default:
            return state
    }
}