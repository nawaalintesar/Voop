import { useState, useCallback } from "react";
import ProjectPopUPp from "./ProjectPopUPp";
import PortalPopup from "./PortalPopup";
import styles from "./Container.module.css";

const Container = () => {
  const [isProjectPopUPpOpen, setProjectPopUPpOpen] = useState(false);

  const openProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(true);
  }, []);

  const closeProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recentProjectProject1Parent}>
        <div className={styles.recentProjectProject1}>
          <div className={styles.recentProjectProject1Child} />
          <div className={styles.p1}>P1</div>
        </div>
        <div className={styles.recentProjectProject2}>
          <div className={styles.recentProjectProject2Child} />
          <div className={styles.p2}>P2</div>
        </div>
        <div className={styles.recentProjectProject3}>
          <div className={styles.recentProjectProject3Child} />
          <div className={styles.p3}>P3</div>
        </div>
        <div className={styles.addingbox} onClick={openProjectPopUPp}>
          <div className={styles.addingboxChild} />
          <button className={styles.editPlus} id="PlusButton">
            <img className={styles.coolicon} alt="" src="/coolicon@2x.png" />
          </button>
        </div>
      </div>
      {isProjectPopUPpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProjectPopUPp}
        >
          <ProjectPopUPp onClose={closeProjectPopUPp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Container;
