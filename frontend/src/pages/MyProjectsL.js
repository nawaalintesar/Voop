import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import DeleteProject from "../components/DeleteProject";
import SideMenu from "../components/SideMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ProjectFrame from "../components/ProjectFrame";
import styles from "./MyProjectsL.module.css";

const MyProjectsL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const [isDeleteProjectOpen, setDeleteProjectOpen] = useState(false);
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
  }, []);

  const openDeleteProject = useCallback(() => {
    setDeleteProjectOpen(true);
  }, []);

  const closeDeleteProject = useCallback(() => {
    setDeleteProjectOpen(false);
  }, []);

  return (
    <>
      <div className={styles.myprojectsL}>
        <footer className={styles.footer} id="footer">
          <div className={styles.voopSeeMoreContainer}>
            <p className={styles.voop}>Voop</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.seeMoreLearn}>{`See More, Learn More. `}</p>
          </div>
        </footer>
        <div className={styles.myprojectsLInner}>
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
          <div className={styles.projects}>
            <ProjectFrame
              edited5MinAgo="Edited 5 min ago"
              project1="Project 1"
              editMinus="/edit--minus1.svg"
              j="J"
              showEditMinus={false}
              projectFrameWidth="1099px"
              projectFramePosition="absolute"
              projectFrameTop="0px"
              projectFrameLeft="0px"
              projectBoxBackground="linear-gradient(139.01deg, #8775df, #7a59b5 93.23%)"
              projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
              editMinusObjectFit="unset"
            />
            <img
              className={styles.editMinus}
              alt=""
              src="/edit--minus@2x.png"
              onClick={openDeleteProject}
            />
            <ProjectFrame
              edited5MinAgo="Edited 10 min ago"
              project1="Project 2"
              editMinus="/edit--minus@2x.png"
              j="J"
              showEditMinus
              projectFrameWidth="1099px"
              projectFramePosition="absolute"
              projectFrameTop="85px"
              projectFrameLeft="0px"
              projectBoxBackground="linear-gradient(139.01deg, #e37540, #d24d3c 93.23%)"
              projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
              editMinusObjectFit="cover"
            />
            <ProjectFrame
              edited5MinAgo="Edited 1 hour ago"
              project1="Project 3"
              editMinus="/edit--minus@2x.png"
              j="P"
              showEditMinus
              projectFrameWidth="1099px"
              projectFramePosition="absolute"
              projectFrameTop="170px"
              projectFrameLeft="0px"
              projectBoxBackground="linear-gradient(139.01deg, #db6ab0, #b63ba1 93.23%)"
              projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
              editMinusObjectFit="cover"
            />
            <ProjectFrame
              edited5MinAgo="Edited 3 days ago"
              project1="Project 4"
              editMinus="/edit--minus@2x.png"
              j="C"
              showEditMinus
              projectFrameWidth="1099px"
              projectFramePosition="absolute"
              projectFrameTop="255px"
              projectFrameLeft="0px"
              projectBoxBackground="linear-gradient(139.06deg, #7c94ea, #4e53e7 93.23%)"
              projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
              editMinusObjectFit="cover"
            />
            <ProjectFrame
              edited5MinAgo="Edited 4 months ago"
              project1="Project 5"
              editMinus="/edit--minus@2x.png"
              j="P"
              showEditMinus
              projectFrameWidth="1099px"
              projectFramePosition="absolute"
              projectFrameTop="340px"
              projectFrameLeft="0px"
              projectBoxBackground="linear-gradient(139.01deg, #26b25e, #107126 93.23%)"
              projectBoxBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
              editMinusObjectFit="cover"
            />
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

export default MyProjectsL;
