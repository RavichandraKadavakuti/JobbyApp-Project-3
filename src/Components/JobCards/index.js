import React, { useState, useEffect } from "react";

import {
  InitialFetchAPiState,
  LoadingVieData,
  FailureviewData,
  CallGetApi,
} from "../../Utilities";

const JobCards = () => {
  const [fetchState, setFetchState] = useState(InitialFetchAPiState.INITIAL);
  const [jobsCardDeatils, setJobCardDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(InitialFetchAPiState.INPROGRESS);
        const path = "jobs";
        const apiData = await CallGetApi(path);
        console.log(apiData);
        const modifyData = {};
        // setProfileData(modifyData);
        // setFetchState(InitialFetchAPiState.SUCCESS);
      } catch (error) {
        setErrorMsg(error.message);
        setFetchState(InitialFetchAPiState.FAILURE);
      }
    };
    fetchApi();
  }, []);

  const successView = () => {};

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
