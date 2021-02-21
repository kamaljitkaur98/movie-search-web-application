import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchMovie, setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';


import './css/headingStyle.css';
import './css/Button.css';

export class movie extends Component {

    componentDidMount() {
        this.props.FetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }

    render() {

        const { loading, movie } = this.props;

        let movieInfo = (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4 heading-style">{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong className="side-title">Genre : </strong> <span className="info">{movie.Genre}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">Released : </strong> <span className="info">{movie.Released}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">Rated : </strong> <span className="info">{movie.Rated}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">IMDB Rating : </strong> <span className="info">{movie.imdbRating}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">Director : </strong> <span className="info">{movie.Director}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">Writer : </strong> <span className="info">{movie.Writer}</span>
                            </li>
                            <li className="list-group-item">
                                <strong className="side-title">Actors : </strong> <span className="info">{movie.Actors}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body my-5 text-light">
                        <div className="col-md-12">
                            <h3 className="heading-style">About</h3>
                            <p className="side-title"> {movie.Plot}</p>
                            <hr />
                            <a
                                href={'https://www.imdb.com/title/' + movie.imdbID}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="myButton mr-3"
                                style={{ textDecoration: "None", color: "inherit" }}
                            >
                                View on IMDB
          </a>
                            <Link to="/" className="myButton text-light" style={{ textDecoration: "None" }}>
                                Go Back To Search
          </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

        let content = loading ? <Spinner /> : movieInfo;
        return (
            <div>
                {content}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { FetchMovie, setLoading })(movie);
