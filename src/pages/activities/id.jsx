import styles from "./id.module.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { GET } from "../../utils/http";
import { activities } from "../../utils/mocks/activitiesMock";
import ScrollToTop from "../../utils/ScrollToTop";

export default function City() {
  const [singleActivityData, setsingleActivityData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // GET(`activities/${id}.json`).then((data) => setsingleActivityData(data));
    setsingleActivityData(
      activities.data.find((activity) => activity.uuid === id)
    );
  }, []);

  return (
    <div className={styles.Activity}>
      <ScrollToTop />

      {singleActivityData?.title ? (
        <>
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
        </>
      ) : (
        <h1 className={styles.errorMsg}>
          Non è stato possibile trovare l'elemento ricercato...
        </h1>
      )}
    </div>
  );
}
