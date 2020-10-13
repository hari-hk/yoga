import React from 'react';
import './App.scss';

import { MenuComponent as Menu } from './components/menu/menu.component';
import { MapComponent as Map } from './components/map/map';

import { Home } from './screens/home/home';
import { Enquires } from './screens/enquires/enquires';
import { MySchedules } from './screens/my-schedules/my-schedules';
import { Settings } from './screens/settings/settings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router component={Home} path='/'>
        <Menu></Menu>
        <div className="container">
          <section><Map /></section>
          <section>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Redirect to="/home" />
                  )
                }}
              />
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/enquires">
                <Enquires />
              </Route>
              <Route path="/my-schedules">
                <MySchedules />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>

    </div>
  );
}

export default App;
