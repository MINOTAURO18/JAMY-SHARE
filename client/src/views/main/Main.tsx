import styles from "./main.module.css";
import video from "../../assets/video.mp4";
import Buttons from "../../components/buttons/Buttons";
import logo from '../../assets/logo-jamy.png'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={styles.main}>
        <span className={styles.jamy}>
          <img className="w-9" src={logo} alt="" />
          <h3>JAMY-SHARE</h3>
        </span>
      <div className={`${styles.descrip} flex flex-col justify-center gap-5 px-8 text-white`}>
        <h2>AYER ERA TARDE</h2>
        <p>Comparte contenido relacionado con el mundo deportivo, intercambia conocimientos y disfruta de la pasion por el deporte, Unete a nuestra comunidad y comparte tu amor por los deportes.</p>
        <span className={`${styles.btns} flex gap-5`}>
          <Link to='/home'>
            <Buttons url="#" title="Start" />
          </Link>
          <Link to='/'>
            <Buttons url="#" title="Login" />
          </Link>
        </span>
      </div>
      <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="capa"></div>
    </section>
  );
};

export default Main;
