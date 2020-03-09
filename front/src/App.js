import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import Newclient from './Newclient.js';
import SearchClient from './SearchClient.js';
import Work from './Work.js'
import Service from './Service.js';
import { Switch, HashRouter, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      services: []
  
    };

    this.getAllClients = this.getAllClients.bind(this);
    this.getAllServices = this.getAllServices.bind(this);
  }


  componentDidMount() {
    this.getAllClients();
    this.getAllServices();


  }
  
  getAllClients = () => {
    fetch('http://localhost:5000/clients')
        .then(res => res.json())
        .then(res => {
            this.setState({          
              clients: res
            });
  
        })
  }

  getAllServices = () => {
    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(res => {
            this.setState({
              services: res     
            });

        })
}



  render() {
 
    return (

      <HashRouter basename="/Nita">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/newclient" component={Newclient} />
          <Route exact path="/searchclient" component={() => <SearchClient clients={this.state.clients}/>} />
          <Route exact path="/work" component={() => <Work services={this.state.services} clients={this.state.clients} />} />
          <Route exact path="/work/service" component={() => <Service services={this.state.services} clients={this.state.clients} />} />
        </Switch>
      </HashRouter>


    );
  }
}

export default App;
