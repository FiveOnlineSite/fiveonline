import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" name="" />
      <div className="sidebar">
        <AdminSidebar />
      </div>

      <div className="main-content">
        <AdminNavbar />
        <main>
          <div className="container">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
