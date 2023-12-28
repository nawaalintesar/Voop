import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import ForgotPassPop from "./ForgotPassPop";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import ButtonRegister from "./ButtonRegister";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassPopPopupOpen, setForgotPassPopPopupOpen] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onLogInButtonClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
    navigate("/Dashboard");
  }, [navigate]);

  const onNewToVoopContainerClick = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const onNewToVoopClick = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const openForgotPassPopPopup = useCallback(() => {
    setForgotPassPopPopupOpen(true);
  }, []);

  const closeForgotPassPopPopup = useCallback(() => {
    setForgotPassPopPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginChild} />
        <div className={styles.login1}>
          <b className={styles.logIn}>{`Log in `}</b>
        </div>
        <div className={styles.newtovoop} onClick={onNewToVoopContainerClick}>
          <button
            className={styles.newToVoopContainer}
            onClick={onNewToVoopClick}
          >
            <span className={styles.newToVoopContainer1}>
              {`New to Voop? `}
              <span className={styles.joinNow}>Join now</span>
            </span>
          </button>
        </div>
        <TextField
          className={styles.username}
          color="secondary"
          name="Username"
          label="Username"
          placeholder="Username"
          required={true}
          sx={{ width: 357 }}
          variant="filled"
        />
        <TextField
          className={styles.password}
          color="secondary"
          name="Password"
          label="Password"
          placeholder="Password"
          required={true}
          sx={{ width: 357 }}
          variant="filled"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.remebermeforgetpass}>
          <div className={styles.frame}>
            <button
              className={styles.forgotPassword}
              onClick={openForgotPassPopPopup}
            >
              Forgot Password?
            </button>
            <div className={styles.rememberMe}> Remember me</div>
            <input
              className={styles.materialSymbolsLightsquare}
              required={true}
              type="checkbox"
            />
          </div>
        </div>
        <a className={styles.loginwithgoogle}>
          <div className={styles.frame1}>
            <div className={styles.wrapperRectangle45}>
              <img
                className={styles.wrapperRectangle45Child}
                alt=""
                src="/rectangle-45@2x.png"
              />
            </div>
            <div className={styles.logInUsing}>Log in using Google</div>
            <img className={styles.googleIcon} alt="" src="/google@2x.png" />
          </div>
        </a>
        <div className={styles.loginwithfacebook}>
          <div className={styles.frame2}>
            <div className={styles.wrapperRectangle45}>
              <img
                className={styles.wrapperRectangle45Child}
                alt=""
                src="/rectangle-45@2x.png"
              />
            </div>
            <div className={styles.logInUsing1}>Log in using Facebook</div>
            <img
              className={styles.facebookicon}
              alt=""
              src="/facebookicon@2x.png"
            />
          </div>
        </div>
        <ButtonRegister
          property1DefaultPosition="absolute"
          property1DefaultTop="518px"
          property1DefaultLeft="98px"
          property1DefaultCursor="pointer"
          onLogInButtonClick={onLogInButtonClick}
        />
      </div>
      {isForgotPassPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.4)"
          placement="Centered"
          onOutsideClick={closeForgotPassPopPopup}
        >
          <ForgotPassPop onClose={closeForgotPassPopPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginForm;
