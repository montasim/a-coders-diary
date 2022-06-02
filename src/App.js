import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
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
import CreateAdmin from "./Pages/Dashboard/Admins/CreateAdmin";
import Users from "./Pages/Dashboard/Users/Users";
import Tags from "./Pages/Dashboard/Tags/Tags";
import Posts from "./Pages/Dashboard/Posts/Posts";
import MyPosts from "./Pages/Dashboard/Posts/MyPosts";
import EditPost from "./Pages/Dashboard/Posts/EditPost";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BlogPostDetails />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:_id" element={<EditPost />} />
          <Route path="tags" element={<Tags />} />
          <Route path="add-tag" element={<AddTag />} />
          <Route path="users" element={<Users />} />
          <Route path="admins" element={<Admins />} />
          <Route path="create-admin" element={<CreateAdmin />} />
        </Route>

        <Route path="about" element={<About />} />
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
