import React from "react";
import styles from "./about.module.css";
import myProfile from "../../assets/alex.jpeg";
import { BiLogoGmail, BiCoffeeTogo } from "react-icons/bi";

const About = () => {
  return (
    <section className={`${styles.about}`}>
      <img src={myProfile} alt="imagen de perfil JAMY" />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore a
        blanditiis eius aperiam sapiente quam fuga enim amet, nobis praesentium
        accusamus ullam assumenda. Corrupti rerum, architecto mollitia nihil
        nesciunt maiores.
      </p>
      <div className={`${styles.cards} `}>
        <div className={`${styles.card} ${styles.red}`}>
          <p className={`${styles.tip}`}>Hover Me</p>
          <p className={`${styles.secondtext}`}>Lorem Ipsum</p>
        </div>

        <div className={`${styles.card} ${styles.red}`}>
          <p className={`${styles.tip}`}>Hover Me</p>
          <p className={`${styles.secondtext}`}>Lorem Ipsum</p>
        </div>

        <div className={`${styles.card} ${styles.red}`}>
          <p className={`${styles.tip}`}>Hover Me</p>
          <p className={`${styles.secondtext}`}>Lorem Ipsum</p>
        </div>
      </div>

      <span className={`${styles.buttons}`}>
        <button>
          <div className={`${styles.svgwrapper1}`}>
            <div className={`${styles.svgwrapper}`}>
              {React.createElement(BiLogoGmail)}
            </div>
          </div>
          <span>Send</span>
        </button>

        <button>
          <div className={`${styles.svgwrapper1}`}>
            <div className={`${styles.svgwrapper}`}>
              {React.createElement(BiCoffeeTogo)}
            </div>
          </div>
          <span>Send</span>
        </button>
      </span>
    </section>
  );
};

export default About;
