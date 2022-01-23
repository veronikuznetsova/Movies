const initialState = {
    items: []
}

function favouriteReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                items: state.items.concat(action.payload)
            }
        case 'REMOVE_MOVIE':
            return {
                items: state.items.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}

export default favouriteReducer;