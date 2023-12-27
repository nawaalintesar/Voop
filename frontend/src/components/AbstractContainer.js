import { useMemo } from "react";
import styles from "./AbstractContainer.module.css";

const AbstractContainer = ({
  tutorial,
  conceptDescription,
  propLeft,
  propBackground,
  propLetterSpacing,
  propLineHeight,
  onTutContainerClick, // Ensure this prop is passed correctly
}) => {
  const interfaceTutStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground="linear-gradient(92.09deg, #4e64a5 36.98%, #2d1f8b)"]);

  const interfacesDefineAStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      lineHeight: propLineHeight,
    };
  }, [propLetterSpacing="0.01em", propLineHeight="100%"]);

  return (
    <div
      className={styles.interfacetut}
      onClick={onTutContainerClick} // Ensure onClick is correctly implemented
      style={interfaceTutStyle}
    >
      <div className={styles.interfacetutChild} />
      <div className={styles.interfacetutItem} style={rectangleDivStyle} />
      <div className={styles.interfacesDefineA} style={interfacesDefineAStyle}>
        {tutorial.tutDescription.split('.')[0]}
      </div>
      <div className={styles.interfaces}>{conceptDescription}</div>
    </div>
  );
};

export default AbstractContainer;
