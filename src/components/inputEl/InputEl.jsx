import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { activities } from "../../mocks/activitiesMock";

import { useState, useEffect } from "react";

const InputEl = ({ setActivitySearchedArray }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/?q=${searchValue}`);
    setActivitySearchedArray(
      activities.data
        .map((element) => {
          if (element.title.toUpperCase().includes(searchValue.toUpperCase())) {
            return element;
          }
        })
        .filter((element) => element !== undefined)
    );
  };

  const onHandleInput = (e) => {
    setSearchValue(() => e.target.value);
  };

  return (
    <div className={styles.InputEl}>
      <FiSearch className={styles.icon} onClick={onHandleSubmit} />
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={onHandleInput}
          placeholder="Inserisci un'attività"
          required
        />
      </form>
    </div>
  );
};

export default InputEl;
