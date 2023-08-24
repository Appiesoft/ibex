import React from "react";

import "./Home.css";
import Sidebar from "../layout/sidebar/Sidebar";
import Header from "../layout/header/Header";
const Home = () => {
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            Home
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
