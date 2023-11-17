import React from "react";
import Navbar from "../Navbar";
import JobProfile from "../JobPorfile";
import JobFilters from "../JobFilters";
import "./index.css";
import JobCards from "../JobCards";

const JobsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="job-page bg-dark-subtle p-2">
          <div className="d-lg-flex">
            <div className="col-lg-4">
              <div className="my-3 d-lg-none">
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control border input"
                />
              </div>
              <JobProfile />
              <hr />
              <JobFilters />
              <hr />
            </div>
            <div className="border-lg p-2 col-lg-8">
              <div className="d-none d-lg-block col-8  mx-auto">
                <input
                  type="search"
                  placeholder="search"
                  className="form-control"
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
