import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import HeaderLight from "../components/HeaderLight";
import Footer from "../components/Footer";
import styles from "./LogInL.module.css";

const LogInL = () => {
  const navigate = useNavigate();

  const onLogInButtonClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logInL}>
      <div className={styles.items}>
        <b className={styles.welcomeBack}>
          <span className={styles.welcomeBackTxtContainer}>
            <p className={styles.blankLine}>Welcome back!</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine2}>&nbsp;</p>
          </span>
        </b>
        <div className={styles.niceToSee}>{`Nice to see you again  `}</div>
        <LoginForm />
        <HeaderLight
          headerLightHeight="66px"
          headerLightMaxHeight="100%"
          headerLightPosition="absolute"
          headerLightTop="0px"
          headerLightLeft="0px"
          headerLightMaxWidth="unset"
          headerLightJustifyContent="unset"
          frameDivAlignContent="unset"
          frameDivMaxWidth="unset"
          buttonCursor="unset"
          headerLightRight="unset"
          frameDivWidth="100%"
          frameDivLeft="calc(50% - 703px)"
          frameDivAlignItems="center"
          onButtonClick={onButtonClick}
        />
        <Footer
          footerBackground="linear-gradient(180deg, rgba(9, 4, 36, 0.3) 92.71%, #281389)"
          footerHeight="115px"
          footerAlignContent="stretch"
          footerPosition="absolute"
          footerTop="920px"
          footerLeft="0px"
          voopSeeMoreContainerLeft="660.5px"
        />
      </div>
    </div>
  );
};

export default LogInL;
