import CityCard from "../cityCard";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { cities } from "../../mocks/citiesMock";

const CitySection = () => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    // GET("cities.json").then((data) =>
    setCityData(cities.filter((city) => city.top));
    // );
  }, []);

  return (
    <div className={styles.CitySection}>
      <h2 className={styles.title}> Città più gettonate</h2>
      <div className={styles.cardList}>
        {cityData.map((city) => (
          <CityCard key={city.id} data={city} />
        ))}
      </div>
    </div>
  );
};

export default CitySection;
