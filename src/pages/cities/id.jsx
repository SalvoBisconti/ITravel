import styles from "./id.module.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";

export default function City() {
  const [singleCityData, setSingleCityData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GET(`cities/${id}.json`).then((data) => setSingleCityData(data));
  }, []);

  return (
    <div className={styles.City}>
      <div className={styles.hero}>
        <img
          src={singleCityData.cover_image_url}
          alt={singleCityData.name}
          className={styles.background}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.title}> {singleCityData.name}</h1>
      </div>
      <div className={styles.content}>
        <h2> {singleCityData.meta_title}</h2>
        <p>{singleCityData.meta_description}</p>
      </div>
    </div>
  );
}
