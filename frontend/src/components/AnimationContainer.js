import { useState, useCallback } from "react";
import EnrollPopUp from "./EnrollPopUp";
import PortalPopup from "./PortalPopup";
import TutorialStep from "./TutorialStep";
import styles from "./AnimationContainer.module.css";

const AnimationContainer = () => {
  const [isEnrollPopUp1Open, setEnrollPopUp1Open] = useState(false);

  const onVectorIcon1Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 4" to the project
  }, []);

  const onVectorIcon3Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 8" to the project
  }, []);

  const onExploreButton1Click = useCallback(() => {
    // Please sync " Log In-F" to the project
  }, []);

  const openEnrollPopUp1 = useCallback(() => {
    setEnrollPopUp1Open(true);
  }, []);

  const closeEnrollPopUp1 = useCallback(() => {
    setEnrollPopUp1Open(false);
  }, []);

  return (
    <>
      <div className={styles.animationmain}>
        <div className={styles.frame}>
          <div className={styles.animation}>
            <TutorialStep
              oopConceptTitles="Identified OOP Concept- Classes 1/2"
              conceptTitle="/vector.svg"
              conceptDescription="/vector.svg"
              conceptCode="/vector.svg"
              conceptCodeImageUrls="/vector.svg"
              carMake="The first class identified is Car. It has an attribute “make” and a function called “displayInfo” "
              conceptCodeDimensions="1/3"
              propTop="66px"
              propLeft="15px"
              propRight="51.74%"
              propLeft1="46.86%"
              propRight1="48.66%"
              propLeft2="49.95%"
              onVectorIcon1Click={onVectorIcon1Click}
              onVectorIcon3Click={onVectorIcon3Click}
            />
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
                onClick={openEnrollPopUp1}
              >
                <div className={styles.undo}>Save</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEnrollPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEnrollPopUp1}
        >
          <EnrollPopUp onClose={closeEnrollPopUp1} />
        </PortalPopup>
      )}
    </>
  );
};

export default AnimationContainer;
