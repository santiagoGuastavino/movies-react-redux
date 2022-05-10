import React, {useState, useEffect} from 'react'
import './styles.scss'
import {useSelector} from 'react-redux'
import {getAllMovies, getAllShows} from '../../features/movies/movieSlice'
import Card from '../Card'

export default function Listing ({ list }) {

    let movies = useSelector(getAllMovies)
    let shows = useSelector(getAllShows)
    
    let [render, setRender] = useState()

    useEffect(() => {
        list === 'movies' &&
        movies.Response === 'True' &&
        setRender(movies.Search)

        list === 'movies' &&
        movies.Response !== 'True' &&
        setRender(movies.Error)

        list === 'shows' &&
        shows.Response === 'True' &&
        setRender(shows.Search)

        list === 'shows' &&
        shows.Response !== 'True' &&
        setRender(shows.Error)
        
        console.log(render)
    }, [list, render, movies, shows])

    return (
        <article className='list-wrapper'>
            <div className='list-container'>
                {
                    render && Array.isArray(render) &&
                    render.map((item, i) => {
                        return <Card
                            key={i}
                            data={item}
                        />
                    })
                }
                {
                    render && Array.isArray(render) && render.lenght === 0 &&
                    <div>...Loading</div>
                }
                {
                    render && !Array.isArray(render) &&
                    <div className='list-error'>
                        <h3>{render}</h3>
                    </div>
                }
            </div>
        </article>
    )
}