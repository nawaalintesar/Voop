import { useState, useCallback, useEffect } from "react";
import TutorialStep from "./TutorialStep";
import styles from "./AnimationContainer.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectsContext } from "../hooks/useProjectsContext.js";

const AnimationContainer = ({AnimationContainer, project, tutorial, levelClicked, language }) => {
  const user = useAuthContext();
  const { dispatch } = useProjectsContext();
  const [userCodeState, setUserCodeState] = useState(null);
  const [currentConceptState, setcurrentConceptState] = useState(0);
  const [clickedLevel, setClickedLevel] = useState(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Track the current step index
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 8" to the project
  }, []);

  const onExploreButton1Click = useCallback(() => {
    // Please sync " Log In-F" to the project
  }, []);

 
  useEffect(() => {
    console.log('AnimationContainer mounted');
    if (project) {
      console.log("Projects in anim", project?.project?.codeStates);
      setUserCodeState(project?.project?.codeStates?.[project.project.codeStates.length - 1] || "----");
    } else if (tutorial) {
      const levelClickedNumber = parseInt(levelClicked, 10);
      const filteredLevels = tutorial.level.filter(level => level.progLang === language);
      const currentClickedLevel = filteredLevels[levelClickedNumber - 1];
      setClickedLevel(currentClickedLevel);
      console.log('Tuts in anim', (currentClickedLevel.code || []).join('\n'))
      console.log("asdfasdfsadfadsfasd", currentClickedLevel.tutorialSteps)
    }
  }, [project, tutorial, levelClicked, language, currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < tutorial.level.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);

    }
  };
  const handleNextBig = () => {
    if (currentConceptState < (userCodeState.relationships.length - 1)) {
      setcurrentConceptState(currentConceptState + 1);
    }
  };

  const handlePrevBig = () => {
    if (currentConceptState > 0) {
      setcurrentConceptState(currentConceptState - 1);
    }
  };

  return (
    <>
      <div className={`${styles.defaultAnimationContainer} ${AnimationContainer}`}>
        <div className={styles.frame}>
          <div className={styles.animation}>
            {tutorial && clickedLevel ? (
              <TutorialStep
                oopConceptTitles={`Step ${currentStepIndex + 1}`}
                conceptTitle="/vector.svg"
                conceptDescription="/vector.svg"
                conceptCode=""
                conceptCodeImageUrls=""
                carMake={clickedLevel?.tutorialSteps[currentStepIndex]?.substring(clickedLevel.tutorialSteps[currentStepIndex].indexOf(':') + 1) || "tutorial step not found"}
                conceptCodeDimensions={`${currentStepIndex + 1 || 1}/${clickedLevel.noTutSteps}`}
                propTop="66px"
                propLeft="15px"
                propRight="51.74%"
                propLeft1="46.86%"
                propRight1="48.66%"
                propLeft2="49.95%"
                onNext={handleNext} // Pass the next step handler
                onPrev={handlePrev} // Pass the previous step handler
              />
            ) : (
              <TutorialStep
                oopConceptTitles={`Identified OOP Concept - ${userCodeState?.relationships?.[currentConceptState]?.type || "N/A"} ${currentConceptState + 1}/${userCodeState?.relationships?.length || 1}`}
                conceptTitle="/vector.svg"
                conceptDescription="/vector.svg"
                conceptCode="/vector.svg"
                conceptCodeImageUrls="/vector.svg"
                carMake={"tutorial.tutorialSteps"}
                conceptCodeDimensions="1/3"
                propTop="66px"
                propLeft="15px"
                propRight="51.74%"
                propLeft1="46.86%"
                propRight1="48.66%"
                propLeft2="49.95%"
                onNextBig={handleNextBig}
                onPrevBig={handlePrevBig}
              />
            )}
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.topBarAnimation}>
            <div className={styles.animation1}>
              <div className={styles.icon}>
                <img className={styles.vectorIcon} alt="" />
                <img className={styles.vectorIcon1} alt="" src="/vector5@2x.png" />
                <b className={styles.js}>SG</b>
              </div>
              <div className={styles.animation2}>Animation</div>
            </div>
            <div className={styles.saveButton}>
              <div
                className={styles.ellipseParent}
                onClick={onFrameContainerClick}
              >
                <div className={styles.frameChild} />
                <img className={styles.editPlus} alt="" src="/edit--plus.svg" />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <img
                  className={styles.editMinus}
                  alt=""
                  src="/edit--minus.svg"
                />
              </div>
              <button
                className={styles.explorebutton}
                onClick={onExploreButton1Click}
              >
                <div className={styles.undo}>Undo</div>
                <img
                  className={styles.undoButtonIcon}
                  alt=""
                  src="/undo-button.svg"
                />
              </button>
              <button
                className={styles.explorebutton1}
              >
                <div className={styles.undo}>Save</div>
              </button>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default AnimationContainer;
