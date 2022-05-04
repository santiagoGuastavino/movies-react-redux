import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';

export let store = configureStore({
    reducer: {
        movies: moviesReducer
    }
})