import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Error_404 from "./pages/Error_404";
import Profile from "./pages/Profile";
import ChangeProfile from "./pages/ChangeProfile";
import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [userName, setUserName] = useState("Hamza Imran");
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/:userId" element={<Profile />}></Route>
            <Route path="/change-profile" element={<ChangeProfile />}></Route>
            <Route path="*" element={<Error_404 />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
