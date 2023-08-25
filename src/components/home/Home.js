import React, { useState } from "react";
import profileimg from "../static/user.jpg";
import "./Home.css";
import Sidebar from "../layout/sidebar/Sidebar";
import Header from "../layout/header/Header";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Dropdown, Tooltip, OverlayTrigger } from "react-bootstrap";
import Footer from "../layout/footer/Footer";
const Home = () => {
  const steps = [
    "Addmissios",
    "Processing",
    "OL Applied",
    "GTE",
    "Upload Fees & all",
    "COE",
    "File lodgement & all",
    "Result",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div>
        <div className="man_main_flex_event ">
          <Sidebar />
          <div className="man_event_right">
            <Header />
            <div class="col-md-9 col-lg-10 col-xl-12 mt-3 mx-auto ps-3">
              <div class="top_btns">
                <NavLink 
                  class="d-block d-sm-inline-block add_new_btn"
                to='/add-new-student'
                >
                  <button className="p-2 bg-cyan-500 text-white rounded-1">
                    <i class="fa fa-plus me-2"></i>
                    Add New Student
                  </button>
                </NavLink>
                <button className="p-2 bg-cyan-500 text-white rounded-1">
                  Filters
                </button>
              </div>
              {/* filter buttne here pending */}
              <div className="row mx-auto">
                <div class="col-md-12 sav_newfilter pt-3 d-flex flex-wrap ps-0">
                  <NavLink to='' class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Add Students (+16)
                    </button>
                  </NavLink>

                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Pending Admission Users (4)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Flagged To Processing (4)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Rejected By GTE (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Flagged To GTE (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Processing (6)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      GTE (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Lodgement (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Flagged to Lodgement (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Visa Approved (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Visa Rejected (0)
                    </button>
                  </NavLink>
                  <NavLink class="d-block d-sm-inline-block">
                    <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                      Visa Pending (0)
                    </button>
                  </NavLink>
                  <div className="rounded-pill border-black  d-flex border">
                    <i class="fa fa-search py-3 ps-3" aria-hidden="true"></i>
                    <input
                      type="text"
                      placeholder="Search ..."
                      class="w-full  bg-gray-100 bg-opacity-50 rounded-pill focus:ring-gray-100 focus:bg-transparent  focus:border-gray-300 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 px-3">
              <div class="whole_box user-row">
                <div class="left2_div">
                  <img src={profileimg} className="mx-auto" alt="profile" />
                  <h4>Ibex-0557</h4>
                  <h4>Student age is less than 18 </h4>
                </div>
                <div class="left3_div">
                  <div class="top_sav">
                    <div class="sav_txt1">
                      <span>Enr ID</span>
                      <h6>Ibex-0557</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>Full Name</span>
                      <h6>shah rukh khan</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>Father Namer</span>
                      <h6>Abdula khann sheikh</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>Status</span>
                      <h6>Flagged To Processing</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>GTE</span>
                      <h6>12434</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>University</span>
                      <h6>Notre Dame</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>Primary Agent Name </span>
                      <h6>Primary A</h6>
                    </div>
                    <div class="sav_txt1">
                      <span>Sub Agent Name </span>
                      <h6>Agent To Name</h6>
                    </div>
                  </div>
                  <div className="flex ">
                    {steps?.map((step, i) => (
                      <div
                        key={i}
                        className={`step-item relative flex flex-col  justify-center items-center w-36 ${
                          currentStep === i + 1 && "active"
                        } ${(i + 1 < currentStep || complete) && "complete"} `}
                      >
                        <div className="step">
                          {i + 1 < currentStep || complete ? (
                            <TiTick size={24} />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <p className="text-gray-500 ">{step}</p>
                      </div>
                    ))}
                  </div>
                  {!complete && (
                    <button
                      className="btn"
                      onClick={() => {
                        currentStep === steps.length
                          ? setComplete(true)
                          : setCurrentStep((prev) => prev + 1);
                      }}
                    >
                      {currentStep === steps.length ? "Finish" : "Next"} ,
                      {currentStep}
                    </button>
                  )}
                </div>

                <div class="left_div">
                  <div class="btn-group">
                    <i class="fa fa-user-secret text-cyan-500 me-4 pt-2 text-xl"></i>
                    {/* <span class="user-role">Aug22pm434</span> */}
                    <Dropdown>
                      <Dropdown.Toggle className="bgcolorDrop ps-0 rounded-end-2 rounded-start-0 ">
                        <i className="uil uil-sort-amount-down px-1"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="bg-light">
                        <Dropdown.Item className="bg-light ps-0">
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip> Edit</Tooltip>}
                          >
                            <div className="d-flex">
                              <button className="bg-light p-1 px-2 ms-3">
                                <i
                                  class=" text-zinc-500 fa fa-pencil-square-o"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip> Details</Tooltip>}
                          >
                            <div className="d-flex">
                              <button className="bg-light p-1 px-2 ms-3">
                                <i
                                  class=" text-zinc-500 fa fa-list"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <h6 className="text-zinc-500 pt-1 ps-1">
                                Details
                              </h6>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Delete</Tooltip>}
                          >
                            <div className="d-flex">
                              <button className="bg-light p-1 px-2 ms-3">
                                <i
                                  class=" text-zinc-500 fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <h6 className="text-zinc-500 pt-2 ps-2">
                                Delete
                              </h6>
                            </div>
                          </OverlayTrigger>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
