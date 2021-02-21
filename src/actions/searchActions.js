import { FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING, SEARCHED } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovie = text => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}

export const setSearched = () => {
    return {
        type: SEARCHED
    }
}

export const FetchMovie = id => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
}