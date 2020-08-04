import React from "react";
import Sidebar from "../../components/Sidebar";
import Register from "../../containers/Register";
import StrobesHeader from "../../components/StrobesHeader";

const LandingPage = () => {
  return (
    <div>
      <div className="bx--row container">
        <Sidebar />
        <div className="bx--col-md-10 bx--offset-lg-1 bx--col-lg-10 register">
          <StrobesHeader />
          <Register />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
