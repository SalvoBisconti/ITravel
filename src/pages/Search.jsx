import styles from "../styles/pages/search.module.scss";
import { activities } from "../mocks/activitiesMock";
import ActivityCard from "../components/activityCard/ActivityCard";
import InputEl from "../components/inputEl";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [activitySearchedArray, setActivitySearchedArray] = useState([]);
  let query = searchParams.get("q");

  useEffect(() => {
    setActivitySearchedArray(
      activities.data
        .map((element) => {
          if (element.title.toUpperCase().includes(query.toUpperCase())) {
            return element;
          }
        })
        .filter((element) => element !== undefined)
    );
  }, []);

  return (
    <div className={styles.Search}>
      <h1 className={styles.title}>{`Hai cercato ' ${query} ' `}</h1>
      <InputEl
        className={styles.input}
        setActivitySearchedArray={setActivitySearchedArray}
      />

      <div className={styles.cardList}>
        {activitySearchedArray.length > 0 ? (
          activitySearchedArray.map((activity) => (
            <ActivityCard key={activity.uuid} data={activity} />
          ))
        ) : (
          <p className={styles.errorMsg}>
            ... siamo spiacenti, l'attività ricercata non è ancora disponibile
          </p>
        )}
      </div>
    </div>
  );
}
