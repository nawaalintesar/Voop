import React, {useState} from 'react';
import IconfileMd from "./IconfileMd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import styles from "./OutputContainer.module.css";

const OutputContainer = () => {
 

  return (
    <div className={styles.main}>
      <div className={styles.files}>
        <div className={styles.file}>
          <IconfileMd
            imageCode="/vector3@2x.png"
            dimensionCode="/vector4@2x.png"
            technologyCode="JS"
            iconfileMdPosition="relative"
            iconfileMdWidth="20px"
            iconfileMdHeight="20px"
            vectorIconHeight="83.5%"
            vectorIconWidth="66.5%"
            vectorIconTop="8.5%"
            vectorIconRight="17%"
            vectorIconBottom="0%"
            vectorIconLeft="16.5%"
            mDColor="rgba(0, 0, 0, 0.8)"
            mDTop="49%"
          />
          <div className={styles.mainjs}>Main.js</div>
        </div>
        <div className={styles.file1}>
          <IconfileMd
            imageCode="/vector3@2x.png"
            dimensionCode="/vector4@2x.png"
            technologyCode="MD"
            iconfileMdPosition="relative"
            iconfileMdWidth="20px"
            iconfileMdHeight="20px"
            vectorIconHeight="83.5%"
            vectorIconWidth="66.5%"
            vectorIconTop="8.5%"
            vectorIconRight="17%"
            vectorIconBottom="8%"
            vectorIconLeft="16.5%"
            mDColor="rgba(0, 0, 0, 0.8)"
            mDTop="49%"
          />
          <div className={styles.mainjs}>README.md</div>
        </div>
        
      </div>
      <div className={styles.code}>
      <AceEditor
            padding=""
            right="400px"
            left="500px"
            height="610px"
            width="548px"
            mode="javascript"
            theme="terminal"
            name="editor"
            fontSize={14}
            editorProps={{ $blockScrolling: true }}
            value={`function onLoad(editor) {console.log("I've loaded!");}`}
          />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameG65pxroup}>
          <div className={styles.outputWrapper}>
            <div className={styles.mainjs}>Output</div>
          </div>
          <img
            className={styles.iconLineclose}
            alt=""
            src="/icon-lineclose@2x.png"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default OutputContainer;
