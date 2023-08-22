import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import './components/style/App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
function App() {
  return (
    
    <NoteState>
      <BrowserRouter>
        <NavBar />
        <Alert />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
     
  );
}

export default App;
