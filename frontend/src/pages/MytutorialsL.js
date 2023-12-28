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
import { useTutorialsContext } from "../hooks/useTutorialsContext.js";
import InheritanceTutorialCardContain from "../components/InheritanceTutorialCardContain";

const MytutorialsL = () => {
  const { tutorials, dispatch } = useTutorialsContext();
  const [tut, setTutorials] = useState(null);
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTutorials = async () => {
      const response = await fetch('/api/tutorials')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_TUTORIALS', payload: json })
      }
    }
    fetchTutorials()
  }, [dispatch]);


  // const onTutContainerClick = useCallback(() => {
  //   navigate("/generictutorialpagel");
  // }, [navigate]);

  const onTutContainerClick = useCallback((enrolledTutorialId) => {
    navigate("/generictutorialpagel", { state: {enrolledTutorialId} });
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
    navigate("/CodeEditorAfterLogin");
  }, [navigate]);
  
  const onFrameIconClick = useCallback(() => {
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
      <Footer />
      <Property1Default 
       onFrameButtonClick={onFrameButtonClick}
       />
      <div className={styles.items}>

        <b className={styles.continueTheJourney}>Continue The Journey</b>
        <b className={styles.allTutorials}>All Tutorials</b>
        <FilteredFormCard />

        <div className={styles.alltutorials}>
          {tutorials && tutorials.map((tutorial, index) => (
            <AbstractContainer
              key={tutorial._id}
              tutorial={tutorial}
              conceptDescription={tutorial.tutName}
              onTutContainerClick={() => onTutContainerClick(tutorial._id)}
              propLeft={`${5 + 250 * index}px`}
            />
          ))}

          <div >
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

      </div>
      <Property1Closed
        onFrameContainerClick={onFrameContainer2Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      />
    </div>

  );
};

export default MytutorialsL;
