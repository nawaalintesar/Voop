import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import ProfileUpdateConfirmationL from "./ProfileUpdateConfirmationL";
import PortalPopup from "./PortalPopup";
import ProfileDeleteL from "./ProfileDeleteL";
import styles from "./UserUpdate.module.css";

const UserUpdate = () => {
  const [
    isProfileUpdateConfirmationLPopupOpen,
    setProfileUpdateConfirmationLPopupOpen,
  ] = useState(false);
  const [isProfileDeleteLPopupOpen, setProfileDeleteLPopupOpen] =
    useState(false);

  const openProfileUpdateConfirmationLPopup = useCallback(() => {
    setProfileUpdateConfirmationLPopupOpen(true);
  }, []);

  const closeProfileUpdateConfirmationLPopup = useCallback(() => {
    setProfileUpdateConfirmationLPopupOpen(false);
  }, []);

  const openProfileDeleteLPopup = useCallback(() => {
    setProfileDeleteLPopupOpen(true);
  }, []);

  const closeProfileDeleteLPopup = useCallback(() => {
    setProfileDeleteLPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.firstNameGroupParent}>
        <div className={styles.firstNameGroup}>
          <TextField
            className={styles.frame}
            color="secondary"
            name="First Name"
            label="First Name"
            placeholder="First Name"
            sx={{ width: 640 }}
            variant="filled"
            type="text"
          />
          <div className={styles.firstName}>{`First Name `}</div>
        </div>
        <div className={styles.lastNameGroup}>
          <div className={styles.lastName}>Last Name</div>
          <TextField
            className={styles.frame1}
            color="secondary"
            name="Last Name"
            label="Last Name"
            placeholder="Last Name"
            sx={{ width: 640 }}
            variant="filled"
            type="text"
          />
        </div>
        <div className={styles.groupemailAddressGroup}>
          <div className={styles.emailAddress}>{`Email address `}</div>
          <TextField
            className={styles.frame2}
            color="secondary"
            name="Email"
            label="Email"
            placeholder="Email"
            sx={{ width: 640 }}
            variant="filled"
            type="text"
          />
        </div>
        <div className={styles.phoneNumberGroup}>
          <div className={styles.phoneNumber}>Phone Number</div>
          <TextField
            className={styles.frame1}
            color="secondary"
            name="Phone Number"
            label="Phone Number"
            placeholder="Phone Number"
            sx={{ width: 640 }}
            variant="filled"
            type="tel"
          />
        </div>
        <div className={styles.updateButtonGroup}>
          <div
            className={styles.button}
            onClick={openProfileUpdateConfirmationLPopup}
          >
            <div className={styles.update}>Update</div>
          </div>
        </div>
        <div className={styles.deleteAccountGroup}>
          <div className={styles.doYouWish}>
            Do you wish to delete your account?
          </div>
          <button
            className={styles.clickHere}
            onClick={openProfileDeleteLPopup}
          >
            Click Here
          </button>
        </div>
      </div>
      {isProfileUpdateConfirmationLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileUpdateConfirmationLPopup}
        >
          <ProfileUpdateConfirmationL
            onClose={closeProfileUpdateConfirmationLPopup}
          />
        </PortalPopup>
      )}
      {isProfileDeleteLPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileDeleteLPopup}
        >
          <ProfileDeleteL onClose={closeProfileDeleteLPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserUpdate;
