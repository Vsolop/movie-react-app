import React from "react";
import FavoritListItem from '../favorit-list-item/favorit-list-item';

import "../app/app.css";

function FavoriteList ({movies, addMovie}) {

    return (
        <div className="favorite-list">
            <div className="favorite-list__logo">
                <img src="./images/star-solid.svg" alt="logo" />
            </div>
            <div className="movies-gallery__title fav-list ">
                Favorite List
            </div>
            <div className="fav-list-wrapper">
                <FavoritListItem 
                    movieName={movies[0].name}
                    movieId={movies[0].id}
                    like={movies[0].like} 
                    addMovie={addMovie}
                />
            </div>
        </div>
    );
}

export default FavoriteList;