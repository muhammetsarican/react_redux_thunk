import * as actions from "../Actions/actionTypes";
import initialState from "./initialState"

export default function productListReducer(state= initialState.products, action){
    switch (action.type){
        case actions.GETPRODUCTSSUCCESS:
            return action.payload; 
        default:
            return state;
    }
}