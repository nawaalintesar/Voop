import styles from "./DashbordCardJavaRP.module.css";
import { useMemo } from "react";
const DashbordCardJavaRP = ({project, index}) => {
  
  return (
    <div className={styles.javaRecentprojects} style={{ left: `${(index % 3) * 350}px` }}>
      <div className={styles.javaRecentprojectsChild} />
      <img
        className={styles.javaRecentprojectsItem}
        alt=""
        src="/frame-33618@2x.png"
      />
      <div className={styles.javaRecentprojectsInner} >
        <div className={styles.javaWrapper}>
          <div className={styles.java}>{project.progLang}</div>
        </div>
      </div>
      <div className={styles.animalsLab5}>{project.prjName}</div>
      <div className={styles.lastUpdated7}>Last Updated {project.updatedAt}</div>
    </div>
  );
};

export default DashbordCardJavaRP;
