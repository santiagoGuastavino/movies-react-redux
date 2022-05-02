import React, { useEffect } from 'react';
import './styles.scss';
import MovieListing from '../MovieListing';
import apiCall from'../../common/api/axiosInstance';
import { apiKey } from '../../common/api/moviesApi';
import banner from '../../images/banner.png';

let Home = () => {

    useEffect(() => {
        let keyword = 'Harry';
        let fetchMovies = async () => {
            let response = await apiCall
                .get(`/?apikey=${ apiKey }&s=${ keyword }&type=movie`)
                .catch(err => console.log(err));
            console.log(response);
        };

        fetchMovies();
    }, [])

    return (
        <main className='main-main'>
            <div>
                <img src={ banner }  alt='banner-img' />
            </div>
            <MovieListing />
        </main>
    )
};

export default Home;