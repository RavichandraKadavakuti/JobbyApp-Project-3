import React, { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import Home from "./Components/Home";
import JobsPage from "./Components/JobsPage";
import Context from "./Context";
import JobDetails from "./Components/JobDetails";
import ProctedRoutes from "./Components/ProtectedRoutes";

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

  const setEmploymentTypeValue = (event, value) => {
    if (event.target.checked) {
      setEmploymentType((prev) => [...prev, value]);
    } else {
      const unCheckedValue = employmentType.filter((each) => {
        if (each !== value) {
          return each;
        }
        return null;
      });
      console.log(unCheckedValue);
      setEmploymentType(unCheckedValue);
    }
  };

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
        <ProctedRoutes exact path="/" component={Home} />
        <ProctedRoutes exact path="/jobs" component={JobsPage} />
        <ProctedRoutes exact path="/job-details/:id" component={JobDetails} />
      </Context.Provider>
    </Switch>
  );
};

export default App;
