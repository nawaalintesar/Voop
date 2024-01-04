import { useState, useCallback, dispatch, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogOutPopOutL from "../components/LogOutPopOutL";
import DeleteProject from "../components/DeleteProject";
import SideMenu from "../components/SideMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ProjectFrame from "../components/ProjectFrame";
import styles from "./Projects.module.css";
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
import { useProjectsContext } from "../hooks/useProjectsContext.js";
import ProjectPopUPp from "../components/ProjectPopUPp";
import PortalPopup from "../components/PortalPopup";
import React from "react";
const Projects = () => {
  const [isProjectPopUPpOpen, setProjectPopUPpOpen] = useState(false);

  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const [isDeleteProjectOpen, setDeleteProjectOpen] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openLogOutPopOutLPopup1 = useCallback(() => {
    setLogOutPopOutLPopup1Open(true);
  }, []);

  const closeLogOutPopOutLPopup1 = useCallback(() => {
    setLogOutPopOutLPopup1Open(false);
  }, []);

  const openLogOutPopOutLPopup = useCallback(() => {
    setLogOutPopOutLPopupOpen(true);
  }, []);

  const closeLogOutPopOutLPopup = useCallback(() => {
    setLogOutPopOutLPopupOpen(false);
  }, []);

  const openSideMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  const onFrameButtonClick = useCallback((ProjectId) => {
    // Please sync "Code Editor- after login" to the project
    navigate("/CodeEditorAfterLogin", { state: { ProjectId } });
  }, [navigate]);


  const onFrameContainer3Click = useCallback(() => {
    navigate("/Tutorials");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
    navigate("/Projects");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    navigate("/Profile");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openDeleteProject = useCallback(() => {
    setDeleteProjectOpen(true);
  }, []);

  const closeDeleteProject = useCallback(() => {
    setDeleteProjectOpen(false);
  }, []);
  const openProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(true);
  }, []);

  const closeProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(false);
  }, []);
  
  const { projects, dispatch } = useProjectsContext();
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'GET_PROJECTS', payload: json })
      }
    }
    fetchProjects()
  }, [dispatch]);

  return (
    <>
      <div className={styles.Projects}>



        <div className={styles.innerthings}>
          <img
            className={styles.innerthingsChild}
            alt=""
            src="/rectangle-27@2x.png"
          />
        
           <div className={styles.recentProjectProject1Parent}>
          
          {projects && projects.slice(0, 3).map((project, index) => (
            <button style={{ background: 'transparent', border: 'none'}} > <Container onclick={() => onFrameButtonClick(project._id)} key={project._id} project={project} /></button>
          ))}
          

          <div className={styles.addingbox} onClick={openProjectPopUPp }>
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
          <div className={styles.projects}>
            
            {projects && projects.map((project,img, index) => (
              <ProjectFrame 
                onclick={() => onFrameButtonClick(project._id)}
                key={project.id}
                project={project}
                edited5MinAgo={project.updatedAt}
                project1={project.prjName}
                j={project.progLang.slice(0, 1).toUpperCase()}
                showEditMinus={false}
                projectFrameWidth="1099px"
                projectFrameTop="0px"
                projectFrameLeft="0px"
                projectBoxBackground="linear-gradient(139.01deg, #8775df, #7a59b5 93.23%)"
                projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"

              />
           
            ))}

          </div>
          <div className={styles.recentlyViewed}>Recently viewed</div>
          <TextField
            className={styles.searchBar}
            color="secondary"
            name="Search"
            label="Search"
            placeholder="Search"
            sx={{ width: 1089 }}
            variant="filled"
            type="search"
          />
        </div>

        <Footer />
        <Property1Default
          onFrameButtonClick={onFrameButtonClick} />
        <Property1Closed
          onFrameContainerClick={onFrameContainer3Click}
          onFrameIconClick={onFrameIconClick}
          onUsericonContainerClick={onUsericonClick}
          onDashoboardSMContainerClick={onDashoboardSMContainerClick}
        />

      </div>

      {isDeleteProjectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeleteProject}
        >
          <DeleteProject onClose={closeDeleteProject} />
        </PortalPopup>
      )}

    </>
  );
};

export default Projects;
