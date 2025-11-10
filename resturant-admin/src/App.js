import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Home from "./pages/Home/home";
import About from "./pages/About Us/about";
import Settings from "./pages/Settings/settings";
import General from "./pages/Settings/General/general";
import AdminLogin from "./components/AdminLogin/admin";
import './scss/style.scss';

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/configuration" element={<General />} />
            <Route path="/" element={<AdminLogin />} />

            {/* Add other routes: Help, Settings, etc. */}
          </Routes>
        </div>
      {/* <AdminLogin /> */}
      </div>
    </>
  );
}

export default App;
