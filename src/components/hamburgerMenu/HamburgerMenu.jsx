import styles from "./index.module.scss";
import MenuList from "../menuList/MenuList";

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
  const onHandleCloseMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className={`${styles.HamburgerMenu} ${openMenu && styles.showMenu} `}>
      <div className={styles.content}>
        <MenuList listClass={styles.list} func={onHandleCloseMenu} />
      </div>
      <div className={styles.overlay} onClick={onHandleCloseMenu}></div>
    </div>
  );
};

export default HamburgerMenu;
