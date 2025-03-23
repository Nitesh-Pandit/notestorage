import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Welcome from "./Components/Welcome";
import "./css/styles.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import NotesDashboard from "./Components/notesDashboard";
import Note from "./Components/Note";
import Home from "./Components/Home";
function App() {
  const location = useLocation(); // Get the current route
  const hideFooterPaths = ["/contact", "/welcome","/signup","/login",'/notesDashboard',"/notes","/home"];
  const hideHeaderPaths = ['/notesDashboard',"/notes","/home"];
  return (
    <div className="App">
      {/* <Header/> */}
         {!hideHeaderPaths.includes(location.pathname) && <Header />} 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/notesDashboard" element={<NotesDashboard />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

      {/* Show Footer only if NOT on the Contact page */}
      
         {!hideFooterPaths.includes(location.pathname) && <Footer />} 
    </div>
  );
}

export default App;
