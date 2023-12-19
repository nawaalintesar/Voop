import { useMemo } from "react";
import styles from "./TutorialExampleLevel3.module.css";

const TutorialExampleLevel3 = ({
  lessonTitle,
  lessonDescription,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  onProperty1DefaultClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
  ]);

  return (
    <button
      className={styles.property1default}
      id="Ex1Tut"
      onClick={onProperty1DefaultClick}
      style={property1DefaultStyle}
    >
      <div className={styles.creatingAnimalObjects}>{lessonTitle}</div>
      <div className={styles.learnHowToContainer}>
        <p className={styles.learnHowTo}>{lessonDescription}</p>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector6@2x.png" />
    </button>
  );
};

export default TutorialExampleLevel3;
