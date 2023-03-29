import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const MenuList = ({ listClass, func }) => {
  return (
    <ul className={listClass}>
      <li onClick={func}>
        <Link to="/"> Home</Link>
      </li>
      <li onClick={func}>
        <Link to="/about"> Chi siamo</Link>
      </li>
      <li onClick={func}>
        <Link to="/cities"> Città</Link>
      </li>
      <li onClick={func}>
        <Link to="/activities">Attività</Link>
      </li>
    </ul>
  );
};
export default MenuList;
