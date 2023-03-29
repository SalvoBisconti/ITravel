import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleOpenActivityetails = () => {
    navigate(`/activities/${data.uuid}`);
  };

  return (
    <div className={styles.ActivityCard} onClick={onHandleOpenActivityetails}>
      <div className={styles.overlay}></div>
      <img
        src={data.cover_image_url}
        alt={data.name}
        className={styles.background}
      />
      <h3 className={styles.title}>{data.title}</h3>
    </div>
  );
};

export default ActivityCard;
