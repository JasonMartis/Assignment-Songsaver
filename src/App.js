import React from "react";
import style from "./style.css";
import SongOverview from "./components/SongOverview";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
