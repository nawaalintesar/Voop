import { useState, useCallback } from "react";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import RecentProjectsContainer from "../components/RecentProjectsContainer";
import ContinueLearningContainer from "../components/ContinueLearningContainer";
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
import styles from "./DashboardL.module.css";

const DashboardL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
    navigate("/CodeEditorAfterLogin");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
    navigate("/myprojectsl");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboardl");
  }, [navigate]);

  return (
    <div className={styles.dashboardL}>
      <div className={styles.dashbaordwelcParent}>
        <div className={styles.dashbaordwelc}>
          <img
            className={styles.dashbaordwelcChild}
            alt=""
            src="/group-33561@2x.png"
          />
          <div className={styles.welcomeToYour}>Welcome To Your Dashboard</div>
        </div>
        <RecentProjectsContainer />
        <ContinueLearningContainer />
      </div>
      <Footer/>
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

export default DashboardL;