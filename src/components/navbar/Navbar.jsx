import styles from "./index.module.scss";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = ({ scroll }) => {
  return (
    <div className={`${styles.Navbar} ${scroll && styles.scrolledNavbar}`}>
      <ul className={styles.list}>
        <li>
          <img src={logo} alt="logo" className={styles.logo} />
        </li>
        <li>
          <ul className={styles.secondList}>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> Chi siamo</Link>
            </li>
            <li>
              <Link to="/cities"> Città</Link>
            </li>
            <li>
              <Link to="/activities">Attività</Link>
            </li>
          </ul>
        </li>
        <li>Utente</li>
      </ul>
    </div>
  );
};

export default Navbar;
