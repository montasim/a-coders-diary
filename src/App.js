import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import BlogPostDetails from "./Pages/BlogPostDetails/BlogPostDetails";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BlogPostDetails />
      <Footer />
    </div>
  );
}

export default App;
