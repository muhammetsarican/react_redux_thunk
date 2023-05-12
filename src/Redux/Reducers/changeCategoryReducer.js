import * as actions from "../Actions/actionTypes";
import initialState from "./initialState"

export default function changeCategoryReducer(state= initialState.categories, action){
    switch (action.type){
        case actions.CHANGECATEGORY:
            return action.payload; 
        default:
            return state;
    }
}