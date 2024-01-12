import React, { useState, useEffect } from 'react';
import IconfileMd from "./IconfileMd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import styles from "./OutputContainer.module.css";
import { JavaScriptHighlightRules } from 'brace/mode/javascript';

const OutputContainer = ({ project, tutorial, levelClicked, language }) => {
  var userCode;
  //   console.log("LEVEL in OP", levelClicked)
  // console.log("tutorial in OP", tutorial._id)
  // console.log("TUTORIAL", tutorial);
  // console.log("projects", project);
  //console.log(language);

  if (project) {
    console.log("Projects", project?.project?.codeStates);
    userCode =
      project?.project?.codeStates?.[project.project.codeStates.length - 1]?.userCode[0] || "No user code available";
    console.log('User Code:', userCode);

    // Rest of your code for the project case...
  } else if (tutorial) {
    console.log("Tutorial IN OP", tutorial._id);
    const levelClickedNumber = parseInt(levelClicked, 10);

    const filteredLevels = tutorial.level.filter(level => level.levelNumber === levelClickedNumber);
    const clickedLevel = filteredLevels.length > 0 ? filteredLevels[0] : null;

    let selectedLanguage = "Java"; // Default to Java

    if (levelClickedNumber >= 0 && levelClickedNumber <= 2) {
      selectedLanguage = "C++";
    } else if (levelClickedNumber >= 3 && levelClickedNumber <= 5) {
      selectedLanguage = "Java";
    } else if (levelClickedNumber >= 6 && levelClickedNumber <= 8) {
      selectedLanguage = "Python++";
    }

    // Filter levels based on the clicked level number
    // const filteredLevels = tutorial.level.filter(level => level.levelNumber === levelClickedNumber);
    // [0] - [2] - java
    // [3 - 5] - python
    //   [6 - 8] - cpp
    // // Take the first level from the filtered array change this to get different languages. rn its hard coded to java always
    // const clickedLevel = filteredLevels.length > 0 ? filteredLevels[0] : null;

    // If a matching level is found, get and display the code
    userCode = clickedLevel
      ? clickedLevel.code.join('\n')
      : "No user code available";

    console.log('User Code (Tutorial):', userCode);

  }

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
          value={userCode}


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
