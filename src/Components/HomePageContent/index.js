import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePageContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-light col-md-8 col-lg-6 p-3">
          <h1>Find the job that fits your life</h1>
          <p>
            Millions of people are searching for jobs,salary information,company
            reviews,Find the job that fits ablities and potential.
          </p>
          <Link to="/jobs">
            <button type="button" className="btn btn-light">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
