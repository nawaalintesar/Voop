import { useState, useMemo, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import styles from "./PolymorphismtutCard.module.css";

const PolymorphismtutCard = ({
  polymorphismtutCardPosition,
  polymorphismtutCardTop,
  polymorphismtutCardLeft,
  polymorphismtutCardCursor,
}) => {
  const [isLessonContinuationPopupOpen, setLessonContinuationPopupOpen] =
    useState(false);
  const polymorphismtutCardStyle = useMemo(() => {
    return {
      position: polymorphismtutCardPosition,
      top: polymorphismtutCardTop,
      left: polymorphismtutCardLeft,
      cursor: polymorphismtutCardCursor,
    };
  }, [
    polymorphismtutCardPosition="absolute",
    polymorphismtutCardTop="0px",
    polymorphismtutCardLeft="554px",
    polymorphismtutCardCursor="pointer",
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
        className={styles.polymorphismtutcard}
        onClick={openLessonContinuationPopup}
        style={polymorphismtutCardStyle}
      >
        <div className={styles.polymorphismtutcardChild} />
        <div className={styles.polymorphismtutcardItem} />
        <div className={styles.allowsObjectsTo}>
          Allows objects to be treated as instances of their parent class,
          facilitating flexibility in method implementation
        </div>
        <div className={styles.polymorphismtutcardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.polymorphism}>Polymorphism</div>
        <div className={styles.polymorphismtutcardChild1} />
        <div className={styles.div}>39 %</div>
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

export default PolymorphismtutCard;
