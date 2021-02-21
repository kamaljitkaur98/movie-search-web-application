import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import NotFound from './NotFound';

export class MoviesContainer extends Component {
    render() {

        const { movies, searched } = this.props;
        let content = " ";
        let result = " ";
        result = searched == true ? <NotFound /> : null;
        content = movies.Response == 'True' ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) : result;
        return (
            <div className="row justify-content-center">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    searched: state.movies.searched
})
export default connect(mapStateToProps)(MoviesContainer)
