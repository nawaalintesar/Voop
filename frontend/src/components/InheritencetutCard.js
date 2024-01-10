import { useState, useMemo, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import styles from "./InheritencetutCard.module.css";

const InheritencetutCard = ({
  tutorial,
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

  console.log("ID IN tut",tutorial._id);
  console.log(tutorial);

  return (
    <>
       <div
        className={styles.inheritencetutcard}
        onClick={ () => openLessonContinuationPopup(tutorial._id) } 
        style={inheritencetutCardStyle}
      >
        <div className={styles.inheritencetutcardChild} />
        <div className={styles.inheritencetutcardItem} />
        
        <div className={styles.enablesANew}>
          {tutorial.tutDescription.split('.')[0]}
        </div>
        <div className={styles.inheritance}>{tutorial.tutName }</div>
        <div className={styles.inheritencetutcardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.div}>15 %</div>
      </div>  
      
      {/*
      {tutorial.level.map((level) => (
        <div
          key={level.progLang} // Assuming language has a unique identifier
          className={styles.inheritencetutcard}
          onClick={() => openLessonContinuationPopup(level.progLang)} // Pass the language ID or unique identifier here
          style={inheritencetutCardStyle}
        >
        <div className={styles.inheritencetutcardChild} />
        <div className={styles.inheritencetutcardItem} />
        
        <div className={styles.enablesANew}>
          {tutorial.tutDescription.split('.')[0]}
        </div>
        <div className={styles.inheritance}>{tutorial.tutName }</div>
        <div className={styles.inheritencetutcardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.div}>15 %</div>
        </div>
      ))}*/}


      {isLessonContinuationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLessonContinuationPopup}
        >
          <LessonContinuation tutorial = {tutorial} tutorialId={tutorial._id} onClose={closeLessonContinuationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default InheritencetutCard;
