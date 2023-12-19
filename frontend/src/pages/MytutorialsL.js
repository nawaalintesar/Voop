import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import FilteredFormCard from "../components/FilteredFormCard";
import AbstractContainer from "../components/AbstractContainer";
import Property1Closed from "../components/Property1Closed";
import styles from "./MytutorialsL.module.css";

const MytutorialsL = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const navigate = useNavigate();

  const onInterfaceTutContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  const onAbstractTutContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
  }, []);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
  }, []);

  const onUsericonClick = useCallback(() => {
    // Please sync "User Profile Page-L" to the project
  }, []);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMethodoverloadingOverriddingTContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  const onComprehensiveOOPTutContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  return (
    <div className={styles.mytutorialsL}>
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
        property1DefaultHeight="75px"
        frameDivHeight="45.73%"
        frameDivTop="27.2%"
        frameDivBottom="27.07%"
        textCursor="pointer"
      />
      <div className={styles.items}>
        <img
          className={styles.backgroundimageIcon}
          alt=""
          src="/backgroundimage@2x.png"
        />
        <b className={styles.continueTheJourney}>Continue The Journey</b>
        <b className={styles.allTutorials}>All Tutorials</b>
        <FilteredFormCard />
        <div className={styles.alltutorials}>
          <div
            className={styles.methodoverloadingoverriddingt}
            onClick={onMethodoverloadingOverriddingTContainerClick}
          >
            <div className={styles.methodoverloadingoverriddingtChild} />
            <div className={styles.methodoverloadingoverriddingtItem} />
            <div className={styles.inOopOverriding}>
              In OOP, overriding adapts inherited methods, and overloading
              allows a class multiple methods of the same name with varied
              parameters.
            </div>
            <div className={styles.methodOverloadingOverridingContainer}>
              <p className={styles.methodOverloading}>Method Overloading/</p>
              <p className={styles.overriding}>Overriding</p>
            </div>
          </div>
          <AbstractContainer
            definitionText="Interfaces define a contract, specifying required methods for classes. They ensure consistent behavior, fostering code flexibility."
            conceptDescription="Interfaces"
            propLeft="275px"
            propBackground="linear-gradient(92.09deg, #4e64a5 36.98%, #2d1f8b)"
            propLetterSpacing="0.01em"
            propLineHeight="100%"
            onInterfaceTutContainerClick={onInterfaceTutContainerClick}
          />
          <AbstractContainer
            definitionText="Abstract classes define a blueprint for other classes, offering a common structure and mandatory methods for their subclasses."
            conceptDescription="Abstract Classes"
            propLeft="550px"
            propBackground="linear-gradient(92.09deg, #aeb2c0 36.98%, #827e9b)"
            propLetterSpacing="unset"
            propLineHeight="110%"
            onInterfaceTutContainerClick={onAbstractTutContainerClick}
          />
          <div
            className={styles.comprehensiveooptut}
            onClick={onComprehensiveOOPTutContainerClick}
          >
            <div className={styles.methodoverloadingoverriddingtChild} />
            <div className={styles.comprehensiveooptutItem} />
            <div
              className={styles.anOverviewOf}
            >{`An overview of All OOP concepts. `}</div>
            <div className={styles.comprehensiveOopOverviewContainer}>
              <p className={styles.methodOverloading}>
                Comprehensive OOP Overview
              </p>
              <p className={styles.overriding}>&nbsp;</p>
            </div>
          </div>
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
      <Property1Closed
        dimensionCode="/layoutgrid4@2x.png"
        property1ClosedHeight="942px"
        property1ClosedPosition="absolute"
        property1ClosedTop="0px"
        property1ClosedLeft="0px"
        onFrameContainerClick={onFrameContainer2Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      />
    </div>
  );
};

export default MytutorialsL;
