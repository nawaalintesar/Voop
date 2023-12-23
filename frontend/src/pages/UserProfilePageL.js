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

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
  }, []);

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

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
  }, []);

  const onFrameIconClick = useCallback(() => {
    navigate("/myprojectsl");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    // Please sync "User Profile Page- L" to the project
  }, []);

  const onDashoboardSMContainerClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
  }, []);

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
        <footer className={styles.footer} id="footer">
          <div className={styles.voopSeeMoreContainer}>
            <p className={styles.voop}>Voop</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.seeMoreLearn}>{`See More, Learn More. `}</p>
          </div>
        </footer>
        <div className={styles.userProfilePageLInner}>
          <div className={styles.frameParent}>
            <button
              className={styles.buttonWrapper}
              id="codeEditorButtonHeader"
              onClick={onFrameButtonClick}
            >
              <div className={styles.button}>
                <div className={styles.codeEditor}>Code Editor</div>
              </div>
            </button>
            <div className={styles.voOp}>
              <span className={styles.voOpTxtContainer}>
                <p className={styles.voop}>VO</p>
                <p className={styles.voop}>&nbsp;</p>
                <p className={styles.voop}>&nbsp;</p>
                <p className={styles.op}>OP</p>
              </span>
            </div>
            <button
              className={styles.button1}
              id="LogOutButton"
              onClick={openLogOutPopOutLPopup1}
            >
              <div className={styles.text} onClick={openLogOutPopOutLPopup}>
                Log Out
              </div>
            </button>
          </div>
        </div>
        <div className={styles.sideMenu}>
          <div className={styles.hamburgericon}>
            <img
              className={styles.fiBrMenuBurgerIcon}
              alt=""
              src="/fibrmenuburger@2x.png"
              onClick={openSideMenu}
            />
          </div>
          <div className={styles.frameGroup}>
            <div
              className={styles.interfaceEssentialbookWrapper}
              onClick={onFrameContainer2Click}
            >
              <img
                className={styles.interfaceEssentialbookIcon}
                alt=""
                src="/interface-essentialbook@2x.png"
              />
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-33643@2x.png"
              onClick={onFrameIconClick}
            />
            <img
              className={styles.usericon}
              alt=""
              src="/usericon.svg"
              onClick={onUsericonClick}
            />
            <div
              className={styles.dashoboardsm}
              onClick={onDashoboardSMContainerClick}
            >
              <img
                className={styles.layoutgrid4Icon}
                alt=""
                src="/layoutgrid4@2x.png"
              />
            </div>
          </div>
        </div>
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
      {isLogOutPopOutLPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogOutPopOutLPopup1}
        >
          <LogOutPopOutL onClose={closeLogOutPopOutLPopup1} />
        </PortalPopup>
      )}
      {isLogOutPopOutLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogOutPopOutLPopup}
        >
          <LogOutPopOutL onClose={closeLogOutPopOutLPopup} />
        </PortalPopup>
      )}
      {isSideMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSideMenu}
        >
          <SideMenu onClose={closeSideMenu} />
        </PortalDrawer>
      )}
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
