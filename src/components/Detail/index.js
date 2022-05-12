import React, { useEffect } from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncDetail,
  getDetail,
  removeDetail
} from '../../features/movies/movieSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'

export default function Detail () {
  const imdbID = useLocation().pathname.slice(8)
  const dispatch = useDispatch()
  const data = useSelector(getDetail)

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID))
    return () => {
      dispatch(removeDetail())
    }
  }, [dispatch, imdbID])

  return (
        <article className='detail-wrapper'>
            {
                Object.keys(data).length === 0
                  ? (
                    <div>...Loading</div>
                    )
                  : (
                    <>
                    <section className='detail-section-left'>
                        <div className='detail-title'>
                            <h2>
                                {data.Title}
                            </h2>
                        </div>
                        <div className='detail-rating'>
                            <div>
                                <p>IMDB Rating</p>
                                <FontAwesomeIcon icon={faStar} />
                                <p>
                                    {data.imdbRating}
                                </p>
                            </div>
                            <div>
                                <p>IMDB Votes</p>
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <p>
                                    {data.imdbVotes}
                                </p>
                            </div>
                            <div>
                                <p>Runtime</p>
                                <FontAwesomeIcon icon={faFilm} />
                                <p>
                                    {data.Runtime}
                                </p>
                            </div>
                            <div>
                                <p>Year</p>
                                <FontAwesomeIcon icon={faCalendar} />
                                <p>
                                    {data.Year}
                                </p>
                            </div>
                        </div>
                        <div className='detail-plot'>
                            <p>
                                {data.Plot}
                            </p>
                        </div>
                        <div className='detail-info'>
                            <div>
                                <p>
                                    Director
                                </p>
                                <p>
                                    {data.Director}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Actors
                                </p>
                                <p>
                                    {data.Actors}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Genres
                                </p>
                                <p>
                                    {data.Genre}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Language
                                </p>
                                <p>
                                    {data.Language}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Awards
                                </p>
                                <p>
                                    {data.Awards}
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='detail-section-right'>
                        <img src={data.Poster} alt={data.Title} />
                    </section>
                    </>
                    )}
        </article>
  )
}
