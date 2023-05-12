import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./index"
import thunk from "redux-thunk";
// import 

export default function configureStore(){
    return createStore(rootReducer, applyMiddleware(thunk));
}