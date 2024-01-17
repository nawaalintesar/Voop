import { useMemo } from "react";
import styles from "./TutorialStep.module.css";

const TutorialStep = ({
  oopConceptTitles,
  conceptTitle,
  conceptDescription,
  conceptCode,
  conceptCodeImageUrls,
  carMake,
  conceptCodeDimensions,
  propTop,
  propLeft,
  propRight,
  propLeft1,
  propRight1,
  propLeft2,
  onVectorIcon4Click,
  onVectorIcon1Click,
  onVectorIcon22Click,
  onVectorIcon3Click,
}) => {
  const step1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft1,
    };
  }, [propRight, propLeft1]);

  const vectorIcon1Style = useMemo(() => {
    return {
      right: propRight1,
      left: propLeft2,
    };
  }, [propRight1, propLeft2]);

  return (
    <div className={styles.step1} style={step1Style}>
      <div className={styles.content}>
        <div className={styles.identifiedOopConcept}>{oopConceptTitles}</div>
        <img
          className={styles.vectorIcon}
          alt=""
          src={conceptTitle}
          onClick={onVectorIcon4Click}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src={conceptDescription}
          onClick={onVectorIcon1Click}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src={conceptCode}
          style={vectorIconStyle}
          onClick={onVectorIcon22Click}
        />
        <img
          className={styles.vectorIcon3}
          alt=""
          src={conceptCodeImageUrls}
          onClick={onVectorIcon3Click}
          style={vectorIcon1Style}
        />
        <div className={styles.theFirstClass}>{carMake}</div>
        <div className={styles.div}>{conceptCodeDimensions}</div>
      </div>
    </div>
  );
};

export default TutorialStep;
