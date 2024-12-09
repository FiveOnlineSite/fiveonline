import React from "react";
import AdminLayout from "../../components/AdminLayout";

const AddTestimonial = () => {
  return (
    <div>
      <AdminLayout>
        <div className="theme-form-header">
          <h2>Add Testimonial</h2>
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
                  <label>Company</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Desgination</label>
                  <input type="text" name="title" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Review</label>
                  <textarea name="title" required rows="4"></textarea>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Image</label>
                  <input type="file" name="title" required />
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

export default AddTestimonial;
