import { useState, useMemo, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import styles from "./EncapsulationTutCard.module.css";

const EncapsulationTutCard = ({
  encapsulationTutCardPosition,
  encapsulationTutCardTop,
  encapsulationTutCardLeft,
  encapsulationTutCardCursor,
}) => {
  const [isLessonContinuationPopupOpen, setLessonContinuationPopupOpen] =
    useState(false);
  const encapsulationTutCardStyle = useMemo(() => {
    return {
      position: encapsulationTutCardPosition,
      top: encapsulationTutCardTop,
      left: encapsulationTutCardLeft,
      cursor: encapsulationTutCardCursor,
    };
  }, [
    encapsulationTutCardPosition,
    encapsulationTutCardTop,
    encapsulationTutCardLeft,
    encapsulationTutCardCursor,
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
        className={styles.encapsulationtutcard}
        onClick={openLessonContinuationPopup}
        style={encapsulationTutCardStyle}
      >
        <div className={styles.encapsulationtutcardChild} />
        <div className={styles.encapsulationtutcardItem} />
        <div className={styles.bundlesDataAttributes}>
          Bundles data (attributes) and methods that operate on the data,
          restricting access to the internal state.
        </div>
        <div className={styles.progressbar} />
        <div className={styles.progressbar} />
        <div className={styles.encapsulation}>Encapsulation</div>
        <div className={styles.div}>0 %</div>
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

export default EncapsulationTutCard;
