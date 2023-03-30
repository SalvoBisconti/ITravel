import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import Button from "../button";
import MenuList from "../menuList/MenuList";
import { Link } from "react-router-dom";

const Navbar = ({ scroll, openMenu, setOpenMenu }) => {
  const onHandleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={`${styles.Navbar} ${scroll && styles.scrolledNavbar}`}>
      <ul className={styles.list}>
        <li>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </li>
        <li>
          <MenuList listClass={styles.secondList} />
        </li>
        <ul className={styles.thirdList}>
          <li>
            <Button text="Accedi" />
          </li>
          <li>
            <div
              className={`${styles.hamburgerMenu} ${
                openMenu && styles.showMenu
              }`}
              onClick={onHandleMenu}
            >
              <div className={styles.top}> </div>
              <div className={styles.center}> </div>
              <div className={styles.bottom}> </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
