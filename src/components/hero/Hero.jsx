import "./index.module.scss";
import styles from "./index.module.scss";
import heroImage from "../../assets/bg.webp";
import Button from "../button";
const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.overlay}></div>
      <img src={heroImage} alt="hero image" className={styles.image} />
      <div className={styles.content}>
        <h1 className={styles.text}>
          Viaggia e buttati a capofitto in nuove ed emozionanti avventure
        </h1>
        <Button text="Scopri di più" className={styles.button} />
      </div>
    </div>
  );
};
export default Hero;
