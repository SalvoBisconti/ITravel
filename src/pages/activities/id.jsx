import styles from "./id.module.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";

export default function City() {
  const [singleActivityData, setsingleActivityData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GET(`activities/${id}.json`).then((data) => setsingleActivityData(data));
  }, []);

  return (
    <div className={styles.Activity}>
      <div className={styles.image}>
        <img
          src={singleActivityData.cover_image_url}
          alt={singleActivityData.uuid}
          className={styles.background}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.title}> {singleActivityData.name}</h1>
      </div>
      <div className={styles.content}>
        <h2> {singleActivityData.title}</h2>
        <p>{singleActivityData.description}</p>
      </div>
    </div>
  );
}
