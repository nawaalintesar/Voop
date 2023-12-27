import { useMemo } from "react";
import styles from "./ProjectFrame.module.css";

const ProjectFrame = ({
  edited5MinAgo,
  project1,
  editMinus,
  j,
  showEditMinus,
  projectFrameWidth,
  projectFramePosition,
  projectFrameTop,
  projectFrameLeft,
  projectBoxBackground,
  projectBoxBoxShadow,
  editMinusObjectFit,
}) => {
  const projectFrameStyle = useMemo(() => {
    return {
      width: projectFrameWidth,
      position: projectFramePosition,
      top: projectFrameTop,
      left: projectFrameLeft,
    };
  }, [
    projectFrameWidth,
    projectFramePosition,
    projectFrameTop,
    projectFrameLeft,
  ]);

  const projectBoxStyle = useMemo(() => {
    return {
      background: projectBoxBackground,
      boxShadow: projectBoxBoxShadow,
    };
  }, [projectBoxBackground, projectBoxBoxShadow]);

  const editMinusStyle = useMemo(() => {
    return {
      objectFit: editMinusObjectFit,
    };
  }, [editMinusObjectFit]);

  return (
    <div className={styles.projectframe} style={projectFrameStyle}>
      <div className={styles.edited5Min}>{edited5MinAgo}</div>
      <div className={styles.project1}>{project1}</div>
      <div className={styles.projectbox} style={projectBoxStyle} />
      {showEditMinus && (
        <img
          className={styles.editMinus}
          alt=""
          src={editMinus}
          style={editMinusStyle}
        />
      )}
      <div className={styles.j}>{j}</div>
    </div>
  );
};

export default ProjectFrame;
