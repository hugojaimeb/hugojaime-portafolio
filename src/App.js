import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MnavBar } from "./components/MNavBar";
import { Banner } from "./components/Banner";
import { Profile } from "./components/Profile";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/Contact";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hugo Jaime</title>
        <link rel="canonical" href="https://hugojaime-portafolio.web.app/" />
        <meta name="description" content="Hugo Jaime Developer" />
      </Helmet>
      <MnavBar />
      <Banner />
      <Profile />
      <div className="divline" />
      <Projects />
      <Contact />
      <Footer />
      <div className="divline" />
    </div>
  );
}

export default App;
