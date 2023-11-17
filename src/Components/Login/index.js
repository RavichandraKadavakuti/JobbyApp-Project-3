import React, { useState } from "react";
import "./index.css";
import { CallLoginApi, InitialFetchAPiState } from "../../Utilities";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [fetchState, setFetchState] = useState(InitialFetchAPiState.INITIAL);
  const [isCheck, setIsCheck] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onsubmitForm = async (event) => {
    try {
      setFetchState(InitialFetchAPiState.INPROGRESS);
      event.preventDefault();
      const path = "login";
      const bodyData = { username: inputName, password: inputPassword };
      const apiData = await CallLoginApi(path, bodyData);
      Cookies.set("jwt_token", apiData.jwt_token, { expires: 30 });
      const { history } = props;
      history.replace("/");
    } catch (error) {
      setErrorMsg(error.message);
      setFetchState(InitialFetchAPiState.FAILURE);
    }
  };

  const onchangeName = (event) => {
    setInputName(event.target.value);
  };

  const onchangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const onclickCheckBox = (event) => {
    setIsCheck(event.target.checked);
  };

  const token = Cookies.get("jwt_token");

  if (token !== undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="login-container d-flex  flex-column align-items-center justify-content-center bg-light">
          <div className="col-12 col-md-8 col-lg-6 p-3 p-md-5 rounded border border-primary">
            <div className="text-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="logo"
                className="img-fluid"
              />
            </div>
            <form onSubmit={onsubmitForm}>
              <div className="d-flex flex-column my-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  id="username"
                  className="form-control-lg border input"
                  value={inputName}
                  onChange={onchangeName}
                />
              </div>
              <div className="d-flex flex-column my-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={isCheck ? "text" : "password"}
                  placeholder="Enter Password"
                  id="password"
                  className="form-control-lg border input"
                  value={inputPassword}
                  onChange={onchangePassword}
                />
              </div>
              <div className="form-check form-switch my-3">
                <input
                  type="checkbox"
                  id="check"
                  className="form-check-input"
                  value={isCheck}
                  onClick={onclickCheckBox}
                />
                <label htmlFor="check" className="from-check-label">
                  Show Password
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn  btn-lg btn-dark login-hover"
                >
                  {fetchState === InitialFetchAPiState.INPROGRESS
                    ? "Loading Please Wait..."
                    : "Login"}
                </button>
              </div>
              {fetchState === InitialFetchAPiState.FAILURE && (
                <div className="alert alert-danger mt-3">{errorMsg}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
