import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
//import Users from './components/users/Users';
//import Search from './components/users/Search';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/Layout/Alert';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import './App.css';



import GithubState from '../src/context/github/GithubState';
import AlertState from '../src/context/alert/AlertState';

const App = () => {





  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                {/* <Route exact path="/" render={props => (
                  <Fragment>
                    <Search/>
                    <Users />
                  </Fragment>
                )} /> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:username" component={User} />
                <Route component={NotFound} />


              </Switch>


            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );



}

export default App;
