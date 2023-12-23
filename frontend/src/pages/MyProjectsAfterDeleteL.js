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

const MyProjectsAfterDeleteL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
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

  const onUsericonClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
    navigate("Dashboard-L ");
  }, []);

  return (
    <>
      <div className={styles.myprojectsafterdeleteL}>
        <footer className={styles.footer} id="footer">
          <div className={styles.voopSeeMoreContainer}>
            <p className={styles.voop}>Voop</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.seeMoreLearn}>{`See More, Learn More. `}</p>
          </div>
        </footer>
        <div className={styles.myprojectsafterdeleteLInner}>
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
    </>
  );
};

export default MyProjectsAfterDeleteL;
