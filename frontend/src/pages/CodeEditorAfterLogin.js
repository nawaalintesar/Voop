import React, { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
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
    navigate("/CodeEditorAfterLogin");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/Tutorials");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
    navigate("/Projects");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameButtonClickSignIn = useCallback(() => {
    //code dditor button
    navigate("/signIn");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);

  return (
    <div className={styles.codeEditorBeforeLogin}>


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
      <Footer />
      <Property1Closed
        onFrameContainerClick={onFrameContainer3Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick} />

      <Property1Default
        onFrameButtonClick={onFrameButtonClick}
      />
    </div>
  );
};

export default CodeEditorBeforeLogin;
