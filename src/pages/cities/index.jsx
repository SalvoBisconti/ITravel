import styles from "../../styles/pages/cities.module.scss";
import CityCard from "../../components/cityCard";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

export default function Cities() {
  const [allCitiesData, setAllCitiesData] = useState([]);

  useEffect(() => {
    GET("cities.json").then((data) => setAllCitiesData(data));
  }, []);

  return (
    <div className={styles.Cities}>
      <h1 className={styles.title}>TUTTE LE CITTA'</h1>

      <div className={styles.cardList}>
        {allCitiesData.map((city) => (
          <CityCard key={city.id} data={city} />
        ))}
      </div>
    </div>
  );
}
