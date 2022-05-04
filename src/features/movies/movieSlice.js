import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    movies: {}
};

let movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    }
});

export let { addMovies } = movieSlice.actions;
export let getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;