import React, { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./UsersTable.css";
import { NavLink } from "react-router-dom";
import { Dropdown, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import UserEdit from "./modal/userEdit/UserEdit";

const UsersTable = () => {
  const [modalShow, setModalShow] = useState(false);
 
  return (
    <>
      <div>
        <div className="man_main_flex_event">
          <Sidebar />
          <div className="man_event_right">
            <Header />
           <section className="ps-3 pt-4">
            <NavLink
                className="d-block d-sm-inline-block add_new_btn"
                to="/add-new-student"
              >
                <span className="p-2 bg-cyan-500 text-white rounded-1">
                  <i className="fa fa-plus me-2"></i>
                  Add Users
                </span>
              </NavLink>
              <Row className=" mx-auto">
                <div className="col-sm-12 col-md-6 ps-0">
                  <div className="mt-3 w-25 " id="users-list_length">
                    <label className="d-flex align-baseline">
                      Show
                      <select
                        name="users-list_length"
                        aria-controls="users-list"
                        className="custom-select custom-select-sm form-control form-control-sm mx-2"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                  <div className="dataTables_filter align-self-end">
                    <label className="d-flex align-baseline">
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm ms-2"
                        placeholder=""
                        aria-controls="users-list"
                      />
                    </label>
                  </div>
                </div>
                </Row>
                <Table striped bordered className="mt-3 ">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>RegisterDate</th>
                    <th>Confirmed</th>
                    <th>Country</th>
                    <th>Roles</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Admission 1</td>
                    <td>australia1@theibex.in</td>
                    <td>2023-07-28</td>
                    <td>Yes</td>
                    <td>Australia</td>
                    <td>Admission</td>
                    <td >  <Dropdown>
                      <Dropdown.Toggle className="bgcolorDrop ps-0 ps-2">
                      Admission
                        <i className="uil uil-sort-amount-down px-1"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="bg-light">
                        <Dropdown.Item className="bg-light ps-0">
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip> Edit</Tooltip>}
                          >
                            <div className="d-flex" onClick={() => setModalShow(true)}>
                              <span className="bg-light p-1 px-2 ms-3 " >
                                <i
                                  className=" text-zinc-500 fa fa-pencil-square-o"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Ban</Tooltip>}
                          >
                            <div className="d-flex">
                              <span className=" text-zinc-500 p-1 px-2 ms-3">
                              <i class="fa fa-ban" aria-hidden="true"></i>
                              </span>
                              <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip> Details</Tooltip>}
                          >
                            <div className="d-flex">
                              <span className="bg-light p-1 px-2 ms-3">
                                <i
                                  className=" text-zinc-500 fa fa-list"
                                  aria-hidden="true"
                                ></i>
                              </span>
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
                              <span className="bg-light p-1 px-2 ms-3">
                                <i
                                  className=" text-zinc-500 fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <h6 className="text-zinc-500 pt-2 ps-2">
                                Delete
                              </h6>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Change Roles</Tooltip>}
                          >
                            <div className="d-flex border-top">
                              <span className=" text-zinc-500 ps-4">
                           
                              <h6 className="text-zinc-500 pt-2 ps-1">Change Roles</h6>
                              </span>
                            </div>
                          </OverlayTrigger>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown></td>
                  </tr>
                </tbody>
       <div>
       <UserEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       </div>         
     
              </Table>
              </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;

