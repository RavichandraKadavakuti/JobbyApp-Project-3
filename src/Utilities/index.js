import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

let token = Cookies.get("jwt_token");

export const InitialFetchAPiState = {
  INITIAL: "Initial",
  SUCCESS: "Success",
  FAILURE: "Failure",
  INPROGRESS: "Inprogress",
};

export const employmentTypesList = [
  {
    label: "Full Time",
    employmentTypeId: "FULLTIME",
  },
  {
    label: "Part Time",
    employmentTypeId: "PARTTIME",
  },
  {
    label: "Freelance",
    employmentTypeId: "FREELANCE",
  },
  {
    label: "Internship",
    employmentTypeId: "INTERNSHIP",
  },
];

export const salaryRangesList = [
  {
    salaryRangeId: "1000000",
    label: "10 LPA and above",
  },
  {
    salaryRangeId: "2000000",
    label: "20 LPA and above",
  },
  {
    salaryRangeId: "3000000",
    label: "30 LPA and above",
  },
  {
    salaryRangeId: "4000000",
    label: "40 LPA and above",
  },
];

export const CallLoginApi = async (path, data) => {
  try {
    const url = `https://apis.ccbp.in/${path}`;
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const req = await fetch(url, options);
    const res = await req.json();
    if (!req.ok) {
      throw new Error(res.error_msg);
    }
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const CallGetApi = async (path) => {
  try {
    const url = `https://apis.ccbp.in/${path}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await fetch(url, options);
    const res = await req.json();
    if (!req.ok) {
      throw new Error(res.error_msg);
    }
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const LoadingVieData = () => (
  <div className="d-flex justify-content-center my-5">
    <TailSpin color="blue" height={80} width={80} />
  </div>
);

export const FailureviewData = (msg) => (
  <div className="d-flex flex-column align-items-center text-center justify-content-center my-5">
    <img
      src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      alt="failure"
      className="img-fluid"
    />
    <b>{msg}</b>
  </div>
);

export const NoJobsFound = (msg) => (
  <div className="d-flex flex-column align-items-center text-center my-5">
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      alt="no jobs"
      className="img-fluid"
    />
    <h3>No jobs found.</h3>
    <p>
      We could not found any <b>{msg}</b> jobs. Try any filters
    </p>
  </div>
);
