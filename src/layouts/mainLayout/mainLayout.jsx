import styles from "./index.module.scss";
import Footer from "../../components/footer";
import HamburgerMenu from "../../components/hamburgerMenu";
import Navbar from "../../components/navbar";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.MainLayout}>
      <Navbar scroll={scroll} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default MainLayout;
