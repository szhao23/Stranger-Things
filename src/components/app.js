import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Register from './Register';
import SearchBar from './search';
import Posts from './posts';
 
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
 
export default App;