import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({
  footerHeight,
  footerMaxWidth,
  footerPosition,
  footerTop,
  footerLeft,
  footerMaxHeight,
  footerJustifyContent,
}) => {
  const footerStyle = useMemo(() => {
    return {
      height: footerHeight,
      maxWidth: footerMaxWidth,
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
      maxHeight: footerMaxHeight,
      justifyContent: footerJustifyContent,
    };
  }, [
    footerHeight,
    footerMaxWidth,
    footerPosition,
    footerTop,
    footerLeft,
    footerMaxHeight,
    footerJustifyContent,
  ]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.voopSeeMoreContainer}>
        <p className={styles.voop}>Voop</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.seeMoreLearn}>{`See More, Learn More. `}</p>
      </div>
    </div>
  );
};

export default Footer;
