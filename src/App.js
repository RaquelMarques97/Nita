import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import Newclient from './Newclient.js';
import SearchClient from './SearchClient.js'
import { Switch, HashRouter, Route } from 'react-router-dom';

function App() {
  return (

    <HashRouter basename="/Nita">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/newclient" component={Newclient} />
        <Route exact path="/searchclient" component={SearchClient} />
      </Switch>
    </HashRouter>


  );
}



export default App;
