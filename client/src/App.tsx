import "./App.css";
import React from "react";
import Main from "./views/main/Main";
import Home from "./views/home/Home";
import { BsFillSunFill} from 'react-icons/bs';
import { PiMoonFill} from 'react-icons/pi'
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }



  return (
    <main className={darkMode ? 'dark' : 'white'}>
        
        <div className="darkMode" onClick={toggleDarkMode}>{React.createElement(darkMode ? BsFillSunFill : PiMoonFill)}</div>
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
      </Routes>
    </main>
  );
}

export default App;
