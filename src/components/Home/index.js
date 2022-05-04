import React, { useEffect } from 'react';
import './styles.scss';
import MovieListing from '../MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

let Home = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
    }, [dispatch])

    return (
        <main>
            <MovieListing />
        </main>
    )
};

export default Home;