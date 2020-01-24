import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home'
import NotFound from './components/NotFound'
import UserForm from './components/UserForm';
import UpdateUser from './components/UpdateUser'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <UserForm />
          </Route>
          <Route exact path="/delete/:id">
            <Redirect to='/' />
          </Route>
          <Route exact path="/:id">
            <UpdateUser />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
