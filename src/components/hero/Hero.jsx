import "./index.module.scss";
import styles from "./index.module.scss";
import heroImage from "../../assets/bg.webp";
const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.overlay}></div>
      <img src={heroImage} alt="hero image" className={styles.image} />
      <div className={styles.text}>
        <h1>Viaggia e buttati a capofitto in nuove ed emozionanti avventure</h1>
      </div>
    </div>
  );
};
export default Hero;
