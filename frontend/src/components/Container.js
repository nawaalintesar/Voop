import { useState, useCallback } from "react";

import styles from "../pages/Projects.module.css";

const Container = ({ project }) => {

  

  return (
    <>
            <div className={styles.recentProjectProject1}>
            <div className={styles.recentProjectProject1Child} />
            <div className={styles.p1}>{project.prjName.slice(0,1).toUpperCase()+ "1"}</div>
        </div>

    </>
  );
};

export default Container;
