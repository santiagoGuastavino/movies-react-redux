import React from 'react';
import './styles.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import Footer from './Footer';

let App = () => {
  return (
    <>
      <div className='layout'>
        <Header />
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/movie/:imbdId' element={ <MovieDetail /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        <Footer />
      </div>
    </>
  )
};

export default App;