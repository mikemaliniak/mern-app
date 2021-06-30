import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './components/routing/Routes';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

// Check if user has valid token
if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  // Adding second parameter at the end, [], with empty array
  // prevents an inifinite loop of store.dispatch(loadUser()) 
  // being called infinitum.  Makes it like componentDidMount.
  // Explained in docs found at reactjs.org/docs/hooks-effect.html

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
      </Router>
    </Provider>
  )
}

export default App;
