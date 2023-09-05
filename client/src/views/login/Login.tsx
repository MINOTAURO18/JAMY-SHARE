import styles from "./login.module.css";
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

const Login = () => {
  return (
    <section className={styles.login}>
      <main className={`${styles.loginbox}`}>
        <p>Login</p>
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
    </section>
  );
};

export default Login;
