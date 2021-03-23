import React from "react";

import "./movies-gallery-item.css";

function MoviesGalleryItem ({ movieName, movieLike, onToggleLiked }) {

    let classNames = "btn-star btn-sm";

    if (movieLike) {
        classNames += " like";
    }

    return (
        <>
            <div className="star-btn">
                <button onClick={onToggleLiked} className={classNames}>
                    <i className="fa fa-star"> </i>
                </button>
            </div>
            <div className="img"> </div>
            <div className="film-name"> {movieName} </div>
            <div className="film-year"> year </div>
        </>
    );
}

export default MoviesGalleryItem;
