import { useEffect, dispatch, useState, useCallback } from "react";
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
import InheritanceTutorialCardContain from "../components/InheritanceTutorialCardContain";
//import { useDispatch } from "react-redux";

const MytutorialsL = () => {
  const [tutorials, setTutorials] = useState(null)
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const navigate = useNavigate();
 // const dispatch = useDispatch();

  useEffect(() => {
    const fetchTutorials = async () => {
      const response = await fetch('/api/tutorials')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_TUTORIALS', payload: json })
      }
    }

    fetchTutorials()
  }, [dispatch])
  const onTutContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
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


  const onMethodoverloadingOverriddingTContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  const onComprehensiveOOPTutContainerClick = useCallback(() => {
    navigate("/generictutorialpagel");
  }, [navigate]);

  return (
    <div className={styles.mytutorialsL}>
      <Footer/>
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
          
          {tutorials && tutorials.map((tutorial) => (
              <AbstractContainer
                key={tutorial._id}
                tutorial={tutorial}
                conceptDescription="Interfaces" // Ensure this is the intended description
                propLeft="275px" // Check if these properties are as expected
                propBackground="linear-gradient(92.09deg, #4e64a5 36.98%, #2d1f8b)"
                propLetterSpacing="0.01em"
                propLineHeight="100%"
                onTutContainerClick={onTutContainerClick}
              />
            ))}
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
