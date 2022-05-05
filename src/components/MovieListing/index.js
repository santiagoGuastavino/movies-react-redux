import React from 'react';
import './styles.scss'
import { useSelector } from 'react-redux';
import {
    getAllMovies,
    getAllShows
} from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard';

let MovieListing = () => {

    let movies = useSelector(getAllMovies)
    let shows = useSelector(getAllShows)

    let renderMovies, renderShows = ''

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

    renderShows = shows.Response === 'True' ? (
        shows.Search.map((show, i) => {
            return <MovieCard
                key={ i }
                data={ show }
            />
        })
    ) : (
        <div className='movies-error'>
            <h3>
                { shows.Error }
            </h3>
        </div>
    );

    return (
        <>
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
            <article className='movies-wrapper'>
                <header className='movies-header'>
                    <h2>
                        Shows
                    </h2>
                </header>
                <div className='movies-container'>
                    { renderShows }
                </div>
            </article>
        </>
    )
};

export default MovieListing;