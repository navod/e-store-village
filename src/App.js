import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <Navbar />

      <div style={{ flexDirection: "row", display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<CustomerPage />} />
        </Routes>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
