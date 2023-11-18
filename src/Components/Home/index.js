import React from "react";
import Navbar from "../Navbar";
import HomePageContent from "../HomePageContent";
import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="d-md-flex align-items-md-center home-page">
          <HomePageContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
