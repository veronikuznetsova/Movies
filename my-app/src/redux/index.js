import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import favouriteReducer from "./reducers/favouriteReducer";

const redusers = combineReducers({
    favourite: favouriteReducer,
});

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (err) {
        console.log('error occured ', err)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);

    } catch (err) {
        console.log('error occured ', err)
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(redusers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;