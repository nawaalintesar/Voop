import { useCallback } from "react";
import styles from "./ProfileDeleteL.module.css";

const ProfileDeleteL = ({ onClose }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Sign in-DL" to the project
  }, []);

  const onExploreButtonClick = useCallback(() => {
    // Please sync "Sign in-DL" to the project
  }, []);

  return (
    <div className={styles.profiledeleteL}>
      <div className={styles.profiledeleteLChild} />
      <div className={styles.areYouSureContainer}>
        <span className={styles.areYouSureContainer1}>
          <p className={styles.areYouSure}>
            Are you sure you want to delete your account?
          </p>
          <p className={styles.areYouSure}>
            Your progress will not be saved and this action cannot be reversed.
          </p>
        </span>
      </div>
      <div className={styles.deleteAccount}>Delete Account?</div>
      <img
        className={styles.pagecrossIcon}
        alt=""
        src="/pagecross.svg"
        onClick={onClose}
      />
      <div
        className={styles.explorebuttonWrapper}
        onClick={onFrameContainerClick}
      >
        <button className={styles.explorebutton} onClick={onExploreButtonClick}>
          <div className={styles.yes}>Yes</div>
        </button>
      </div>
      <button className={styles.explorebutton1} onClick={onClose}>
        <div className={styles.yes}>No</div>
      </button>
    </div>
  );
};

export default ProfileDeleteL;
