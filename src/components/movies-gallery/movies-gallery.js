import React from "react";

import MoviesGalleryItem from "../movies-gallery-item/movies-gallery-item";

import "../app/app.css";
import "./movies-gallery.css";

function MoviesGallery ({movies, onAddMovie}) {
    
    return (
        <div className="movies-gallery">
            <div className="movies-gallery__title"> Movies Gallery </div>
            <div className="movies-gallery__items">
                <div className="row">
                    <MoviesGalleryItem
                        movieName={movies[0].name}
                        movieId={movies[0].id}
                        movieLike={movies[0].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[1].name}
                        movieId={movies[1].id}
                        movieLike={movies[1].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[2].name}
                        movieId={movies[2].id}
                        movieLike={movies[2].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[3].name}
                        movieId={movies[3].id}
                        movieLike={movies[3].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[4].name}
                        movieId={movies[4].id}
                        movieLike={movies[4].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[5].name}
                        movieId={movies[5].id}
                        movieLike={movies[5].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[6].name}
                        movieId={movies[6].id}
                        movieLike={movies[6].like}
                    />
                    <MoviesGalleryItem
                        movieName={movies[7].name}
                        movieId={movies[7].id}
                        movieLike={movies[7].like}
                    />
                </div>
            </div>
        </div>
    );
}

export default MoviesGallery;
