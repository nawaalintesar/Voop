import { useState, useMemo, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import styles from "./InheritencetutCard.module.css";

const InheritencetutCard = ({
  inheritencetutCardPosition,
  inheritencetutCardTop,
  inheritencetutCardLeft,
}) => {
  const [isLessonContinuationPopupOpen, setLessonContinuationPopupOpen] =
    useState(false);
  const inheritencetutCardStyle = useMemo(() => {
    return {
      position: inheritencetutCardPosition,
      top: inheritencetutCardTop,
      left: inheritencetutCardLeft,
    };
  }, [
    inheritencetutCardPosition,
    inheritencetutCardTop,
    inheritencetutCardLeft,
  ]);

  const openLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(true);
  }, []);

  const closeLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={styles.inheritencetutcard}
        onClick={openLessonContinuationPopup}
        style={inheritencetutCardStyle}
      >
        <div className={styles.inheritencetutcardChild} />
        <div className={styles.inheritencetutcardItem} />
        <div className={styles.enablesANew}>
          Enables a new class to inherit properties and behaviors from an
          existing class, fostering code reuse
        </div>
        <div className={styles.inheritance}>Inheritance</div>
        <div className={styles.inheritencetutcardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.div}>15 %</div>
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

export default InheritencetutCard;
