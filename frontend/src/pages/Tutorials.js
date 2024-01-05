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
import styles from "./Tutorials.module.css";
import { useTutorialsContext } from "../hooks/useTutorialsContext.js";
import InheritanceTutorialCardContain from "../components/InheritanceTutorialCardContain";

const Tutorials = () => {
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


  const onTutContainerClick = useCallback((TutorialId) => {
    navigate("/GenericTutorial", { state: { TutorialId } });
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/Tutorials");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
    navigate("/CodeEditorAfterLogin");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/Projects");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    navigate("/Profile");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);


  const onMethodoverloadingOverriddingTContainerClick = useCallback(() => {
    navigate("/GenericTutorial");
  }, [navigate]);

  const onComprehensiveOOPTutContainerClick = useCallback(() => {
    navigate("/GenericTutorial");
  }, [navigate]);

  var items = 1;
  var margin = 0;

  return (
    <div className={styles.Tutorials}>


      <div className={styles.items}>

        <b className={styles.continueTheJourney}>Continue The Journey</b>
        <FilteredFormCard />

        <b className={styles.allTutorials}>All Tutorials</b>
        <div className={styles.alltutorials}>
          {tutorials && tutorials.map((tutorial, index) => (
            <AbstractContainer
              tutorial={tutorial}
              conceptDescription={tutorial.tutName}
              onTutContainerClick={() => onTutContainerClick(tutorial._id)}
              propLeft={`${index * 250}px`}
              propLineHeight={`${index * 250}px`}
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
      <Property1Default
        onFrameButtonClick={onFrameButtonClick}
      />
      <Footer />
      <Property1Closed
        onFrameContainerClick={onFrameContainer2Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      />
    </div>

  );
};

export default Tutorials;
