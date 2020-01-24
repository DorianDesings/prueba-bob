import React from 'react';

//Router
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Redux
import { Provider } from 'react-redux'
import store from './store'

//Components
import Header from './components/Header';
import Home from './components/Home'
import NotFound from './components/NotFound'
import UserForm from './components/UserForm';
import UpdateUser from './components/UpdateUser'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <UserForm />
          </Route>
          <Route exact path="/:id">
            <UpdateUser />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Provider>
    </Router>
  )
}

export default App;
