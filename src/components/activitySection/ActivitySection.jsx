import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import ActivityCard from "../activityCard/ActivityCard";

import { activities } from "../../utils/mocks/activitiesMock";
// import { GET } from "../../utils/http";
const ActivitySection = () => {
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    // GET("activities.json").then(({ data }) =>
    setActivitiesData(activities.data.filter((activity) => activity.daily));
    // );
  }, []);

  return (
    <div className={styles.ActivitySection}>
      <h1 className={styles.title}>Migliori attrazioni del mese</h1>

      <div className={styles.cardList}>
        {activitiesData.map((activity) => (
          <ActivityCard key={activity.uuid} data={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
