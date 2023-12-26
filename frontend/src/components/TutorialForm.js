import { useState, useCallback } from "react";
import ConfirmEnrollment from "./ConfirmEnrollment";
import PortalPopup from "./PortalPopup";
import EnrollPopUp from "./EnrollPopUp";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialForm.module.css";

const TutorialForm = () => {
  const [isConfirmEnrollmentPopupOpen, setConfirmEnrollmentPopupOpen] =
    useState(false);
  const [isEnrollPopUpOpen, setEnrollPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const openEnrollPopUp = useCallback(() => {
    setEnrollPopUpOpen(true);
  }, []);

  const closeEnrollPopUp = useCallback(() => {
    setEnrollPopUpOpen(false);
  }, []);

  const openConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(true);
  }, []);

  const closeConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(false);
  }, []);

  const onBackarrowContainerClick = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/mytutorialsl");
  }, [navigate]);

  return (
    <>
      <div className={styles.tutorialcardmain}>
        <div className={styles.tutorialcardmainChild} />
        <div className={styles.classesAndObjects}>Classes and Objects</div>
        <div className={styles.tutorialPage}>Tutorial Page</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.c}>C++</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.c}>Java</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.c}>Python</div>
        </div>
        <img className={styles.cloudIcon} alt="" src="/cloud@2x.png" />
        <div className={styles.button} onClick={openEnrollPopUp}>
          <div
            className={styles.buttonChild}
            onClick={openConfirmEnrollmentPopup}
          />
          <div className={styles.enroll}>Enroll</div>
        </div>
        <div className={styles.backarrow} onClick={onBackarrowContainerClick}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector2@2x.png"
            onClick={onVectorIconClick}
          />
          <img className={styles.vectorIcon1} alt="" src="/vector3@2x.png" />
        </div>
      </div>
      {isEnrollPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEnrollPopUp}
        >
          <EnrollPopUp onClose={closeEnrollPopUp} />
        </PortalPopup>
      )}
      {isConfirmEnrollmentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmEnrollmentPopup}
        >
          <ConfirmEnrollment onClose={closeConfirmEnrollmentPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TutorialForm;
