import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import user from '../../static/user.jpg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <header class="text-gray-600 body-font py-4">
          <div class="container-fluid mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <span class="flex title-font font-medium items-center text-gray-900 md:mb-0 ml-auto w-10 ">
             <img src={user} alt="user" className="rounded-circle"/>
            </span>
            <nav class=" md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center me-4">
              <span
                class="mr-5 hover:text-danger"
                onClick={toggleDropdown}
                className={` ${
                  !isOpen
                    ? "boxinactive"
                    : "boxactive"
                }`}
              >  <span>Welcome , admin</span>
      
              <i className={` ${!isOpen ? "fa-sharp fa-solid fa-caret-down ms-2" : "fa-sharp fa-solid fa-caret-up ms-2"}`}></i>
           
                {isOpen && (
                  <div className="position-absolute border-1 m-3 dropdown-profile" >
                  <h6 className="border-bottom px-4 py-2 m-0">
                  <NavLink to="/my-profile">
                    <span>
                      <i class="fa fa-user me-2" aria-hidden="true"></i>
                    </span>
                 My Profile
                 </NavLink>
                  </h6>
                  <h6 className="px-4 py-2 m-0">
                  <NavLink to="/login">
                    <span>
                    <i class="fa-solid fa-right-from-bracket me-2"></i>
                    </span>
               LogOut
               </NavLink>
                  </h6>
                  </div>
                )}
              </span>
            </nav>
            <button className="bg-stone-100 rounded-2 p-2">
              <i class="fa-solid fa-bell"></i> 0
            </button>
          </div>
        </header>
    </>
  );
};

export default Header;
