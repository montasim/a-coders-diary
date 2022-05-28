import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BlogPostDetails />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
