import React, { useState, useCallback } from "react";
import { Select } from "antd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/dracula';
import { useNavigate } from "react-router-dom";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import Property1Default2 from "../components/Property1Default2";
import FileNavigationContainer from "../components/FileNavigationContainer";
import OutputContainer from "../components/OutputContainer";
import AnimationContainer from "../components/AnimationContainer";
import styles from "./CodeEditorBeforeLogin.module.css";

const CodeEditorBeforeLogin = () => {
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
    const navigate = useNavigate();
    
  const onFrameButtonClick = useCallback(() => {
    //code dditor button
    navigate("/CodeEditorBeforeLogin");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);

  const onFrameButtonClickSignIn = useCallback(() => {
    //code dditor button
    navigate("/SignIn");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);
  const project= {
    "prjName": "JavaAnimalProject",
    "progLang": "java",
    "codeStates": [
      {
        "codeIndex": 1,
        "userCode": "public class Animal {\n    private String name;\n    private int age;\n    \n    public Animal(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void makeSound() {\n        System.out.println(\"Animal sound\");\n    }\n}",
      
        "classes": [
          {
            "isClass": true,
            "name": "Animal",
            "attributes": [
              {
                "name": "name",
                "access_modifier": "private"
              },
              {
                "name": "age",
                "access_modifier": "private"
              }
            ],
            "methods": [
              {
                "name": "Animal",
                "access_modifier": "public",
                "parameters": [
                  {
                    "name": "name",
                    "type": "String"
                  },
                  {
                    "name": "age",
                    "type": "int"
                  }
                ]
              },
              {
                "name": "makeSound",
                "access_modifier": "public",
                "parameters": []
              }
            ],
            "linesOfCode": "13"
          }
        ],
        "relationships": [],
        "diagramID": null
      }
    ],
    "constraints": [],
    "codeRecs": []
  }

  console.log(project);
  console.log("CODE EDITOR BEFORE LOGIN REAHCED", project?.codeStates[project.codeStates.length - 1]?.userCode);
  return (
    <div className={styles.codeEditorBeforeLogin}>
      
      <div className={styles.frameGenericTutorial}>
        <FileNavigationContainer customClassName={styles.customFileNavigation}/>

        <img
          className={styles.frameGenericTutorialChild}
          alt=""
          src="/line-7@2x.png"
        />

        <div className={styles.mainWrapper}>

          <OutputContainer customOutputContainer={styles.customOutputContainer} project={project}/>
        </div>
        <AnimationContainer AnimationContainer={styles.AnimationContainer}/>
      </div>
      <Property1Default2
        buttonText="codeEditorButtonHeader"
        actionButtonText="Sign In"
        property1DefaultAlignContent="stretch"
        property1DefaultJustifyContent="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="0px"
        property1DefaultLeft="0px"
        buttonPadding="var(--padding-smi) 0px"
        buttonOverflow="unset"
        textDisplay="inline-block"
        textWidth="unset"
        textFlexShrink="unset"
        textCursor="pointer"
        onFrameButtonClick={onFrameButtonClick}
        onFrameButtonClickSignIn={ onFrameButtonClickSignIn}
      />
      <Footer/>
    </div>
  );
};

export default CodeEditorBeforeLogin;
