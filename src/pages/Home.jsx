import styles from "../styles/pages/home.module.scss";
import CitySection from "../components/citySection";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navBar";

// import { useState, useEffect } from "react";

export default function Home() {
  // const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 50);
  //   });
  // }, []);

  return (
    <div className={styles.Home}>
      {/* <Navbar scroll={scroll} /> */}
      <Hero />
      <CitySection />
      {/* <Footer /> */}
    </div>
  );
}
