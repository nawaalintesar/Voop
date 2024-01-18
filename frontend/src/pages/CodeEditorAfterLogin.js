import React, { useState, useEffect, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
import { useLocation } from "react-router-dom";
import { useProjectsContext } from "../hooks/useProjectsContext";

import { useTutorialsContext } from "../hooks/useTutorialsContext";
import { useNavigate } from "react-router-dom";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import Property1Default2 from "../components/Property1Default2";
import FileNavigationContainer from "../components/FileNavigationContainer";
import OutputContainer from "../components/OutputContainer";
import AnimationContainer from "../components/AnimationContainer";
import styles from "./CodeEditorAfterLogin.module.css";

import { useAuthContext } from "../hooks/useAuthContext";

const CodeEditorAfterLogin = () => {
  const user = useAuthContext();
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
    useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    //code dditor button
    navigate("/CodeEditorBeforeLogin");
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
    navigate("/Profile");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameButtonClickSignIn = useCallback(() => {
    //code dditor button
    navigate("/signIn");
    // Please sync "Code Editor- after login" to the project
  }, [navigate]);

  const { project, dispatch: projectDispatch } = useProjectsContext();
  const { tutorial, dispatch: tutorialDispatch } = useTutorialsContext();

  const { state } = useLocation()

  const projectId = state ? state.ProjectId : null;
  const tutorialId = state ? state.tutorialId : null;
  const levelClicked = state ? state.levelClicked : null;
  const language = state ? state.language : null; 

  console.log("Project ID:", projectId);
  console.log("Tutorial ID:", tutorialId);
  console.log("Level Clicked:", levelClicked);
  console.log("Language Clicked:", language);

  useEffect(() => {
    const fetchNew = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`, {
          headers: { 'Authorization': `Bearer ${user.user.token}` }
        });
        const json = await response.json();

        if (response.ok) {
          projectDispatch({ type: 'GET_PROJECT', payload: json });
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`,{
          headers: { 'Authorization': `Bearer ${user.user.token}` }
        });
        const json = await response.json();

        if (response.ok) {
          projectDispatch({ type: 'GET_PROJECT', payload: json });
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    const fetchTutorials = async () => {
      console.log("IN FUCN .",tutorialId)
      if (tutorialId) {
        try {
          const response = await fetch(`/api/tutorials/${tutorialId}`,{
            headers: { 'Authorization': `Bearer ${user.user.token}` }
          });
          const json = await response.json();

          if (response.ok) {
            tutorialDispatch({ type: 'GET_TUTORIAL', payload: json });
          }
        } catch (error) {
          console.error('Error fetching tutorial:', error);
        }
      }
    };

    // Fetch projects only if projectId is present
    console.log(projectId)
    console.log(tutorialId)

    if (projectId && user.user.userEmail) {
      console.log("HEllo user from inside code editor for projects")
      console.log(user.user)
      fetchProjects();
    }

    else if (tutorialId && user.user.userEmail) {
      console.log("HEllo user from inside code editor for tuts")
      console.log(user.user)
      fetchTutorials();
    }

    else {
      fetchNew();
    }
  }, [user, projectDispatch, tutorialDispatch, projectId, tutorialId]);

  return (
    <div className={styles.codeEditorBeforeLogin}>
      <div className={styles.frameGenericTutorial}>
        <FileNavigationContainer />
        {/* <img
          className={styles.frameGenericTutorialChild}
          alt=""
          src="/line-7@2x.png"
        /> */}

        <div className={styles.mainWrapper}>
          {project && <OutputContainer key={projectId} project={project} />}
          {tutorial && <OutputContainer key={tutorialId} tutorial={tutorial} levelClicked={ levelClicked} language={language} />}

        </div>
        {/* <Select
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
          <Select.Option value="C++">C++</Select.Option>
          <Select.Option value="Java">Java</Select.Option>
          <Select.Option value="Python">Python</Select.Option>
        </Select> */}
         {project && <AnimationContainer key={projectId} project={project} />}
          {tutorial && <AnimationContainer key={tutorialId} tutorial={tutorial} levelClicked={ levelClicked} language={language} />}

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

export default CodeEditorAfterLogin;