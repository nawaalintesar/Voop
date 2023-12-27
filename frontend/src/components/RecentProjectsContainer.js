import { useState, useCallback } from "react";
import ProjectPopUPp from "./ProjectPopUPp";
import PortalPopup from "./PortalPopup";
import DashbordCardJavaRP from "./DashbordCardJavaRP";
import styles from "./RecentProjectsContainer.module.css";

const RecentProjectsContainer = () => {
  const [isProjectPopUPpOpen, setProjectPopUPpOpen] = useState(false);

  const openProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(true);
  }, []);

  const closeProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recentprojects}>
        <div className={styles.recentProjects}>Recent Projects</div>
        <DashbordCardJavaRP />
        <div className={styles.pythonRecentprojects}>
          <div className={styles.pythonRecentprojectsChild} />
          <img
            className={styles.pythonRecentprojectsItem}
            alt=""
            src="/frame-33619@2x.png"
          />
          <div className={styles.pythonWrapper}>
            <div className={styles.python}>Python</div>
          </div>
          <div className={styles.shapesProj}>Shapes proj</div>
          <div className={styles.lastUpdated7}>Last Updated 7 Nov</div>
        </div>
        <div className={styles.newproject}>
          <div className={styles.iconParent}>
            <img
              className={styles.icon}
              alt=""
              src="/icon@2x.png"
              onClick={openProjectPopUPp}
            />
            <div className={styles.newProject}>New Project</div>
          </div>
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

export default RecentProjectsContainer;
