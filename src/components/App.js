import './styles.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import Footer from './Footer';

let App = () => {
  return (
    <Router>
      <div className='layout'>
        <Header />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/movie/:imbdId' element={ <MovieDetail /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
};

export default App;