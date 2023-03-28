import styles from "./index.module.scss";
import logo from "../../assets/logo.png";

const Navbar = ({ scroll }) => {
  return (
    <div className={`${styles.Navbar} ${scroll && styles.scrolledNavbar}`}>
      <ul className={styles.list}>
        <li>
          <img src={logo} alt="logo" className={styles.logo} />
        </li>
        <li>
          <ul className={styles.secondList}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </li>
        <li>User</li>
      </ul>
    </div>
  );
};

export default Navbar;
