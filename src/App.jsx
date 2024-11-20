import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./componentes/HomePage";
import Career from "./componentes/Career";
import AboutUs from "./componentes/AboutUs";
import SingleJob from "./componentes/SingleJob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/career" element={<Career></Career>}></Route>
      <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
      <Route path="/job/:id" element={<SingleJob></SingleJob>}></Route>
    </Routes>
  );
}

export default App;
