import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./UsersTable.css";
const UsersTable = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            user-details
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
