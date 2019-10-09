import React, { Component } from "react";
import LeftSection from "../left/LeftSection";
import RightSection from "../right/RightSection";
import CenterSection from "../center/CenterSection";
class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <LeftSection />
        </div>
        <div className="col-md-6 col-sm-12">
          <CenterSection />
        </div>
        <div className="col-md-3 col-sm-12">
          <RightSection />
        </div>
      </div>
    );
  }
}

export default Dashboard;
