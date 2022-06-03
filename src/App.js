import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import BlogPostDetails from "./Pages/BlogPostDetails/BlogPostDetails";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import ResetPassword from "./Pages/Login/ResetPassword";
import Profile from "./Pages/User/Profile";
import VerifyEmail from "./Pages/Login/VerifyEmail";
import AddTag from "./Pages/Dashboard/Tags/AddTag";
import AddPost from "./Pages/Dashboard/Posts/AddPost";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardSummary from "./Pages/Dashboard/DashboardSummary";
import Admins from "./Pages/Dashboard/Admins/Admins";
import CreateAdmins from "./Pages/Dashboard/Admins/CreateAdmins";
import Users from "./Pages/Dashboard/Users/Users";
import Tags from "./Pages/Dashboard/Tags/Tags";
import Posts from "./Pages/Dashboard/Posts/Posts";
import MyPosts from "./Pages/Dashboard/Posts/MyPosts";
import EditPost from "./Pages/Dashboard/Posts/EditPost";
import EditTag from "./Pages/Dashboard/Tags/EditTag";
import AuthorDetails from "./Pages/AuthorDetails/AuthorDetails";
import MyPortfolio from "./Pages/About/MyPortfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post-details/:_id" element={<BlogPostDetails />} />
        <Route path="author-details/:_id" element={<AuthorDetails />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="posts" element={<Posts />} />
          <Route path="edit-post/:_id" element={<EditPost />} />
          <Route path="tags" element={<Tags />} />
          <Route path="delete-tag" element={<Tags />} />
          <Route path="edit-tag/:_id" element={<EditTag />} />
          <Route path="add-tag" element={<AddTag />} />
          <Route path="users" element={<Users />} />
          <Route path="admins" element={<Admins />} />
          <Route path="create-admin" element={<CreateAdmins />} />
        </Route>

        <Route path="about" element={<MyPortfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
