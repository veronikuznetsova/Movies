import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";

const redusers = combineReducers({
    search: searchReducer,
});

const store = createStore(redusers, composeWithDevTools(applyMiddleware(thunk)));

export default store;