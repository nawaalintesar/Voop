import React, { useState, useEffect } from 'react';
import IconfileMd from "./IconfileMd";
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/terminal';

import styles from "./OutputContainer.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectsContext } from "../hooks/useProjectsContext.js";

const OutputContainer = ({ project, tutorial, levelClicked, language }) => {
  const user = useAuthContext();
  const { dispatch } = useProjectsContext();
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    console.log('OutputContainer mounted');
    if (project) {
      console.log("Projects", project?.project?.codeStates);
      setUserCode(project?.project?.codeStates?.[project.project.codeStates.length - 1]?.userCode[0] || "Start typing here!");
    } else if (tutorial) {
      const levelClickedNumber = parseInt(levelClicked, 10);
      const filteredLevels = tutorial.level.filter(level => level.progLang === language);
      const clickedLevel = filteredLevels[levelClickedNumber - 1];
      setUserCode(clickedLevel ? clickedLevel.code.join('\n') : "No user code available");
      console.log('Tuts', clickedLevel.code.join('\n'))
    }
  }, []); 

  const handleObjectify = async () => {

    console.log(userCode);
    const updatedCode = {
      "updatedCode": userCode
      // Add other fields as needed
    };


    dispatch({ type: 'UPDATE_PROJECT', payload: updatedCode });

    try {
      console.log("asdf coed", JSON.stringify(updatedCode), "updated", JSON.stringify(updatedCode));
      
      const response = await fetch(`/api/projects/${project.project._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.user.token}`,
        },
        body: JSON.stringify(updatedCode),
      });

      if (response.ok) {
        const fetchResponse = await fetch(`/api/projects/${project.project._id}`, {
          headers: { 'Authorization': `Bearer ${user.user.token}` }
        });
        const json = await fetchResponse.json();
        console.log("asdf json", json)
        if (fetchResponse.ok) {
          dispatch({ type: 'GET_PROJECT', payload: json });
        }
      } else {
        console.error('Error updating data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className={styles.main}>

      <div className={styles.topbarFiles}>
        <button className={styles.explorebutton} onClick={handleObjectify}
        >
          <div className={styles.objectify}>Objectify</div>
          <img
            className={styles.icPlayArrow48pxIcon}
            alt=""
            src="/ic-play-arrow-48px.svg"
          />

        </button>
        <div className={styles.frame}>
          <div className={styles.file}>
            <div className={styles.icon}>
              <img className={styles.vectorIcon} alt="" />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"

              />
              <b className={styles.js}>J</b>
            </div>
            <div className={styles.mainjs}>Main.js</div>
          </div>
          <div className={styles.file1}>
            <div className={styles.icon}>
              <img className={styles.vectorIcon} alt="" />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"
              />
              <b className={styles.js}>JS</b>
            </div>
            <div className={styles.mainjs}>README.md</div>
          </div>
        </div>
      </div>



      <div className={styles.code}>
        <AceEditor
          padding=""
          right="400px"
          left="500px"
          height="610px"
          width="548px"
          mode="java"
          theme="terminal"
          name="editor"
          fontSize={14}
          editorProps={{ $blockScrolling: true }}
          value={userCode}
          onChange={(newCode) => setUserCode(newCode)}
          
          
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameG65pxroup}>
          <div className={styles.outputWrapper}>
            <div className={styles.mainjs}>Output</div>
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default OutputContainer;
