import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./PrimaryAgents.css";
const PrimaryAgents = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            PrimaryAgents
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryAgents;