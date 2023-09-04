import "./App.css";
import React from "react";
import Main from "./views/main/Main";
import Home from "./views/home/Home";
import { BsFillSunFill } from "react-icons/bs";
import { PiMoonFill } from "react-icons/pi";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode ? "dark" : "white"}>
      <div className="darkMode" onClick={toggleDarkMode}>
        {React.createElement(darkMode ? BsFillSunFill : PiMoonFill)}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="main" classNames="fade" timeout={300}>
                <Main />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/home"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={300}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/profile"
          element={
            <TransitionGroup>
              <CSSTransition key="main" classNames="fade" timeout={300}>
                <Main />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/posts"
          element={
            <TransitionGroup>
              <CSSTransition key="main" classNames="fade" timeout={300}>
                <Main />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="main" classNames="fade" timeout={300}>
                <Main />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
