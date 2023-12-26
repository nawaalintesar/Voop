import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUpCardForm from "../components/SignUpCardForm";
import HeaderLight from "../components/HeaderLight";
import Footer from "../components/Footer";
import styles from "./SignInL.module.css";

const SignInL = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/-log-inl");
  }, [navigate]);

  return (
    <div className={styles.signInL}>
      <div className={styles.logIn}>
        <div className={styles.logInChild} />
        <b className={styles.welcomeToVoopContainer}>
          <span className={styles.welcomeToVoopContainer1}>
            <p className={styles.welcomeToVoop}>Welcome to Voop!</p>
            <p className={styles.welcomeToVoop}>&nbsp;</p>
            <p className={styles.whereOopMeets}>&nbsp;</p>
          </span>
        </b>
        <div className={styles.empowerYourCodingContainer}>
          <p className={styles.empowerYourCoding}>
            Empower your coding journey with Voop -
          </p>
          <p className={styles.empowerYourCoding}>&nbsp;</p>
          <p className={styles.empowerYourCoding}>&nbsp;</p>
          <p className={styles.whereOopMeets}>
            where OOP meets interactive visualization.
          </p>
        </div>
        <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.text}>Register</div>
        </div>
        <SignUpCardForm />
        <HeaderLight
          headerLightHeight="66px"
          headerLightMaxHeight="unset"
          headerLightPosition="absolute"
          headerLightTop="0px"
          headerLightLeft="0%"
          headerLightMaxWidth="100%"
          headerLightJustifyContent="unset"
          frameDivAlignContent="normal"
          frameDivMaxWidth="unset"
          buttonCursor="unset"
          headerLightRight="0%"
          frameDivWidth="unset"
          frameDivLeft="calc(50% - 703px)"
          frameDivAlignItems="center"
          onButtonClick={onButtonClick}
        />
        <Footer
          footerBackground="linear-gradient(180deg, rgba(9, 4, 36, 0.3) 92.71%, #281389)"
          footerHeight="106px"
          footerAlignContent="space-between"
          footerPosition="absolute"
          footerTop="919px"
          footerLeft="0px"
          voopSeeMoreContainerLeft="660.5px"
        />
      </div>
    </div>
  );
};

export default SignInL;
