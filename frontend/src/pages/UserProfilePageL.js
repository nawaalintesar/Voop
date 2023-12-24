import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import ProfileUpdateConfirmationL from "../components/ProfileUpdateConfirmationL";
import ProfileDeleteL from "../components/ProfileDeleteL";
import SideMenu from "../components/SideMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfilePageL.module.css";

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


  // const onFrameContainer2Click = useCallback(() => {
  //   // Please sync "Mytutorials-L" to the project
  // }, []);

  // const onFrameIconClick = useCallback(() => {
  //   navigate("/myprojectsl");
  // }, [navigate]);

  // const onUsericonClick = useCallback(() => {
  //   // Please sync "User Profile Page- L" to the project
  // }, []);

  // const onDashoboardSMContainerClick = useCallback(() => {
  //   // Please sync "Dashboard-L" to the project
  // }, []);

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

        <div className={styles.firstNameGroupParent}>
          <div className={styles.firstNameGroup}>
            <TextField
              className={styles.frame}
              color="secondary"
              name="First Name"
              label="First Name"
              placeholder="First Name"
              sx={{ width: 640 }}
              variant="filled"
              type="text"
            />
            <div className={styles.firstName}>{`First Name `}</div>
          </div>
          <div className={styles.lastNameGroup}>
            <div className={styles.lastName}>Last Name</div>
            <TextField
              className={styles.frame1}
              color="secondary"
              name="Last Name"
              label="Last Name"
              placeholder="Last Name"
              sx={{ width: 640 }}
              variant="filled"
              type="text"
            />
          </div>
          <div className={styles.groupemailAddressGroup}>
            <div className={styles.emailAddress}>{`Email address `}</div>
            <TextField
              className={styles.frame2}
              color="secondary"
              name="Email"
              label="Email"
              placeholder="Email"
              sx={{ width: 640 }}
              variant="filled"
              type="text"
            />
          </div>
          <div className={styles.phoneNumberGroup}>
            <div className={styles.phoneNumber}>Phone Number</div>
            <TextField
              className={styles.frame1}
              color="secondary"
              name="Phone Number"
              label="Phone Number"
              placeholder="Phone Number"
              sx={{ width: 640 }}
              variant="filled"
              type="tel"
            />
          </div>
          <div className={styles.updateButtonGroup}>
            <div
              className={styles.button2}
              onClick={openProfileUpdateConfirmationLPopup}
            >
              <div className={styles.update}>Update</div>
            </div>
          </div>
          <div className={styles.deleteAccountGroup}>
            <div className={styles.doYouWish}>
              Do you wish to delete your account?
            </div>
            <button
              className={styles.clickHere}
              onClick={openProfileDeleteLPopup}
            >
              Click Here
            </button>
          </div>
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
