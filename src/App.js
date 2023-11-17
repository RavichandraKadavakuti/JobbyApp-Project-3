import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import Home from "./Components/Home";
import JobsPage from "./Components/JobsPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={JobsPage} />
    </Switch>
  );
};

export default App;
