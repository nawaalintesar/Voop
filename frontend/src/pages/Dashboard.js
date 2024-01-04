import { useState, useCallback, useEffect } from "react";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import ProjectPopUPp from "../components/ProjectPopUPp";
import { useNavigate } from "react-router-dom";
import ContinueLearningContainer from "../components/ContinueLearningContainer";
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
import styles from "./Dashboard.module.css";
import DashbordCardJavaRP from "../components/DashbordCardJavaRP";

import FilteredFormCard from "../components/FilteredFormCard";

import { useProjectsContext } from "../hooks/useProjectsContext.js";
const Dashboard = () => {
  const [isProjectPopUPpOpen, setProjectPopUPpOpen] = useState(false);
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] = useState(false);
  const navigate = useNavigate();
  const { projects, dispatch } = useProjectsContext();

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

  const RecentProjectsContainer = () => {
    const [isProjectPopUPpOpen, setProjectPopUPpOpen] = useState(false);
  }
  const openProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(true);
  }, []);

  const closeProjectPopUPp = useCallback(() => {
    setProjectPopUPpOpen(false);
  }, []);

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
    <div className={styles.dashboard}>
      <div className={styles.dashbaordwelcParent}>
        <div className={styles.dashbaordwelc}>
          <img
            className={styles.dashbaordwelcChild}
            alt=""
            src="/group-33561@2x.png"
          />
          <div className={styles.welcomeToYour}>Welcome To Your Dashboard</div>
        </div>
        <>
          <div className={styles.recentprojects}>
            <div className={styles.recentProjects}>Recent Projects</div>
            {projects && projects.slice(0, 3).map((project, index) => (
              <DashbordCardJavaRP 
              key={project.id} 
              project={project} 
              index= {index}
              />
            ))}

              <buttton onClick={openProjectPopUPp}>
              <div className={styles.newproject}>
                <div className={styles.iconParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/icon@2x.png"
                    />
                  <div className={styles.newProject}>New Project</div>
                </div>
                </div >
              </buttton>

            
          </div>

          <div className={styles.continueLearning}>Continue learning</div>
          <div className={styles.continueLearning} styles={{ marginleft: '20px' }}> <FilteredFormCard />  </div>

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


      </div>
      <Footer />
      <Property1Default
        onFrameButtonClick={onFrameButtonClick}
      />
      <Property1Closed
        onFrameContainerClick={onFrameContainer3Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick} />
    </div>
  );
};

export default Dashboard;
