import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import About from "./pages/About";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Portfolio from "./pages/Portfolio";
import Form from "./contact/form.tsx";


//using react router to navigate to different js files
const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Shop" element={<Home />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
