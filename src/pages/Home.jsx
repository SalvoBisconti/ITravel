import styles from "../styles/pages/home.module.scss";
import ActivitySection from "../components/activitySection";
import CitySection from "../components/citySection";
import Hero from "../components/hero";
import InputEl from "../components/inputEl";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.Home}>
      <Hero />
      <InputEl searchValue={searchValue} setSearchValue={setSearchValue} />
      <CitySection />
      <ActivitySection />
    </div>
  );
}
