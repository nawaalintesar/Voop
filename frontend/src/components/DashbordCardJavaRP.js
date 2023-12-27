import styles from "./DashbordCardJavaRP.module.css";

const DashbordCardJavaRP = () => {
  return (
    <div className={styles.javaRecentprojects}>
      <div className={styles.javaRecentprojectsChild} />
      <img
        className={styles.javaRecentprojectsItem}
        alt=""
        src="/frame-33618@2x.png"
      />
      <div className={styles.javaRecentprojectsInner}>
        <div className={styles.javaWrapper}>
          <div className={styles.java}>Java</div>
        </div>
      </div>
      <div className={styles.animalsLab5}>Animals- Lab 5</div>
      <div className={styles.lastUpdated7}>Last Updated 7 Nov</div>
    </div>
  );
};

export default DashbordCardJavaRP;
