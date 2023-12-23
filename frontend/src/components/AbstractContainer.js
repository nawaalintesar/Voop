import { useMemo } from "react";
import styles from "./AbstractContainer.module.css";

const AbstractContainer = ({
  definitionText,
  conceptDescription,
  propLeft,
  propBackground,
  propLetterSpacing,
  propLineHeight,
  onInterfaceTutContainerClick,
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
  }, [propBackground]);

  const interfacesDefineAStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      lineHeight: propLineHeight,
    };
  }, [propLetterSpacing, propLineHeight]);

  return (
    <div
      className={styles.interfacetut}
      onClick={onInterfaceTutContainerClick}
      style={interfaceTutStyle}
    >
      <div className={styles.interfacetutChild} />
      <div className={styles.interfacetutItem} style={rectangleDivStyle} />
      <div className={styles.interfacesDefineA} style={interfacesDefineAStyle}>
        {definitionText}
      </div>
      <div className={styles.interfaces}>{conceptDescription}</div>
    </div>
  );
};

export default AbstractContainer;
