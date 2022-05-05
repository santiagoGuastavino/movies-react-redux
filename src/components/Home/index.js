import React, { useState, useEffect } from 'react';
import './styles.scss';
import Listing from '../Listing';
import { useDispatch } from 'react-redux';
import {
    fetchAsyncMovies,
    fetchAsyncShows
} from '../../features/movies/movieSlice';

let Home = () => {

    let dispatch = useDispatch()

    let [list, setList] = useState('movies')

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch])

    return (
        <main className='main-home'>
            <header className='movies-header'>
                <h4>You are browsing:</h4>
                <h4
                    onClick={() => { setList('movies')} }
                    style={ list === 'movies' ? { order: '0' } : {order: '1'} }
                    className={ list === 'shows' ? 'clickable' : null }
                >
                    Movies
                </h4>
                <h4
                    onClick={() => { setList('shows')} }
                    style={ list === 'shows' ? { order: '0' } : {order: '1'} }
                    className={ list === 'movies' ? 'clickable' : null }
                >
                    Shows
                </h4>
            </header>
            <Listing
                list={ list }
            />
        </main>
    )
};

export default Home;