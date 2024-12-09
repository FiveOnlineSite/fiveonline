import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const UserCreation = () => {
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          User
          <NavLink to="/user-creation/add" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Create User
          </NavLink>
        </h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-center">Email Id</th>
                    <th className="text-center">Password</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td className="text-center">test@gmail.com</td>
                    <td className="text-center">Test</td>
                    <td className="text-center">
                      <NavLink to={`/user-creation/edit`} title="Edit">
                        <i class="las la-pencil-alt"></i>
                      </NavLink>
                    </td>
                    <td className="text-center">
                      <button className="delete-btn">
                        <i class="las la-trash"></i>{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserCreation;
