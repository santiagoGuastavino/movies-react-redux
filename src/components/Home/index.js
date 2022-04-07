import React, { useEffect } from 'react';
import './styles.css';
import MovieListing from '../MovieListing';
import { apiKey } from '../../utils/movieApiKey';

let Home = () => {

    useEffect(() => {
        let movieText = 'Harry';
        let fechtApi = async () => {
            let response = await fetch(`?apiKey=${ apiKey }&s=${ movieText }&type=movie`)
            .catch(err => { console.log('Err:' + err) });
        }
    })

    return (
        <main className='main-main'>
            <MovieListing />
        </main>
    )
};

export default Home;