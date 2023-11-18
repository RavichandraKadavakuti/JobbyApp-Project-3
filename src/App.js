import React, { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import Home from "./Components/Home";
import JobsPage from "./Components/JobsPage";
import Context from "./Context";

const App = () => {
  const [employmentType, setEmploymentType] = useState([]);

  const [salaryPackage, setSalaryPackage] = useState("");

  const [serachInput, setSerachInput] = useState("");

  const setSalaryPackageValue = (value) => {
    setSalaryPackage(value);
  };

  const setSearchInputValue = (value) => {
    setSerachInput(value);
  };

  const setEmploymentTypeValue = () => {};

  return (
    <Switch>
      <Context.Provider
        value={{
          employmentType,
          salaryPackage,
          serachInput,
          setSearchInputValue,
          setEmploymentTypeValue,
          setSalaryPackageValue,
        }}
      >
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={JobsPage} />
      </Context.Provider>
    </Switch>
  );
};

export default App;
