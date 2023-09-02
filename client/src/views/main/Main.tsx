import styles from "./main.module.css";
import video from "../../assets/video.mp4";
import Buttons from "../../components/buttons/Buttons";

const Main = () => {
  return (
    <section className={styles.main}>
        <span className={styles.jamy}>JAMY-SHARE</span>
      <div className={`${styles.descrip} flex flex-col justify-center gap-5 px-6 text-white`}>
        <h2>AYER ERA TARDE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, pariatur impedit quam dignissimos harum necessitatibus tenetur sint animi, exercitationem, quidem ad itaque alias dolorum. Atque repudiandae facere qui fuga nisi?</p>
        <span className="flex gap-5">
            <Buttons url="#" title="Login" />
            <Buttons url="#" title="Start" />
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
