export function addMovie(id) {
    return {
        type: 'ADD_MOVIE',
        payload: id
    }
}

export function removeMovie(id) {
    return {
        type: 'REMOVE_MOVIE',
        payload: id
    }
}