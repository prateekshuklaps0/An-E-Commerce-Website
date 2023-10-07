import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import { reducer as ProductsReducer } from "./Products/reducer";

// Store *********************
const rootReducer = combineReducers({ ProductsReducer });
export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
