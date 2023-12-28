import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLight from "../components/HeaderLight";
import Footer from "../components/Footer";
import SignUpCardForm from "../components/SignUpCardForm";
import styles from "./SignInDL.module.css";

const SignInDL = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Code Editor- before login" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/loginl");
  }, [navigate]);

  return (
    <div className={styles.signInDl}>
      <div className={styles.logIn}>
        <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
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
          buttonCursor="pointer"
          headerLightRight="0%"
          frameDivWidth="unset"
          frameDivLeft="calc(50% - 703px)"
          frameDivAlignItems="center"
          onButtonContainerClick={onButtonContainerClick}
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
      <div className={styles.signInDlChild} />
      <b className={styles.yourAccountHas}>
        Your account has been deleted successfully
      </b>
      <div className={styles.wereSorryTo}>
        We’re sorry to see you go, but we wish you the very best on your coding
        journey!
      </div>
      <div className={styles.button} onClick={onButtonContainer1Click}>
        <div className={styles.text}>Register</div>
      </div>
      <SignUpCardForm
        signUpFormTop="229px"
        signUpFormAlignContent="stretch"
        frameAlignSelf="unset"
        frameWidth="415px"
      />
    </div>
  );
};

export default SignInDL;
