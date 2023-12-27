import React, { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

import { useNavigate } from "react-router-dom";
// other imports...
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
    navigate("/signinl");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);
  
  return (
    <div className={styles.codeEditorBeforeLogin}>
      <Footer
        footerBackground="linear-gradient(180deg, rgba(11, 4, 44, 0.95), #080614)"
        footerHeight="133px"
        footerAlignContent="stretch"
        footerPosition="absolute"
        footerTop="942px"
        footerLeft="0px"
        voopSeeMoreContainerLeft="670.5px"
        footerMaxWidth="unset"
        footerMaxHeight="100%"
        footerJustifyContent="stretch"
      />

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

      <div className={styles.frameGenericTutorial}>
        <FileNavigationContainer />
        <img
          className={styles.frameGenericTutorialChild}
          alt=""
          src="/line-7@2x.png"
        />

        <div className={styles.mainWrapper}>

          <OutputContainer />
        </div>
        <Select
          className={styles.javaParent}
          placeholder="Language"
          size="small"
          style={{ width: "89px" }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          virtual={false}
          showArrow={false}
        >
          <Select.Option value="Java">Java</Select.Option>
          <Select.Option value="C++">C++</Select.Option>
          <Select.Option value="Python">Python</Select.Option>
        </Select>
        <AnimationContainer />
      </div>
    </div>
  );
};

export default CodeEditorBeforeLogin;
