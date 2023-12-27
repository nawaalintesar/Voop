import styles from "./LessonContinuation.module.css";

const LessonContinuation = ({ onClose }) => {
  return (
    <div className={styles.lessonContinuation}>
      <div className={styles.lessonContinuationParent}>
        <div className={styles.lessonContinuation1}>Lesson Continuation</div>
        <div className={styles.welcomeBackChooseContainer}>
          <p className={styles.welcomeBack}>Welcome Back!</p>
          <p className={styles.welcomeBack}>
            Choose which lesson plan you would like to continue with today.
          </p>
        </div>
        <div className={styles.frameForLevels}>
          <button className={styles.rectangleParent}>
            <button className={styles.frameChild} />
            <div className={styles.level1}>{`Level 1 `}</div>
          </button>
          <div className={styles.rectangleGroup}>
            <button className={styles.frameItem} />
            <div className={styles.level2}>Level 2</div>
          </div>
          <div className={styles.rectangleContainer}>
            <button className={styles.frameInner} />
            <div className={styles.level3}>Level 3</div>
          </div>
        </div>
        <img
          className={styles.pagecrossIcon}
          alt=""
          src="/pagecross2.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default LessonContinuation;
