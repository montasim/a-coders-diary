import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import BlogPostDetails from "./Pages/BlogPostDetails/BlogPostDetails";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/Post/CreatePost";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import ResetPassword from "./Pages/Login/ResetPassword";
import CreateTag from "./Pages/Post/CreateTag";
import Profile from "./Pages/User/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BlogPostDetails />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="create-tag" element={<CreateTag />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
