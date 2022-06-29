import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./component/NavBar.js";
import { Banner }from "./component/Banner";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";
import {Contact } from "./component/Contact";
import {Footer } from "./component/Footer";
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
