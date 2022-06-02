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
import CreateTag from "./Pages/Dashboard/Tags/CreateTag";
import CreatePost from "./Pages/Dashboard/Posts/CreatePost";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BlogPostDetails />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-tag" element={<CreateTag />} />
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
