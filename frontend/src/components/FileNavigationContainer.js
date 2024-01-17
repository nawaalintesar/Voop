import { useState, useCallback } from "react";
import CodeEditorPopUp from "./CodeEditorPopUp";
import PortalPopup from "./PortalPopup";
import IconfileMd from "./IconfileMd";
import styles from "./FileNavigationContainer.module.css";

const FileNavigationContainer = () => {
  const [isCodeEditorPopUpOpen, setCodeEditorPopUpOpen] = useState(false);

  const openCodeEditorPopUp = useCallback(() => {
    setCodeEditorPopUpOpen(true);
  }, []);

  const closeCodeEditorPopUp = useCallback(() => {
    setCodeEditorPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.browser}>
          <div className={styles.project}>
           
            <div className={styles.button} />
            <div className={styles.myoopproject}>MyOOPProject</div>
          </div>
          {/* <div className={styles.folder}>
            <img className={styles.icon1} alt="" src="/icon1@2x.png" />
            <img className={styles.icon1} alt="" src="/icon2@2x.png" />
            <div className={styles.nodeModules}>node_modules</div>
          </div>
          <div className={styles.folder1}>
            <img className={styles.icon1} alt="" src="/icon3@2x.png" />
            <img className={styles.icon1} alt="" src="/icon4@2x.png" />
            <div className={styles.nodeModules}>src</div>
          </div> */}
          <div className={styles.file}>
            
            <IconfileMd
              imageCode="/vector@2x.png"
              dimensionCode="/vector1@2x.png"
              technologyCode="JS"
              iconfileMdPosition="relative"
              iconfileMdWidth="24px"
              iconfileMdHeight="24px"
              vectorIconHeight="83.33%"
              vectorIconWidth="66.67%"
              vectorIconTop="8.33%"
              vectorIconRight="16.67%"
              vectorIconBottom="8.33%"
              vectorIconLeft="16.67%"
              mDColor="rgba(0, 0, 0, 0.8)"
              mDTop="54.17%"
            />
            <div className={styles.nodeModules}>Main.js</div>
          </div>
          <div className={styles.folder}>
            
            <IconfileMd
              imageCode="/vector@2x.png"
              dimensionCode="/vector1@2x.png"
              technologyCode="MD"
              iconfileMdPosition="relative"
              iconfileMdWidth="24px"
              iconfileMdHeight="24px"
              vectorIconHeight="83.33%"
              vectorIconWidth="66.67%"
              vectorIconTop="8.33%"
              vectorIconRight="16.67%"
              vectorIconBottom="8.33%"
              vectorIconLeft="16.67%"
              mDColor="rgba(0, 0, 0, 0.8)"
              mDTop="54.17%"
            />
            <div className={styles.nodeModules}>README.md</div>
          </div>
          
        </div>
        <div className={styles.folder2}>
          <img className={styles.icon1} alt="" src="/icon7@2x.png" />
          <div className={styles.nodeModules}>File</div>
        </div>
        <button
          className={styles.image14}
          id="buttonForAddingFile"
          onClick={openCodeEditorPopUp}
        />
      </div>
      {isCodeEditorPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCodeEditorPopUp}
        >
          <CodeEditorPopUp onClose={closeCodeEditorPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default FileNavigationContainer;