import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <header>
      <h2>
        <label htmlFor="nav-toggle">
          <span>
            <i class="lni lni-menu-hamburger-1 "></i>
          </span>
        </label>
      </h2>
      <div className="user-wrapper dropdown">
        <div className="dropbtn">
          {/* <img
            width={"30px"}
            height={"30px"}
            src="/images/profile.png"
            alt=""
          /> */}
          {/* <img src="src/img/user-icon-img.png" width="40px" height="40px" /> */}
          <small>Admin</small>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
