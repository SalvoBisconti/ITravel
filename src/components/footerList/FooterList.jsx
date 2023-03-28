import styles from "./index.module.scss";

const FooterList = ({ titleItem, firstItem, secondItem, thirdItem }) => {
  return (
    <ul className={styles.FooterList}>
      <li className={styles.title}>{titleItem}</li>
      <li>{firstItem}</li>
      <li>{secondItem}</li>
      <li>{thirdItem}</li>
    </ul>
  );
};

export default FooterList;
