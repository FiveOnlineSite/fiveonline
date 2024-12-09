import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const Testimonials = () => {
  return (
    <div>
      <AdminLayout>
        <div className="pages-headers ">
          <h2>
            Testimonials
            <NavLink to="/testimonials/add" className="theme-cta">
              <i class="las la-plus-circle"></i>
              Add Testimonial
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
                      <th className="text-center">Company</th>
                      <th className="text-center">Desgination</th>
                      <th className="text-center">Review</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Edit</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td className="text-center">Test</td>
                      <td className="text-center">Test</td>
                      <td className="text-center">Test</td>
                      <td className="text-center">Test</td>
                      <td className="text-center">
                        <NavLink to={`/testimonials/edit`} title="Edit">
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
    </div>
  );
};

export default Testimonials;
