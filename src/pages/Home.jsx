import styles from "../styles/pages/home.module.scss";
import ActivitySection from "../components/activitySection";
import CitySection from "../components/citySection";
import Hero from "../components/hero";
import InputEl from "../components/inputEl";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Hero />
      <InputEl />
      <CitySection />
      <ActivitySection />
    </div>
  );
}
