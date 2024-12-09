import React from "react";
import AdminLayout from "../../components/AdminLayout";

const AddUser = () => {
  return (
    <div>
      <AdminLayout>
        <div className="theme-form-header">
          <h2>Add User</h2>
        </div>
        <div className="form-white-bg">
          <form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Name</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Email ID</label>
                  <input type="email" name="subtitle" required />
                  {/* <img className="form-profile" src="src/img/user-icon-img.png" /> */}
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Password</label>
                  <input type="password" name="metaTitle" required />
                </div>
              </div>

              <div className="col-12">
                <div className="theme-form">
                  {/* <input type="button" value="Save" onClick={handleSubmit}/> */}
                  <button type="submit">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AddUser;
