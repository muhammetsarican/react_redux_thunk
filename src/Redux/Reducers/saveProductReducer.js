import * as actions from "../Actions/actionTypes";
import initialState from "./initialState"

export default function saveProductReducer(state= initialState.savedProduct, action){
    switch (action.type){
        case actions.CREATEPRODUCTSSUCCESS:
            return action.payload; 
        case actions.UPDATEPRODUCTSSUCCESS:
            return action.payload; 
        default:
            return state;
    }
}