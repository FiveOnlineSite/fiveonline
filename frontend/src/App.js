import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Blog from "./admin/Blog/Blog";
import UserCreation from "./admin/UserCreation/UserCreation";
import AddUser from "./admin/UserCreation/AddUser";
import EditUser from "./admin/UserCreation/EditUser";
import BlogCreation from "./admin/BlogCreation/BlogCreation";
import AddBlog from "./admin/BlogCreation/AddBlog";
import EditBlog from "./admin/BlogCreation/EditBlog";
import BlogCategory from "./admin/BlogCategory/BlogCategory";
import AddBlogCategory from "./admin/BlogCategory/AddBlogCategory";
import EditBlogCategory from "./admin/BlogCategory/EditBlogCategory";
import Login from "./admin/Login";
import Testimonials from "./admin/Testimonials/Testimonials";
import AddTestimonial from "./admin/Testimonials/AddTestimonial";
import EditTestimonial from "./admin/Testimonials/EditTestimonial";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/user-creation"} element={<UserCreation />} />
          <Route path={"/user-creation/add"} element={<AddUser />} />
          <Route path={"/user-creation/edit"} element={<EditUser />} />
          <Route path={"/blog-creation"} element={<BlogCreation />} />
          <Route path={"/blog-creation/add"} element={<AddBlog />} />
          <Route path={"/blog-creation/edit"} element={<EditBlog />} />
          <Route path={"/blog-category"} element={<BlogCategory />} />
          <Route path={"/blog-category/add"} element={<AddBlogCategory />} />
          <Route path={"/blog-category/edit"} element={<EditBlogCategory />} />
          <Route path={"/testimonials"} element={<Testimonials />} />
          <Route path={"/testimonials/add"} element={<AddTestimonial />} />
          <Route path={"/testimonials/edit"} element={<EditTestimonial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
