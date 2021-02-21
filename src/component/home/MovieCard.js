import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/headingStyle.css';

export class MovieCard extends Component {
    render() {

        const { movie } = this.props
        return (

            <div className="card" style={{ width: "18rem", margin: "30px 40px 30px 40px" }}>
                <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title} - {movie.Year}</h5>
                    <Link to={`/movie/${movie.imdbID}`} className="myButton" style={{ textDecoration: "none", color: "white" }}>DETAILS</Link>
                </div>
            </div>

        )
    }
}

export default MovieCard
