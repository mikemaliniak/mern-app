import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
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
          <Fragment>
            <Navbar />
            <Route  exact path='/' component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path='/register' component={ Register } />
                <Route exact path='/login' component={ Login } />
                <Route exact path='/profiles' component={ Profiles } />
                <Route exact path='/profile/:id' component={ Profile } />
                <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                <PrivateRoute exact path='/create-profile' component={ CreateProfile } />
                <PrivateRoute exact path='/edit-profile' component={ EditProfile } />
                <PrivateRoute exact path='/add-experience' component={ AddExperience } />
                <PrivateRoute exact path='/add-education' component={ AddEducation } />
                <PrivateRoute exact path='/posts' component={ Posts } />
                <PrivateRoute exact path='/posts/:id' component={ Post } />
              </Switch>
            </section>
          </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
