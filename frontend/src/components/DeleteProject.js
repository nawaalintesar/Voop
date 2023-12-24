import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeleteProject.module.css";

const DeleteProject = ({ onClose }) => {
  const navigate = useNavigate();

  const onExploreButtonContainerClick = useCallback(() => {
    navigate("/myprojectsafterdeletel");
  }, [navigate]);

  return (
    <div className={styles.deleteProject}>
      <div className={styles.deleteProjectL}>
        <div className={styles.areYouSure}>
          Are you sure you want to Delete project?
        </div>
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
          src="/pagecross.svg"
          onClick={onClose}
        />
        <div className={styles.thisActionCannot}>
          This action cannot be reversed.
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
