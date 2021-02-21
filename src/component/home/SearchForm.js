import React, { Component } from 'react';
import { searchMovie, fetchMovie, setLoading } from '../../actions/searchActions';
import { connect } from 'react-redux';
import './css/Button.css';
import './css/searchBar.css';


export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovie(this.props.text);
        console.log('onsubmit is reached')
        this.props.setLoading();
    }

    render() {
        return (
            <div className="container mx-auto" >
                <form onSubmit={this.onSubmit}>
                    <div className="input-group" style={{ marginTop: "70px", marginBottom: "50px" }}>
                        <input type="search" className="search" placeholder="SEARCH" aria-label="Search"
                            aria-describedby="search-addon"
                            onChange={this.onChange} />
                        <button type="submit" className="myButton"><i className="fa fa-search"></i></button>
                    </div>
                </form >
            </div >


        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovie, setLoading })(SearchForm)