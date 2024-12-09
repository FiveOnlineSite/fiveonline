import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <AdminLayout>
        <div className="pages-headers ">
          <h2>
            Blog
            <NavLink to="/user-creation/add" className="theme-cta">
              <i class="las la-plus-circle"></i>
              Create Blog
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
                      <th>Title</th>
                      <th className="text-center">Meta Title</th>
                      <th className="text-center">Password</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Blog;
