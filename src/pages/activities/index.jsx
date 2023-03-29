import styles from "../../styles/pages/activity.module.scss";

import ActivityCard from "../../components/activityCard/ActivityCard";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

export default function Activities() {
  const [allActivitiesData, setAllActivitiesData] = useState([]);

  useEffect(() => {
    GET("activities.json").then(({ data }) => setAllActivitiesData(data));
  }, []);

  return (
    <div className={styles.Activities}>
      <h1 className={styles.title}>LE NOSTRE ATTRAZIONI</h1>

      <div className={styles.cardList}>
        {allActivitiesData.map((activity) => (
          <ActivityCard key={activity.uuid} data={activity} />
        ))}
      </div>
    </div>
  );
}