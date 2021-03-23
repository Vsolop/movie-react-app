import React, { Component } from "react";

import "./favorit-list-item.css";

export default class FavoriteList extends Component {
    
    constructor (props) {
        super (props);
        this.state = {
            classNone: "none"
        };
    }

    render () {
        let classNone = "none";

        const {movieName, movieLike, addMovie} = this.props;

        if (movieLike) {
            addMovie();
        }

        return (
            <div className={classNone}>
                <ul className="fav-list-items d-flex">
                    <li className="fav-list-item"> {movieName} </li>
                    <button className="btn-trash btn-sm fav-list-items__trash">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </ul>
            </div>
        );
    }
}
