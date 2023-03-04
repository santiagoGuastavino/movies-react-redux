import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiCall from '../../common/api/axiosInstance'
import { apiKey } from '../../common/api/moviesApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (keyword) => {
  const response = await apiCall.get(`/?apikey=${apiKey}&s=${keyword}&type=movie`)
  return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (keyword) => {
  const response = await apiCall.get(`/?apikey=${apiKey}&s=${keyword}&type=series`)
  return response.data
})

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
  const response = await apiCall.get(`/?apikey=${apiKey}&i=${id}&Plot=full`)
  return response.data
})

const initialState = {
  movies: {},
  shows: {},
  detail: {}
}

const movieSlice = createSlice({
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
      return { ...state, movies: payload }
    },
    [fetchAsyncMovies.rejected]: () => {},
    [fetchAsyncShows.pending]: () => {},
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload }
    },
    [fetchAsyncShows.rejected]: () => {},
    [fetchAsyncDetail.pending]: () => {},
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
      return { ...state, detail: payload }
    },
    [fetchAsyncDetail.rejected]: () => {}
  }
})

export const { removeDetail } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getDetail = (state) => state.movies.detail
export default movieSlice.reducer
