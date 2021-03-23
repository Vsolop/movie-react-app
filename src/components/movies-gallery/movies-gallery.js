import React from "react";

import MoviesGalleryItem from "../movies-gallery-item/movies-gallery-item";

import "../app/app.css";
import "./movies-gallery.css";

function MoviesGallery({ movies, onToggleLiked }) {
    const elements = movies.map((item) => {
        const { id } = item;
        const { like } = item;
        const { name } = item;
        return (
            <div key={id} className="movies-gallery__item">
                <MoviesGalleryItem
                    movieName={name}
                    movieId={id}
                    movieLike={like}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </div>
        );
    });

    return (
        <div className="movies-gallery">
            <div className="movies-gallery__title"> Movies Gallery </div>
            <div className="movies-gallery__items">
                <div className="row">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default MoviesGallery;
