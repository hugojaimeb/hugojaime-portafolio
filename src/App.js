import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MnavBar } from "./components/MNavBar";
import { Banner } from "./components/Banner";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <MnavBar />
      <Banner />
      <Profile />
      <div className="divline" />
      <Projects />
      <div className="divline" />
    </div>
  );
}

export default App;
