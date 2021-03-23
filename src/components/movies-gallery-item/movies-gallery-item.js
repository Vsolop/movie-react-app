import React, { Component } from "react";
import './movies-gallery-item.css';

export default class MoviesGalleryItem extends Component {

    constructor (props) {
        super (props);
        this.state = {
            like: false
        };
        this.onMovieLike = this.onMovieLike.bind(this);
    }

    onMovieLike () {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {movieName, movieId} = this.props;
        const {like} = this.state;
        let classNames = "btn-star btn-sm";

        if (like) {
            classNames += " like";
        }

        return (
            <div id={movieId} className="movies-gallery__item">
                <div className="star-btn">
                    <button 
                        onClick={this.onMovieLike}
                        className={classNames}>
                        <i className="fa fa-star"> </i>
                    </button>
                </div>
                <div className="img"> </div>
                <div className="film-name"> {movieName} </div>
                <div className="film-year"> year </div>
            </div>
        );
    };
};

