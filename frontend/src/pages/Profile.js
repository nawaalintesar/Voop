
// import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import ProfileUpdateConfirmationL from "../components/ProfileUpdateConfirmationL";
import ProfileDeleteL from "../components/ProfileDeleteL";
// import SideMenu from "../components/SideMenu";
// import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import UserUpdate from "../components/UserUpdate";


import { useEffect, dispatch, useState, useCallback } from "react";
//import { useProfilesContext } from "../hooks/useProfilesContext.js";
import { useProfilesContext } from "../hooks/useProfilesContext.js"

import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";

const Profile = () => {
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

  const { user, dispatch } = useProfilesContext();

    useEffect(() => {
      const fetchProfile = async () => {
        const response = await fetch('/api/profile/')
        const json = await response.json()

        if (response.ok) {
          dispatch({ type: 'GET_PROFILE', payload: json })
        }
      }
      fetchProfile()
    }, [dispatch]);

  return (
    <>
      <div className={styles.Profile}>

        {user && (
          <UserUpdate
            key={user._id}
            profile={user}
          />
        )}


        <div className={styles.personalInfoHeading}>
          <div className={styles.personalinfoRectangle} />
          <img className={styles.cloudsIcon} alt="" src="/clouds@2x.png" />
          <div className={styles.personalInformation}>Personal Information</div>
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

export default Profile;