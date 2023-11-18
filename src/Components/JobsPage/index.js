import React, { useContext } from "react";
import Navbar from "../Navbar";
import JobProfile from "../JobPorfile";
import JobFilters from "../JobFilters";
import "./index.css";
import JobCards from "../JobCards";
import Context from "../../Context";

const JobsPage = () => {
  const { serachInput, setSearchInputValue } = useContext(Context);

  const onchangeSearch = (event) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="job-page bg-secondary-subtle p-2 my-3 rounded">
          <div className="d-lg-flex">
            <div className="col-lg-4">
              <div className="my-3 d-lg-none">
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control border input"
                  value={serachInput}
                  onChange={onchangeSearch}
                />
              </div>
              <JobProfile />
              <hr />
              <JobFilters />
              <hr />
            </div>
            <div className="border-lg p-2 col-lg-8">
              <div className="d-none d-lg-block col-8  mx-auto my-3">
                <input
                  type="search"
                  placeholder="search"
                  className="form-control"
                  value={serachInput}
                  onChange={onchangeSearch}
                />
              </div>
              <JobCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
