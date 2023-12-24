import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import SideMenu from "../components/SideMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import FormContainer2 from "../components/FormContainer2";
import styles from "./MyProjectsAfterDeleteL.module.css";
//import LogOutPopOutL from "../components/LogOutPopOutL";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";

import RecentProjectsContainer from "../components/RecentProjectsContainer";
import ContinueLearningContainer from "../components/ContinueLearningContainer";
import Footer from "../components/Footer";


const MyProjectsAfterDeleteL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const navigate = useNavigate();

  /*const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
  }, []);*/

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

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
  }, []);

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

  /*const onFrameContainer2Click = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);*/

  /*const onUsericonClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/myprojectsl");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/DashboardL");
  }, [navigate]);

 const onFrameContainer2Click = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
    navigate("/mytutorialsl");
  }, [navigate]);*/

  /*const onDashoboardSMContainerClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
    navigate("/");
  }, []);*/

  return (
    <>
      <div className={styles.myprojectsafterdeleteL}>
        
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
        <div className={styles.innerthings}>
          <img
            className={styles.innerthingsChild}
            alt=""
            src="/rectangle-27@2x.png"
          />
          <Container />
          <FormContainer2 />
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
      </div>
    </>
  );
};

export default MyProjectsAfterDeleteL;
