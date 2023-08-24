import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./UserRoles.css";
const UserRoles = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            UserRoles
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRoles;