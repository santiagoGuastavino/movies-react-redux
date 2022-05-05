import './styles.scss';
import React from 'react';

let Card = ({ data }) => {
    return (
        <div className='card-outer'>
            <div className='card-top'>
                <img src={ data.Poster } alt={ data.Title } />
            </div>
            <div className='card-info'>
                <h4>{ data.Title }</h4>
                <p>{ data.Year }</p>
            </div>
        </div>
    )
};

export default Card;