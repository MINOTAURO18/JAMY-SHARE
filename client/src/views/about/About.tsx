import React from "react";
import styles from "./about.module.css";
import myProfile from "../../assets/alex.jpeg";
import { BiLogoGmail, BiCoffeeTogo } from "react-icons/bi";
import {BsYoutube, BsLinkedin, BsGithub} from 'react-icons/bs'

const urls = 
  {
    linkedin: 'https://www.linkedin.com/in/alexander-mu%C3%B1oz-4959a0255/',
    github: 'https://github.com/MINOTAURO18',
    youtube: 'https://www.youtube.com/channel/UC2KuDBEK0LJ8ZMku3KnrHMw'
  }


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
        <a href={urls.linkedin} target="_blank" className={`${styles.card} ${styles.blue}`}>
          <p className={`${styles.tip}`}>{React.createElement(BsLinkedin,  { size: "25" })}</p>
        </a>

        <a href={urls.github} target="_blank" className={`${styles.card} ${styles.blue}`}>
          <p className={`${styles.tip}`}>{React.createElement(BsGithub,  { size: "25" })}</p>
        </a>

        <a href={urls.youtube} target="_blank" className={`${styles.card} ${styles.blue}`}>
          <p className={`${styles.tip}`}>{React.createElement(BsYoutube,  { size: "25" })}</p>
        </a>
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
