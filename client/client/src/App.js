import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav/nav';
import AboutPage from './Views/AboutPage/AboutPage'
import MainPage from './Views/MainPage/MainPage'
import ShopPage from './Views/ShopPage/ShopPage'

const App = () =>(
  <Router>
    <Nav />

    <main>
      <Route exact path='/'>
        <MainPage />
      </Route>

      <Route exact path='/about'>
        <AboutPage />
      </Route>

      <Route exact path='/shop'>
        <ShopPage />
      </Route>
    </main>

  </Router>
)

export default App;