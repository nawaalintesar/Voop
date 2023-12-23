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
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
  }, []);

  const onUsericonClick = useCallback(() => {
    // Please sync "User Profile Page-L" to the project
  }, []);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/");
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
      <Footer
        footerHeight="133px"
        footerMaxWidth="unset"
        footerPosition="absolute"
        footerTop="942px"
        footerLeft="0px"
        footerMaxHeight="100%"
        footerJustifyContent="stretch"
      />
      <Property1Default
        buttonHeaderText="codeEditorButtonHeader"
        property1DefaultAlignContent="stretch"
        property1DefaultJustifyContent="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="1px"
        property1DefaultLeft="62px"
        property1DefaultOverflow="hidden"
        property1DefaultHeight="81px"
        frameDivHeight="45.68%"
        frameDivTop="27.16%"
        frameDivBottom="27.16%"
        textCursor="pointer"
        onFrameButtonClick={onFrameButtonClick}
      />
      <Property1Closed
        dimensionCode="/layoutgrid4@2x.png"
        property1ClosedHeight="942px"
        property1ClosedPosition="absolute"
        property1ClosedTop="1px"
        property1ClosedLeft="0px"
        onFrameContainerClick={onFrameContainer3Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      />
    </div>
  );
};

export default DashboardL;
