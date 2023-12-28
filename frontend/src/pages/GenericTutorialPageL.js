// import { useState, useCallback } from "react";
// import LogOutPopOutL from "../components/LogOutPopOutL";
// import PortalPopup from "../components/PortalPopup";
// import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";
// import Property1Default from "../components/Property1Default";
// import Property1Closed from "../components/Property1Closed";
// import TutorialExamplesContainer1 from "../components/TutorialExamplesContainer1";
// import TutorialForm from "../components/TutorialForm";
// import styles from "./GenericTutorialPageL.module.css";

// const GenericTutorialPageL = () => {
//   const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
//   const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] =
//     useState(false);
//   const navigate = useNavigate();

//   const onFrameContainer2Click = useCallback(() => {
//     // Please sync "Mytutorials-L" to the project
//     navigate("/mytutorialsl");
//   }, [navigate]);

//   const onFrameIconClick = useCallback(() => {
//     // Please sync "MyProjects-L" to the project
//     navigate("/myprojectsl");
//   }, [navigate]);

//   const onUsericonClick = useCallback(() => {
//     navigate("/user-profile-pagel");
//   }, [navigate]);

//   const onDashoboardSMContainerClick = useCallback(() => {
//     navigate("/dashboardl");
//   }, [navigate]);


//   return (

//     <div className={styles.generictutorialpageL}>
      
      
//       <Footer
//         footerHeight="133px"
//         footerMaxWidth="unset"
//         footerPosition="absolute"
//         footerTop="942px"
//         footerLeft="0px"
//         footerMaxHeight="100%"
//         footerJustifyContent="stretch"
//       />
//       <Property1Default
//         buttonHeaderText="codeEditorButtonHeader"
//         property1DefaultAlignContent="stretch"
//         property1DefaultJustifyContent="unset"
//         property1DefaultPosition="absolute"
//         property1DefaultTop="1px"
//         property1DefaultLeft="62px"
//         property1DefaultOverflow="hidden"
//         property1DefaultHeight="81px"
//         frameDivHeight="45.68%"
//         frameDivTop="27.16%"
//         frameDivBottom="27.16%"
//         textCursor="pointer"
//       />
//       <Property1Closed
//         dimensionCode="/layoutgrid4@2x.png"
//         property1ClosedHeight="942px"
//         property1ClosedPosition="absolute"
//         property1ClosedTop="1px"
//         property1ClosedLeft="0px"
//         onFrameContainerClick={onFrameContainer2Click}
//         onFrameIconClick={onFrameIconClick}
//         onUsericonContainerClick={onUsericonClick}
//         onDashoboardSMContainerClick={onDashoboardSMContainerClick}
//       />
//       <div className={styles.textParent}>
//         <div className={styles.text}>
//           <div className={styles.aboutThisTutorial}>About this tutorial</div>
//           <div className={styles.classesDefineThe}>
//             Classes define the blueprint for objects, which are instances of
//             classes containing attributes and methods. Learn the basics of OOP
//             using our examples that teach you how to create classes and work
//             with them.
//           </div>
//           <div className={styles.classesDefineThe1}>
//             Classes define the blueprint for objects, which are instances of
//             classes containing attributes and methods. Learn the basics of OOP
//             using our examples that teach you how to create classes and work
//             with them.
//           </div>
//         </div>
//         <TutorialExamplesContainer1 />
//         <TutorialForm />
//       </div>
//     </div>
//   );
// };

// export default GenericTutorialPageL;
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTutorialsContext } from "../hooks/useTutorialsContext";
import TutorialForm from "../components/TutorialForm";
import TutorialExamplesContainer1 from "../components/TutorialExamplesContainer1";
import LogOutPopOutL from "../components/LogOutPopOutL";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import Property1Default from "../components/Property1Default";
import Property1Closed from "../components/Property1Closed";
import styles from "./GenericTutorialPageL.module.css";

const GenericTutorialPageL = () => {
  //const [ tutorials, dispatch ] = useTutorialsContext();
  const [isLogOutPopOutLPopupOpen, setLogOutPopOutLPopupOpen] = useState(false);
  const [isLogOutPopOutLPopup1Open, setLogOutPopOutLPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Code Editor- after login" to the project
    navigate("/CodeEditorAfterLogin");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
    navigate("/mytutorialsl");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "MyProjects-L" to the project
    navigate("/myprojectsl");
  }, [navigate]);

  const onUsericonClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onDashoboardSMContainerClick = useCallback(() => {
    navigate("/dashboardl");
  }, [navigate]);
  // useEffect(() => {
  //   const fetchTutorials = async () => {
  //     const response = await fetch('/api/tutorials')
  //     const json = await response.json()

  //     if (response.ok) {
  //       dispatch({ type: 'SET_TUTORIALS', payload: json })
  //     }
  //   }
  //   fetchTutorials()
  // }, [dispatch]);
  return (
    <div className={styles.generictutorialpageL}>
      <Footer/>
      <Property1Default
       onFrameButtonClick={onFrameButtonClick}
      />
      <Property1Closed
        onFrameContainerClick={onFrameContainer2Click}
        onFrameIconClick={onFrameIconClick}
        onUsericonContainerClick={onUsericonClick}
        onDashoboardSMContainerClick={onDashoboardSMContainerClick}
      />
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.aboutThisTutorial}>About this tutorial</div>
          <div className={styles.classesDefineThe}>
             Classes define the blueprint for objects, which are instances of
            classes containing attributes and methods. Learn the basics of OOP
            using our examples that teach you how to create classes and work
            with them. 
          </div>
          <div className={styles.classesDefineThe1}>
            Classes define the blueprint for objects, which are instances of
            classes containing attributes and methods. Learn the basics of OOP
            using our examples that teach you how to create classes and work
            with them.
          </div>
        </div>
        <TutorialExamplesContainer1 />
        <TutorialForm />
      </div>
      {/* Add other components like LogOutPopOutL, PortalPopup, etc. */}
    </div>
  );
};

export default GenericTutorialPageL;
