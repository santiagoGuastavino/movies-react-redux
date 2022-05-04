import React from 'react';
import './styles.scss'
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard';

let MovieListing = () => {

    let movies = useSelector(getAllMovies)

    let renderMovies = ''

    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, i) => {
            return <MovieCard
                key={ i }
                data={ movie }
            />
        })
    ) : (
        <div className='movies-error'>
            <h3>
                { movies.Error }
            </h3>
        </div>
    );

    return (
        <article className='movies-wrapper'>
            <header className='movies-header'>
                <h2>
                    Movies
                </h2>
            </header>
            <div className='movies-container'>
                { renderMovies }
            </div>
        </article>
    )
};

export default MovieListing;