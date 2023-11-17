import React from "react";
import {
  CallGetApi,
  InitialFetchAPiState,
  LoadingVieData,
  FailureviewData,
} from "../../Utilities";
import { useState, useEffect } from "react";
import "./index.css";

const JobProfile = () => {
  const [fetchState, setFetchState] = useState(InitialFetchAPiState.INITIAL);
  const [errorMsg, setErrorMsg] = useState("");
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(InitialFetchAPiState.INPROGRESS);
        const path = "profile";
        const apiData = await CallGetApi(path);
        const data = apiData.profile_details;
        const modifyData = {
          name: data.name,
          profileUrl: data.profile_image_url,
          shortBio: data.short_bio,
        };
        setProfileData(modifyData);
        setFetchState(InitialFetchAPiState.SUCCESS);
      } catch (error) {
        setErrorMsg(error.message);
        setFetchState(InitialFetchAPiState.FAILURE);
      }
    };
    fetchApi();
  }, []);

  const successView = () => {
    return (
      <div className="profile-bg p-2 rounded">
        <img
          src={profileData.profileUrl}
          alt={profileData.name}
          className="img-fluid"
        />
        <h1 className="mt-2">{profileData.name}</h1>
        <p>{profileData.shortBio}</p>
      </div>
    );
  };

  const failureView = () => {
    return FailureviewData(errorMsg);
  };

  const loadingView = () => {
    return LoadingVieData();
  };

  const RenderProfile = () => {
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
      <div className="row">{RenderProfile()}</div>
    </div>
  );
};

export default JobProfile;
