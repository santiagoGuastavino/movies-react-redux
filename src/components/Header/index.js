import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../images/';

let Header = () => {
    return (
        <header className='header'>
            <Link to='/home' className='house-icon'>
                <FontAwesomeIcon icon={ faHouse } />
            </Link>
            <div className='logo-img'>
                <img src={} alt='logo-img' />
            </div>
            <div className='user-icon'>
                <FontAwesomeIcon icon={ faUser } />
            </div>
        </header>
    )
};

export default Header;