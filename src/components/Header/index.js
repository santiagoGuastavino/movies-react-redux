import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../images/logo.png';

let Header = () => {
    return (
        <header className='header-wrapper'>
            <nav className='header'>
                <Link to='/' className='house-icon'>
                    <FontAwesomeIcon icon={ faHouse } />
                </Link>
                <div className='logo-img'>
                    <img src={ logoImg } alt='logo-img' />
                    <p>My Movie App</p>
                </div>
                <div className='user-icon'>
                    <FontAwesomeIcon icon={ faUser } />
                </div>
            </nav>
        </header>
    )
};

export default Header;