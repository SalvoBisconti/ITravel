import styles from "./index.module.scss";
import FooterList from "../footerList";
import logo from "../../assets/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.listSection}>
        <FooterList
          titleItem={"Company"}
          firstItem={"About"}
          secondItem={"Carrers"}
          thirdItem={"Mobile"}
        />
        <FooterList
          titleItem={"Contact"}
          firstItem={"Help"}
          secondItem={"Press"}
          thirdItem={"Affiliates"}
        />
        <FooterList
          titleItem={"More"}
          firstItem={"Airline"}
          secondItem={"Business"}
          thirdItem={"Loa fare tips"}
        />
      </div>
      <div className={styles.iconsSection}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.socialLogo}>
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
};

export default Footer;
