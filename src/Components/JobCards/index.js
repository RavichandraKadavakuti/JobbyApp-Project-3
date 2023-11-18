import React, { useState, useEffect, useContext } from "react";

import {
  InitialFetchAPiState,
  LoadingVieData,
  FailureviewData,
  CallGetApi,
  NoJobsFound,
} from "../../Utilities";

import "./index.css";

import Context from "../../Context";

const JobCards = () => {
  const { salaryPackage, employmentType, serachInput } = useContext(Context);
  const [fetchState, setFetchState] = useState(InitialFetchAPiState.INITIAL);
  const [jobsCardDeatils, setJobCardDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(InitialFetchAPiState.INPROGRESS);
        const path = `jobs?employment_type=${employmentType}&minimum_package=${salaryPackage}&search=${serachInput}`;
        const apiData = await CallGetApi(path);
        const modifyData = apiData.jobs.map((each) => ({
          id: each.id,
          companyLogoUrl: each.company_logo_url,
          title: each.title,
          rating: each.rating,
          packagePerAnnum: each.package_per_annum,
          location: each.location,
          jobDescription: each.job_description,
          employmentType: each.employment_type,
        }));
        setJobCardDetails(modifyData);
        setFetchState(InitialFetchAPiState.SUCCESS);
      } catch (error) {
        setErrorMsg(error.message);
        setFetchState(InitialFetchAPiState.FAILURE);
      }
    };
    fetchApi();
  }, [salaryPackage, employmentType, serachInput]);

  const successView = () => {
    return (
      <ul>
        {jobsCardDeatils.length > 0 &&
          jobsCardDeatils.map((each) => (
            <li key={each.id} className="m-2">
              <div className="border border-dark rounded p-2">
                <div className="d-flex align-items-center">
                  <div className="col-3 col-lg-2">
                    <img
                      src={each.companyLogoUrl}
                      alt={each.id}
                      className="img-fluid"
                    />
                  </div>
                  <div className="ms-2">
                    <h6>{each.title}</h6>
                    <div className="d-flex align-items-center my-3">
                      <i className="fa-solid fa-star star me-2"></i>
                      <span>{each.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div className="d-flex align-items-center me-2 col-sm-3">
                    <i className="fa-solid fa-location-dot me-1"></i>
                    <span>{each.location}</span>
                  </div>
                  <div className="d-flex align-items-center col-sm-3">
                    <i className="fa-solid fa-suitcase me-1"></i>
                    <span>{each.employmentType}</span>
                  </div>
                  <div className="flex-grow-1 d-flex justify-content-end">
                    <span>{each.packagePerAnnum}</span>
                  </div>
                </div>
                <hr />
                <div>
                  <h5>Description</h5>
                  <p>{each.jobDescription}</p>
                </div>
              </div>
            </li>
          ))}
        {jobsCardDeatils < 1 && NoJobsFound(serachInput)}
      </ul>
    );
  };

  const failureView = () => {
    return FailureviewData(errorMsg);
  };

  const loadingView = () => {
    return LoadingVieData();
  };

  const RenderJobsCards = () => {
    switch (fetchState) {
      case InitialFetchAPiState.SUCCESS:
        return successView();
      case InitialFetchAPiState.FAILURE:
        return failureView();
      case InitialFetchAPiState.INPROGRESS:
        return loadingView();
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">{RenderJobsCards()}</div>
    </div>
  );
};

export default JobCards;
