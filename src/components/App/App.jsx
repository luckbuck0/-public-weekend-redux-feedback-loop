import React from 'react';
import axios from 'axios';
import './App.css';

//---------------------Pages---------------------------------
import PageOne from '../PageOne/PageOne';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//---------------------Router---------------------------------

import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';


//---------------------Material UI---------------------------------
import { Button } from '@mui/material';



function App() {



  let history = useHistory()

  console.log('hello');

  return (
    <div className='App'>
      <header className='feedback-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4 className='O5'>05X STUDIOS</h4>
      </header>

      <Router>

        <Route exact path="/">

          <h3 className='textFront'> TO BEGIN <br /> PRESS START</h3>
          <Button variant="contained" sx={{mt:20}} color="primary" className='startButton'><Link to="/pageOne">START</Link></Button>
        </Route>

        <Route exact path="/pageOne">
          <PageOne />
        </Route>

        <Route exact path="/pageTwo">
          <Understanding />
        </Route>

        <Route exact path="/pageThree">
          <Support />
        </Route>

        <Route exact path="/pageFour">
          <Comments />
        </Route>

        <Route exact path="/pageFive">
          <Review />
        </Route>

        <Route exact path="/pageSix">
          <ThankYou />
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
