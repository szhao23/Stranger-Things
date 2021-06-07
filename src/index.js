import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import {Login, Dashboard, Home, Register, SearchBar, Posts} from './components';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/Posts">Posts</NavLink>
            <NavLink activeClassName="active" to="/Register">Register</NavLink>
            <NavLink activeClassName="active" to="/Login">Login</NavLink>
            <NavLink activeClassName="active" to="/Dashboard">Profile</NavLink>
              <div>
                  <SearchBar />
              </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/posts" component={Posts} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
ReactDOM.render(
        <App />
    ,document.getElementById('root')
);

export default App;