// import { useState, useCallback } from "react";
// import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import LogOutPopOutL from "../components/LogOutPopOutL";
// import PortalPopup from "../components/PortalPopup";
// import ProfileUpdateConfirmationL from "../components/ProfileUpdateConfirmationL";
// import ProfileDeleteL from "../components/ProfileDeleteL";
// import SideMenu from "../components/SideMenu";
// import PortalDrawer from "../components/PortalDrawer";
// import { useNavigate } from "react-router-dom";
// import styles from "./UserProfilePageL.module.css";

// import Footer from "../components/Footer";
// import Property1Default from "../components/Property1Default";
// import Property1Closed from "../components/Property1Closed";

import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import ProfileUpdateConfirmationL from "../components/ProfileUpdateConfirmationL";
import ProfileDeleteL from "../components/ProfileDeleteL";
// import SideMenu from "../components/SideMenu";
// import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfilePageL.module.css";
import UserUpdate from "../components/UserUpdate";

import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";

const UserProfilePageL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const [
    isProfileUpdateConfirmationLPopupOpen,
    setProfileUpdateConfirmationLPopupOpen,
  ] = useState(false);
  const [isProfileDeleteLPopupOpen, setProfileDeleteLPopupOpen] =
    useState(false);
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

  const openProfileUpdateConfirmationLPopup = useCallback(() => {
    setProfileUpdateConfirmationLPopupOpen(true);
  }, []);

  const closeProfileUpdateConfirmationLPopup = useCallback(() => {
    setProfileUpdateConfirmationLPopupOpen(false);
  }, []);

  const openProfileDeleteLPopup = useCallback(() => {
    setProfileDeleteLPopupOpen(true);
  }, []);

  const closeProfileDeleteLPopup = useCallback(() => {
    setProfileDeleteLPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.userProfilePageL}>
      <Footer/>

       <Property1Default
        onFrameButtonClick={onFrameButtonClick}/>

      <Property1Closed
        onFrameContainerClick={onFrameContainer3Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      /> 
        
           <UserUpdate />
        <div className={styles.personalInfoHeading}>
          <div className={styles.personalinfoRectangle} />
          <img className={styles.cloudsIcon} alt="" src="/clouds@2x.png" />
          <div className={styles.personalInformation}>Personal Information</div>
        </div>

        <div className={styles.personalInfoHeading}>
          <div className={styles.personalinfoRectangle} />
          <img className={styles.cloudsIcon} alt="" src="/clouds@2x.png" />
          <div className={styles.personalInformation}>Personal Information</div>
        </div>
      </div>
      
      {isProfileUpdateConfirmationLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileUpdateConfirmationLPopup}
        >
          <ProfileUpdateConfirmationL
            onClose={closeProfileUpdateConfirmationLPopup}
          />
        </PortalPopup>
      )}
      {isProfileDeleteLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileDeleteLPopup}
        >
          <ProfileDeleteL onClose={closeProfileDeleteLPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserProfilePageL;
