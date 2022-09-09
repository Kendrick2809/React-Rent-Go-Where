import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/partials/SiteHeader";
import Sidebar from "./components/partials/Sidebar";
import PropertyGrid from "./components/property/PropertyGrid";
import PropertyCard from "./components/property/PropertyCard";
import Homepage from "./components/homepage-container/Homepage";

import { Button } from "antd";
import { Pagination } from "antd";

import "./antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;