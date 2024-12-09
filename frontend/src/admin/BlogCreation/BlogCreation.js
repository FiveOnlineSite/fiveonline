import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const BlogCreation = () => {
  return (
    <div>
      <AdminLayout>
        <div className="pages-headers ">
          <h2>
            Blog
            <NavLink to="/blog-creation/add" className="theme-cta">
              <i class="las la-plus-circle"></i>
              Add Blog
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
                      <th className="text-center">Banner</th>
                      <th className="text-center">Thumbnail</th>
                      <th className="text-center">Blog Category</th>
                      <th className="text-center">Video</th>
                      <th className="text-center">Edit</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blog1</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">Category1</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <NavLink to={`/blog-creation/edit`} title="Edit">
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

export default BlogCreation;
