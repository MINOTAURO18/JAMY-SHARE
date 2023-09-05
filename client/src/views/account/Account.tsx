import styles from "./account.module.css";
import video from "../../assets/video.mp4";

const Account = () => {
  return (
    <section className={`${styles.account}`}>
      <article>
        <video muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.capa}></div>
      </article>
      <div className={`${styles.formbox}`}>
        <form className={`${styles.form}`}>
          <span className={`${styles.title}`}>Sign up</span>
          <span className={`${styles.subtitle}`}>
            Create a free account with your email.
          </span>
          <div className={`${styles.formcontainer}`}>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Full Name"
            />
            <input
              type="email"
              className={`${styles.input}`}
              placeholder="Email"
            />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div className={`${styles.formsection}`}>
          <p>
            Have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Account;
