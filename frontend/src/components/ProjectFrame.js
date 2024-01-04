import { useMemo } from "react";
import styles from "./ProjectFrame.module.css";
import { useState, useCallback, dispatch, useEffect } from "react";

// Assuming the path to ProjectFrame.module.js is correct
// import _default from function Projects({openDeleteProject})
// Use the imported function in your code
// ...

import { useProjectsContext } from "../hooks/useProjectsContext.js";
import DeleteProject from "../components/DeleteProject";

import PortalPopup from "../components/PortalPopup";
import React from "react";

const ProjectFrame = ({
  project,
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
  onclick
}) => {
  const [isDeleteProjectOpen, setDeleteProjectOpen] = useState(false);

const openDeleteProject = useCallback(() => {
  setDeleteProjectOpen(true);
}, []);
const closeDeleteProject = useCallback(() => {
  setDeleteProjectOpen(false);
}, []);

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
  }, [editMinusObjectFit="/edit--minus@2x.png",]);

  console.log("IDD",project._id);
  
  return (
    <>
    <div className={styles.projectframe} style={projectFrameStyle} >
      <div onClick={onclick}>
      <div className={styles.edited5Min}>{edited5MinAgo}</div>
      <div className={styles.project1}  onClick={onclick}>{project1}</div>
    
      <div className={styles.projectbox} style={projectBoxStyle} onClick={onclick}></div>
      </div>
      
{!showEditMinus && (
         <img
          className={styles.editMinus}
          alt=""
          src={"/edit--minus@2x.png"}
          style={editMinusStyle}
          onClick={() => openDeleteProject(project._id)}
        />
      )}



      <div className={styles.j}>{j}</div>
    </div>
        {isDeleteProjectOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeDeleteProject}
          >
            <DeleteProject projectID={project._id} onClose={closeDeleteProject} />
          </PortalPopup>
        )}
    </>
  );
};

export default ProjectFrame;
