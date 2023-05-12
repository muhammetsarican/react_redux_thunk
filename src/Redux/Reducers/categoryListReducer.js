import * as actions from "../Actions/actionTypes";
import initialState from "./initialState"

export default function categoryListReducer(state= initialState.categories, action){
    switch (action.type){
        case actions.GETCATEGORIESSUCCESS:
            return action.payload; 
        default:
            return state;
    }
}