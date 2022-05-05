import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiCall from'../../common/api/axiosInstance';
import { apiKey } from '../../common/api/moviesApi';

export let fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    let moviesKeyword = 'batman';
    let response = await apiCall.get(`/?apikey=${ apiKey }&s=${ moviesKeyword }&type=movie`);
    return response.data;
});

export let fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    let showsKeyword = 'game';
    let response = await apiCall.get(`/?apikey=${ apiKey }&s=${ showsKeyword }&type=series`);
    return response.data;
});

let initialState = {
    movies: {},
    shows: {}
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
            console.log('Movies fetch: pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Movies fetch: success');
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Movies fetch: rejected');
        },
        [fetchAsyncShows.pending]: () => {
            console.log('Shows fetch: pending');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Shows fetch: success');
            return {...state, shows: payload};
        },
        [fetchAsyncShows.rejected]: () => {
            console.log('Shows fetch: rejected');
        }
    }
});

export let { addMovies } = movieSlice.actions;
export let getAllMovies = (state) => state.movies.movies;
export let getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;