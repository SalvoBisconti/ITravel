import styles from "./index.module.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={styles.MainLayout}>
      <Navbar scroll={scroll} />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default MainLayout;
