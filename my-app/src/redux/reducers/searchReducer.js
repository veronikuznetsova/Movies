const initial = {
    query: ''
}

function searchReducer(state = initial, action) {
    switch(action.type) {
        case 'SEARCH_MOVIE':
            return {
                query: state.query.concat(action.payload)
            }
        default:
            return state;
    }
}

export default searchReducer;