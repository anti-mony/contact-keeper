import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

import ContactState from "./Context/Contact/ContactState";
import AuthState from "./Context/Auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Navbar />
          <Fragment>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
