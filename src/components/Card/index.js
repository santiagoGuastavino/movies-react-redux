import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card ({ data }) {
  return (
    <Link
      to={`/detail/${data.imdbID}`}
      className='card-outer'
    >
      <div className='card-top'>
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className='card-info'>
        <h4>{data.Title}</h4>
        <p>{data.Year}</p>
      </div>
    </Link>
  )
}
