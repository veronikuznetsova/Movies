import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import favouriteReducer from "./reducers/favouriteReducer";

const redusers = combineReducers({
    favourite: favouriteReducer,
});

const store = createStore(redusers, composeWithDevTools(applyMiddleware(thunk)));

export default store;