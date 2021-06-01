import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Register from './Register';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/Register">Register</NavLink><small>(Access with token only)</small>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Profile</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;