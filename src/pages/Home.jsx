import styles from "../styles/pages/home.module.scss";
import CitySection from "../components/citySection";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Hero />
      <CitySection />
    </div>
  );
}
