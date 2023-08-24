import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./MyProfile.css";
const MyProfile = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            MyProfile
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
