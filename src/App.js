import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import QuoteTable from "./components/QuoteTable/QuoteTable";
import Graph from "./components/Graph/Graph";
import History from "./components/HistoryOperations/HistoryOperations";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/quotes" element={<QuoteTable quotes={[]} />} />
          <Route path="/dashboard" element={<Graph />} />
          <Route path="/trades" element={<History history={[]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
