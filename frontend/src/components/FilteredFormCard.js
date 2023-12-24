import { useState, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import InheritencetutCard from "./InheritencetutCard";
import PolymorphismtutCard from "./PolymorphismtutCard";
import EncapsulationTutCard from "./EncapsulationTutCard";
import styles from "./FilteredFormCard.module.css";

const FilteredFormCard = () => {
  const [isLessonContinuationPopupOpen, setLessonContinuationPopupOpen] =
    useState(false);
  const [isLessonContinuationPopup1Open, setLessonContinuationPopup1Open] =
    useState(false);
  const [isLessonContinuationPopup2Open, setLessonContinuationPopup2Open] =
    useState(false);
  const [isLessonContinuationPopup3Open, setLessonContinuationPopup3Open] =
    useState(false);

  const openLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(true);
  }, []);

  const closeLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.continuejourneycards}>
        <div
          className={styles.classobjectstutcard}
          onClick={openLessonContinuationPopup}
        >
          <div className={styles.classobjectstutcardChild} />
          <div className={styles.classobjectstutcardItem} />
          <div className={styles.aClassIs}>
            A class is a blueprint for creating objects, and objects are
            instances of a class, encapsulating data and behavior.
          </div>
          <div className={styles.classobjectstutcardInner} />
          <div className={styles.classobjectstutcardInner} />
          <div className={styles.div}>0 %</div>
          <div className={styles.classesAndObjects}>Classes and Objects</div>
          <div className={styles.javaWrapper}>
            <div className={styles.java}>Java</div>
          </div>
        </div>
        <InheritencetutCard
          inheritencetutCardPosition="absolute"
          inheritencetutCardTop="0px"
          inheritencetutCardLeft="277px"
        />
        <PolymorphismtutCard
          polymorphismtutCardPosition="absolute"
          polymorphismtutCardTop="0px"
          polymorphismtutCardLeft="554px"
          polymorphismtutCardCursor="pointer"
        />
        <EncapsulationTutCard
          encapsulationTutCardPosition="absolute"
          encapsulationTutCardTop="0px"
          encapsulationTutCardLeft="831px"
          encapsulationTutCardCursor="pointer"
        />
      </div>
      {isLessonContinuationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLessonContinuationPopup}
        >
          <LessonContinuation onClose={closeLessonContinuationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilteredFormCard;
