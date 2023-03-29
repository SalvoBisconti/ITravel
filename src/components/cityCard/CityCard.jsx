import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const CityCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleOpenItemDetails = () => {
    navigate(`/cities/${data.id}`);
  };

  return (
    <div className={styles.CityCard} onClick={onHandleOpenItemDetails}>
      <div className={styles.overlay}></div>
      <img
        src={data.cover_image_url}
        alt={data.name}
        className={styles.background}
      />
      <h3 className={styles.title}>{data.name}</h3>
    </div>
  );
};

export default CityCard;
