import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import logoImg from '../../images/logo.png'

export default function Header () {
  return (
        <>
        <header className='header-wrapper'>
            <nav>
                <div className='house-icon'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </div>
                <div className='logo-img'>
                    <img src={logoImg} alt='logo-img' />
                    <p>My Movie App</p>
                </div>
                <div className='user-icon'>
                    <FontAwesomeIcon icon={faUser} />
                </div>

            </nav>
        </header>
        <div className='banner-box'></div>
        </>
  )
}
