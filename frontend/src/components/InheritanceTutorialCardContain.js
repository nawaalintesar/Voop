import { useMemo } from "react";
import styles from "./InheritanceTutorialCardContain.module.css";

const InheritanceTutorialCardContain = ({ propTop, propLeft, propCursor }) => {
  const inheritencetutCard1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      cursor: propCursor,
    };
  }, [propTop, propLeft, propCursor]);

  return (
    <div className={styles.inheritencetutcard} style={inheritencetutCard1Style}>
      <div className={styles.inheritencetutcardChild} />
      <div className={styles.inheritencetutcardItem} />
      <div className={styles.enablesANew}>
        Enables a new class to inherit properties and behaviors from an existing
        class, fostering code reuse
      </div>
      <div className={styles.inheritance}>Inheritance</div>
      <div className={styles.inheritencetutcardInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.div}>15 %</div>
    </div>
  );
};

export default InheritanceTutorialCardContain;
