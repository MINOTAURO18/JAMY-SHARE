import "./App.css";
import Main from "./views/main/Main";
import Home from "./views/home/Home";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={300}>
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
