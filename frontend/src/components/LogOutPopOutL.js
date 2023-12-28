import { useCallback } from "react";
import styles from "./LogOutPopOutL.module.css";

import { useNavigate } from "react-router-dom";

const LogOutPopOutL = ({ onClose }) => {
  const navigate = useNavigate();
  const onExploreButtonContainerClick = useCallback(() => {
    // Please sync " Log In-L" to the project
    navigate("/LoginL");
  }, [navigate]);

  return (
    <div className={styles.logoutpopoutL}>
      <div className={styles.areYouSure}>Are you sure you want to log out?</div>
      <div
        className={styles.explorebutton}
        onClick={onExploreButtonContainerClick}
      >
        <div className={styles.yes}>Yes</div>
      </div>
      <button className={styles.explorebutton1} onClick={onClose}>
        <div className={styles.no}>No</div>
      </button>
      <img
        className={styles.pagecrossIcon}
        alt=""
        src="/pagecross1.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default LogOutPopOutL;
