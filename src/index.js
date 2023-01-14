import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";
import Footer from "./components/Footer/Footer";
import "./css";

import About from "./pages/About/About";
import BlogPage from "./pages/Blog/Blog";
import SingleBlogPage from "./pages/Blog/SingleBlog";
import ContactPage from "./pages/Contact/Contact";
import DestinationPage from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import HotelPage from "./pages/Hotel/Hotel";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const test = "";
root.render(
  <React.StrictMode>
    <AppContext.Provider value={test}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
