import React from 'react';
import axios from 'axios';
import './App.css';
import PageOne from '../PageOne/PageOne';

//---------------------Router---------------------------------

import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  return (
    <div className='App'>
      <header className='feedback-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4 className='O5'>05X STUDIOS</h4>
      </header>
      <h3 className='O52'> TO BEGIN <br /> PRESS START</h3>
      <button className='O53'>START</button>
      <Router>

        <Route exact path="/pageOne">
          <PageOne />
        </Route>

      </Router>

      <footer className='feedbackFooter'>
        <div>
          <h2>TELL US HOW YOU FEEL</h2> <br />
          <h3>We Care</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
