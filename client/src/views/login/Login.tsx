import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./login.module.css";
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

const Login = () => {
  return (
    <section className={styles.login}>
      <main className={`${styles.loginbox}`}>
        <form>
          <div className={`${styles.userbox}`}>
            <input name="" type="text" />
            <label>Email</label>
          </div>
          <div className={`${styles.userbox}`}>
            <input name="" type="password" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="" className={`${styles.a2}`}>
            Sign up!
          </a>
        </p>
      </main>
      <NavLink className={styles.back} to='/home'>{React.createElement(BsFillArrowLeftSquareFill)}</NavLink>
    </section>
  );
};

export default Login;
