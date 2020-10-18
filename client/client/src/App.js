import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav/nav';
import AboutPage from './Views/AboutPage/AboutPage'
import MainPage from './Views/MainPage/MainPage'
import ShopPage from './Views/ShopPage/ShopPage'
import ContactPage from './Views/ContactPage/contact';
import ItemPage from './Views/ItemPage/ItemPage';

const App = () =>(
  <Router>
    <Nav />

    <main>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/contact'>
          <ContactPage />
        </Route>

        <Route exact path='/about'>
          <AboutPage />
        </Route>

        <Route path='/shop'>
          <ShopPage />
        </Route>

        <Route path='/item'>
          <ItemPage />
        </Route>
      </Switch>
    </main>

  </Router>
)

export default App;
