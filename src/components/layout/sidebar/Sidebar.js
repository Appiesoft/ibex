import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import BookingTable from '../bookingTable/BookingTable'
import logonew from '../../static/logonew.jpg'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };
  return (
    <>
    {/* <div className='man_main_flex_event'> */}
        <div className="sidebar">
        <img src={logonew} alt='logo'/>
        <ul className="nav flex-column mt-5">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
            <span><i class="fa fa-home me-2" aria-hidden="true"></i></span>Dashboard
            </NavLink>
          </li>
          <li onClick={toggleDropdown}  className={` ${!isOpen ? "boxinactive nav-link  nav-item" : "boxactive nav-link nav-item"}`}>
            <NavLink className="d-flex justify-content-between students" to="#">
            <span><i class="fa fa-children me-2"></i>Students</span>
              <i className={` ${!isOpen ? "fa fa-angle-down" : "fa fa-angle-up"}`}></i>
              </NavLink>
          </li>
          {isOpen && (
            <ul className="nav flex-column dropdown_color border-0 ps-4">
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All Students Australia
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>Add New Student Australia
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All Students Canada
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All New Students Canada
            </NavLink>
          </li>
          </ul>
              )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-profile">
            <span><i className="fa fa-user me-2" ></i></span>My Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user-details">
            <span><i className="fa fa-users me-2" ></i></span>Users 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user-roles">
            <span><i className="fa fa-user-secret me-2" ></i></span>Users Roles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/primary-agents">
            <span><i className="fa fa-male me-2" ></i></span>Primary Agents
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sub-agents">
            <span><i className="fa fa-male me-2" ></i></span>Sub Agents
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/university">
            <span><i className="fa fa-building me-2" ></i></span>University
            </NavLink>
          </li>
        </ul>
      </div>
 
      {/* </div> */}
    </>
  )
}

export default Sidebar
