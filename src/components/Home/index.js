import React, { useEffect } from 'react';
import './styles.scss';
import MovieListing from '../MovieListing';
import apiCall from'../../common/api/axiosInstance';
import { apiKey } from '../../common/api/moviesApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

let Home = () => {

    let dispatch = useDispatch();
    let keyword = 'Harry';

    useEffect(() => {
        let fetchMovies = async () => {
            let response = await apiCall
                .get(`/?apikey=${ apiKey }&s=${ keyword }&type=movie`)
                .catch(err => console.log(err));
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    }, [keyword, dispatch])

    return (
        <main>
            <MovieListing />
        </main>
    )
};

export default Home;