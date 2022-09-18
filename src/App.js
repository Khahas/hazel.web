import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Employees from "./pages/Employees";
import Shifts from "./pages/Shifts";
import EmployeeShifts from "./pages/EmployeesShifts";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="Employees" element={<Employees />} />
        <Route exact path="EmployeeShifts" element={<EmployeeShifts />} />
        <Route exact path="Shifts" element={<Shifts />} />
      </Routes>
    </Router>
  );
}
