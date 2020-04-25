import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllRoutes } from "./routes/routes.js";
import "./scss/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const component = AllRoutes.map((item, index) => (
      <Route
        key={index}
        exact={item.exact}
        path={item.path}
        component={item.component}
      />
    ));
    return (
      <div className="App">
        <Router>
          <Switch>{component}</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
