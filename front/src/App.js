import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import Newclient from './Newclient.js';
import SearchClient from './SearchClient.js';
import NewService from './NewService.js'
import Work from './Work.js'
import { Switch, HashRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
  }

  render() {

    return (

      <HashRouter basename="/Nita">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/newclient" component={Newclient} />
          <Route exact path="/searchclient" component={() => <SearchClient data={this.state.clients} />} />
          <Route exact path="/newservice" component={NewService} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </HashRouter>


    );
  }
}

export default App;
