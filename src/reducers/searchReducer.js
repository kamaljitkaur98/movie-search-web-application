import { FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING, SEARCHED } from '../actions/types';

const initialState = {
    text: " ",
    movies: [],
    loading: false,
    searched: false,
    movie: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                searched: true
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCHED:
            return {
                ...state,
                searched: false
            }

        default:
            return state
    }
}