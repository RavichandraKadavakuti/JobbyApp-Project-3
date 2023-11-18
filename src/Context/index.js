import React from "react";

const Context = React.createContext({
  employmentType: "",
  setEmploymentTypeValue: () => {},
  salaryPackage: "",
  setSalaryPackageValue: () => {},
  serachInput: "",
  setSearchInputValue: () => {},
});

export default Context;
