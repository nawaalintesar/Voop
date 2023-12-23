import { useState, useMemo, useCallback } from "react";
import LogOutPopOutL from "./LogOutPopOutL";
import PortalPopup from "./PortalPopup";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  buttonHeaderText,
  property1DefaultAlignContent,
  property1DefaultJustifyContent,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultOverflow,
  property1DefaultHeight,
  frameDivHeight,
  frameDivTop,
  frameDivBottom,
  textCursor,
  onFrameButtonClick,
}) => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const property1Default1Style = useMemo(() => {
    return {
      alignContent: property1DefaultAlignContent,
      justifyContent: property1DefaultJustifyContent,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      overflow: property1DefaultOverflow,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultAlignContent,
    property1DefaultJustifyContent,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultOverflow,
    property1DefaultHeight,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      top: frameDivTop,
      bottom: frameDivBottom,
    };
  }, [frameDivHeight, frameDivTop, frameDivBottom]);

  const textStyle = useMemo(() => {
    return {
      cursor: textCursor,
    };
  }, [textCursor]);

  const openLogOutPopOutLPopup = useCallback(() => {
    setLogOutPopOutLPopupOpen(true);
  }, []);

  const closeLogOutPopOutLPopup = useCallback(() => {
    setLogOutPopOutLPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.property1default} style={property1Default1Style}>
        <div className={styles.frameParent} style={frameDivStyle}>
          <button className={styles.buttonWrapper} onClick={onFrameButtonClick}>
            <div className={styles.button}>
              <div className={styles.codeEditor}>Code Editor</div>
            </div>
          </button>
          <div className={styles.voOp}>
            <span className={styles.voOpTxtContainer}>
              <p className={styles.vo}>VO</p>
              <p className={styles.vo}>&nbsp;</p>
              <p className={styles.vo}>&nbsp;</p>
              <p className={styles.op}>OP</p>
            </span>
          </div>
          <button
            className={styles.button1}
            id="LogOutButton"
            onClick={openLogOutPopOutLPopup}
          >
            <div className={styles.text} style={textStyle}>
              Log Out
            </div>
          </button>
        </div>
      </div>
      {isLogOutPopOutLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogOutPopOutLPopup}
        >
          <LogOutPopOutL onClose={closeLogOutPopOutLPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Property1Default;
