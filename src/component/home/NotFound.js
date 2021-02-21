import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Button.css';
import { setSearched } from '../../actions/searchActions';
import { connect } from 'react-redux';

export class NotFound extends Component {

    onClick = e => {
        this.props.setSearched();
    }

    render() {
        const { searched } = this.props;
        return (
            <div>
                <div class="col">
                    <div className="card card-body mb-4 text-light">
                        <h3 className="heading-style">NO RESULTS FOUND</h3>
                        <Link to="/" className="myButton text-light" style={{ textDecoration: "None" }} onClick={this.onClick}>
                            Go Back To Search
                            </Link>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    searched: state.movies.searched
})

export default connect(mapStateToProps, { setSearched })(NotFound)


