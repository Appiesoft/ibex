import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./University.css";
const University = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            University
          </div>
        </div>
      </div>
    </>
  );
};

export default University;