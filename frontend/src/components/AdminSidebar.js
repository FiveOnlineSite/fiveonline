import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar-brand">
        <NavLink to="/">
          <img
            className="admin-logo"
            src="/images/black-logo.png"
            alt="Logo"
            loading="lazy"
          />
        </NavLink>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="las la-blog blog-icon"></span>
                  <span>Blog</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <NavLink to="/blog-creation">
                    <span className="las la-blog blog-icon"></span>
                    <span>Create Blog</span>
                  </NavLink>

                  <NavLink to="/blog-category">
                    <span className="las la-blog blog-icon"></span>
                    <span> Blog Category</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/user-creation" title="Gallery">
              <span className="las la-user"></span> <span>User Creation</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/testimonials" title="Testimonials">
              <span className="las la-star"></span> <span>Testimonials</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
