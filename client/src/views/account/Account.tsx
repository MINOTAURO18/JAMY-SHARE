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
          <span className={`${styles.title} text-white`}>Sign up</span>
          <span className={`${styles.subtitle} text-white`}>
            Create a free account with your email.
          </span>
          <div className={`${styles.formcontainer}`}>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Name"
            />
            <input
              type="email"
              className={`${styles.input}`}
              placeholder="Email"
            />
            <input type="password" className={`${styles.input}`} placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div className={`${styles.formsection}`}>
          <p className="text-white">
            Have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Account;
