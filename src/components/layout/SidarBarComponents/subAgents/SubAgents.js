import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./SubAgents.css";
const SubAgents = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            SubAgents
          </div>
        </div>
      </div>
    </>
  );
};

export default SubAgents;
