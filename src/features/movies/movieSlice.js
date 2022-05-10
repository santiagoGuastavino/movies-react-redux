import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiCall from'../../common/api/axiosInstance'
import { apiKey } from '../../common/api/moviesApi'

export let fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (keyword) => {
    let response = await apiCall.get(`/?apikey=${ apiKey }&s=${ keyword }&type=movie`)
    return response.data
})

export let fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (keyword) => {
    let response = await apiCall.get(`/?apikey=${ apiKey }&s=${ keyword }&type=series`)
    return response.data
})

export let fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
    let response = await apiCall.get(`/?apikey=${ apiKey }&i=${ id }&Plot=full`)
    return response.data
})

let initialState = {
    movies: {},
    shows: {},
    detail: {}
}

let movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeDetail: (state) => {
            state.detail = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {},
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {},
        [fetchAsyncShows.pending]: () => {},
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return {...state, shows: payload}
        },
        [fetchAsyncShows.rejected]: () => {},
        [fetchAsyncDetail.pending]: () => {},
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            return {...state, detail: payload}
        },
        [fetchAsyncDetail.rejected]: () => {}
    }
})

export let { removeDetail } = movieSlice.actions
export let getAllMovies = (state) => state.movies.movies
export let getAllShows = (state) => state.movies.shows
export let getDetail = (state) => state.movies.detail
export default movieSlice.reducer