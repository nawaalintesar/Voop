import { useMemo } from "react";
import styles from "./InheritanceTutorialCardContain.module.css";

const InheritanceTutorialCardContain = ({
  propTop,
  propLeft,
  propCursor,
  propWidth,
  propHeight,
}) => {
  const inheritencetutCard1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      cursor: propCursor,
    };
  }, [propTop, propLeft, propCursor]);

  const cardChildStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.inheritencetutcard} style={inheritencetutCard1Style}>
      <div className={styles.inheritencetutcardChild} style={cardChildStyle} />
      <div className={styles.inheritencetutcardItem} style={cardChildStyle} />
      <div className={styles.enablesANew}></div>
      <div className={styles.inheritance}>Inheritance</div>
      <div className={styles.inheritencetutcardInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.div}>90%</div>
    </div>
  );
};

export default InheritanceTutorialCardContain;
