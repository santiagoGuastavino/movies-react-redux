import React, { useState, useEffect } from 'react'
import './styles.scss'
import Listing from '../Listing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export default function Home () {
  const dispatch = useDispatch()

  const [list, setList] = useState('movies')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (keyword !== '') {
      dispatch(fetchAsyncMovies(keyword))
      dispatch(fetchAsyncShows(keyword))
    }
  }, [dispatch, keyword])

  return (
    <main className='main-home'>
      <header className='movies-header'>
          <h4>You are browsing:</h4>
          <h4
            onClick={() => { setList('movies') }}
            style={list === 'movies' ? { order: '0' } : { order: '1' }}
            className={list === 'shows' ? 'clickable' : null}
          >
            Movies
            {
              list === 'movies' &&
              <input
                onInput={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
            }
          </h4>
          <h4
            onClick={() => { setList('shows') }}
            style={list === 'shows' ? { order: '0' } : { order: '1' }}
            className={list === 'movies' ? 'clickable' : null}
          >
            Shows
            {
              list === 'shows' &&
            <input
                onInput={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
            }
          </h4>
      </header>
      {
        keyword === ''
          ? <div>Enter a search term</div>
          : <Listing
              list={list}
            />
      }
    </main>
  )
}
