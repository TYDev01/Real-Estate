// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Rent } from "./pages/Rent";
import { Lease } from "./pages/Lease";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Rent" element={<Rent />} />
          <Route path="/Lease" element={<Lease />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
