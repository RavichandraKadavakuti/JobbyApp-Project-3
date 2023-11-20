import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
  CallGetApi,
  FailureviewData,
  InitialFetchAPiState,
  LoadingVieData,
} from "../../Utilities";

import "./index.css";

const JobDetails = (props) => {
  const [fetchState, setFetchState] = useState(InitialFetchAPiState.INITIAL);
  const [errorMsg, setErrorMsg] = useState("");
  const [JobDetailsData, setJobDetailsData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(InitialFetchAPiState.INPROGRESS);
        const { match } = props;
        const { params } = match;
        const { id } = params;
        const path = `jobs/${id}`;
        const apiData = await CallGetApi(path);
        const data = apiData.job_details;
        console.log(apiData);
        const jobDetails = {
          companyLogoUrl: data.company_logo_url,
          companyWebsiteUrl: data.company_website_url,
          employmentType: data.employment_type,
          id: data.id,
          jobDescription: data.job_description,
          location: data.location,
          rating: data.rating,
          title: data.title,
          packagePerAnnum: data.package_per_annum,
          description: data.life_at_company.description,
          imageUrl: data.life_at_company.image_url,
          skills: data.skills.map((each) => ({
            imageUrl: each.image_url,
            name: each.name,
          })),
          similarJobs: apiData.similar_jobs.map((each) => ({
            id: each.id,
            imageUrl: each.image_url,
            rating: each.rating,
            title: each.title,
            location: each.location,
            jobDescription: each.job_description,
            employmentType: each.employment_type,
            companyLogoUrl: each.company_logo_url,
          })),
        };
        setFetchState(InitialFetchAPiState.SUCCESS);
        setJobDetailsData(jobDetails);
      } catch (error) {
        setErrorMsg(error.message);
        setFetchState(InitialFetchAPiState.FAILURE);
      }
    };
    fetchApi();
  }, []);

  const successView = () => {
    return (
      <div className="bg-dark text-light rounded p-2">
        <div className="d-flex align-items-center">
          <div className="col-3 col-lg-1">
            <img
              src={JobDetailsData.companyLogoUrl}
              alt={JobDetailsData.id}
              className="img-fluid"
            />
          </div>
          <div className="ms-3 ms-lg-3">
            <h6>{JobDetailsData.title}</h6>
            <div className="d-flex align-items-center my-3">
              <i className="fa-solid fa-star star me-2"></i>
              <span>{JobDetailsData.rating}</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="d-flex align-items-center me-5 col-sm-3">
            <i className="fa-solid fa-location-dot me-1"></i>
            <span>{JobDetailsData.location}</span>
          </div>
          <div className="d-flex align-items-center col-sm-3">
            <i className="fa-solid fa-suitcase me-1"></i>
            <span>{JobDetailsData.employmentType}</span>
          </div>
          <div className="flex-grow-1 d-flex justify-content-end">
            <span>{JobDetailsData.packagePerAnnum}</span>
          </div>
        </div>
        <hr />
        <div>
          <h5>Description</h5>
          <p>{JobDetailsData.jobDescription}</p>
        </div>
        <div>
          <h5>Skills</h5>
          <ul className="d-flex flex-wrap">
            {JobDetailsData.skills.map((each) => (
              <li
                key={each.name}
                className="d-flex justify-content-center col-3 border rounded m-2 p-2"
              >
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="skill-img"
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Life At Company</h5>
          <p>{JobDetailsData.description}</p>
          <img
            src={JobDetailsData.imageUrl}
            alt={JobDetailsData.id}
            className="img-fluid"
          />
        </div>
        <div className="mt-5">
          <h5>Similar Jobs</h5>
          <ul className="d-flex flex-wrap">
            {JobDetailsData.similarJobs.map((each) => (
              <li className="col-11 col-md-5 col-xl-3 border rounded p-2 m-2">
                <div className="d-flex ">
                  <div className="col-3">
                    <img
                      src={each.companyLogoUrl}
                      alt={each.id}
                      className="img-fluid"
                    />
                  </div>
                  <div className="ms-3 ms-lg-3">
                    <h6>{each.title}</h6>
                    <div className="d-flex align-items-center my-3">
                      <i className="fa-solid fa-star star me-2"></i>
                      <span>{each.rating}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <h5>Desctiption</h5>
                  <p>{each.jobDescription}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="d-flex align-items-center me-5 col-sm-3">
                    <i className="fa-solid fa-location-dot me-1"></i>
                    <span>{each.location}</span>
                  </div>
                  <div className="d-flex align-items-center col-sm-3 flex-grow-1">
                    <i className="fa-solid fa-suitcase me-1"></i>
                    <span>{each.employmentType}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const failureView = () => {
    return FailureviewData(errorMsg);
  };

  const loadingView = () => {
    return LoadingVieData();
  };

  const RenderJobDetails = () => {
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
      <div className="row">
        <Navbar />
        {RenderJobDetails()}
      </div>
    </div>
  );
};

export default JobDetails;
