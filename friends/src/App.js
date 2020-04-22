import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/ProtectedRoute';
import AddFriend from './components/AddFriend';
import RemoveFriend from './components/RemoveFriend';

function App() {
  return (
  <Router>
    <div className="App">
      <Link to='/'><h2>Home</h2></Link>
      <Link to='/login'><h2>Login</h2></Link>
      <Link to='/friends-list'><h2>Friends</h2></Link>
      <Link to='/add-friend'><h2>Add Friend</h2></Link>
      <Link to='/remove-friend'><h2>Remove Friend</h2></Link>

      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='friends-list' component={FriendsList} />
        <PrivateRoute exact path='add-friend' component={AddFriend} />
        <PrivateRoute exact path='/remove-friend' component={RemoveFriend}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
