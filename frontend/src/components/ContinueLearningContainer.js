import InheritanceTutorialCardContain from "./InheritanceTutorialCardContain";
import styles from "./ContinueLearningContainer.module.css";

const ContinueLearningContainer = () => {
  return (
    <div className={styles.continuelearning}>
      <div className={styles.continueLearning}>Continue learning</div>
      <InheritanceTutorialCardContain propTop="54px" propLeft="50px" />
      <div className={styles.classobjectstutcard}>
        <div className={styles.classobjectstutcardChild} />
        <div className={styles.classobjectstutcardItem} />
        <div className={styles.aClassIs}>
          A class is a blueprint for creating objects, and objects are instances
          of a class, encapsulating data and behavior.
        </div>
        <div className={styles.classobjectstutcardInner} />
        <div className={styles.classobjectstutcardInner} />
        <div className={styles.div}>50%</div>
        <div className={styles.classesAndObjects}>Classes and Objects</div>
      </div>
    </div>
  );
};

export default ContinueLearningContainer;
