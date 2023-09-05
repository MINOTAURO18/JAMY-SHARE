import "./App.css";
import React from "react";
import Main from "./views/main/Main";
import Home from "./views/home/Home";
import { BsFillSunFill } from "react-icons/bs";
import { PiMoonFill } from "react-icons/pi";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect } from "react";
import Profile from "./views/profile/Profile";
import Posts from "./views/posts/Posts";
import About from "./views/about/About";
import Nav from "./components/nav/Nav";
import Login from "./views/login/Login";
import Account from "./views/account/Account";

function App() {
  const location = useLocation();
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
      {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/account" ? null : (
        <Nav />
      )}
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
              <CSSTransition key="profile" classNames="fade" timeout={300}>
                <Profile />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/posts"
          element={
            <TransitionGroup>
              <CSSTransition key="post" classNames="fade" timeout={300}>
                <Posts />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={300}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/login"
          element={
            <TransitionGroup>
              <CSSTransition key="login" classNames="fade" timeout={300}>
                <Login />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        <Route
          path="/account"
          element={
            <TransitionGroup>
              <CSSTransition key="account" classNames="fade" timeout={300}>
                <Account />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
