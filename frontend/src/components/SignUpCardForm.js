import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./SignUpCardForm.module.css";

const SignUpCardForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.signupform}>
      <div className={styles.frame}>
        <b className={styles.signUp}>{`Sign up `}</b>
      </div>
      <div className={styles.frame1}>
        <TextField
          className={styles.frame2}
          color="secondary"
          label="Last Name "
          placeholder="Last Name"
          required={true}
          sx={{ width: 199 }}
          variant="filled"
          type="text"
        />
        <TextField
          className={styles.frame3}
          color="secondary"
          label="First Name "
          placeholder="First Name"
          required={true}
          sx={{ width: 199 }}
          variant="filled"
        />
      </div>
      <TextField
        className={styles.frame4}
        color="secondary"
        name="Email address"
        label=" Email address "
        placeholder="Email address"
        required={true}
        sx={{ width: 415 }}
        variant="filled"
        type="email"
      />
      <TextField
        className={styles.frame5}
        color="secondary"
        name="Phone Number"
        label="Phone Number"
        placeholder="Phone Number"
        variant="filled"
        type="tel"
      />
      <TextField
        className={styles.frame6}
        color="secondary"
        name="Password "
        label="Password "
        placeholder="Password "
        required={true}
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
      <TextField
        className={styles.frame6}
        color="secondary"
        name="Confirm Password "
        label="Confirm Password "
        placeholder="Confirm Password "
        required={true}
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
    </div>
  );
};

export default SignUpCardForm;
