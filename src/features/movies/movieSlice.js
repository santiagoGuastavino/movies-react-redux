import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiCall from'../../common/api/axiosInstance';
import { apiKey } from '../../common/api/moviesApi';

export let fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    let keyword = 'Harry';
    let response = await apiCall.get(`/?apikey=${ apiKey }&s=${ keyword }&type=movie`);
    return response.data;
});

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
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Success');
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        }
    }
});

export let { addMovies } = movieSlice.actions;
export let getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;