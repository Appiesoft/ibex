import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LoginUser from "./components/user/LoginUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProfile from "./components/layout/SidarBarComponents/myProfile/MyProfile";
import UsersTable from "./components/layout/SidarBarComponents/usersTable/UsersTable";
import UserRoles from "./components/layout/SidarBarComponents/userRoles/UserRoles";
import University from "./components/layout/SidarBarComponents/university/University";
import PrimaryAgents from "./components/layout/SidarBarComponents/primaryAgents/PrimaryAgents";
import SubAgents from "./components/layout/SidarBarComponents/subAgents/SubAgents";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
          <Route exact path="/user-details" element={<UsersTable />} />
          <Route exact path="/user-roles" element={<UserRoles />} />
          <Route exact path="/university" element={<University />} />
          <Route exact path="/primary-agents" element={<PrimaryAgents />} />

          <Route exact path="/sub-agents" element={<SubAgents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
