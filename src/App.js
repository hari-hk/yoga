import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import { MapComponent as Map } from "./components/map/map";
import { MenuComponent as Menu } from "./components/menu/menu.component";
import { Enquires } from "./screens/enquires/enquires";
import { Home } from "./screens/home/home";
import { MySchedules } from "./screens/my-schedules/my-schedules";
import { Settings } from "./screens/settings/settings";

function App() {
  return (
    <div className="App">
      <Router component={Home} path="/">
        <Menu></Menu>
        <Switch>
          <div className="container">
            <section>
              <Map />
            </section>
            <section>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/home" />;
                }}
              />
              <Route path="/home" component={Home} />
              <Route path="/enquires" component={Enquires} />
              <Route path="/my-schedules" component={MySchedules} />
              <Route path="/settings" component={Settings} />
            </section>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
