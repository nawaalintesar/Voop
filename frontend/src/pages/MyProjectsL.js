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
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";

const MyProjectsL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const [isDeleteProjectOpen, setDeleteProjectOpen] = useState(false);
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

  const openDeleteProject = useCallback(() => {
    setDeleteProjectOpen(true);
  }, []);

  const closeDeleteProject = useCallback(() => {
    setDeleteProjectOpen(false);
  }, []);

  return (
    <>
      <div className={styles.myprojectsL}>
        
      <Footer/>
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
