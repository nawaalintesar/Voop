import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./EnrollPopUp.module.css";

import PortalPopup from "./PortalPopup";
import { useState, useCallback } from "react";
import ConfirmEnrollment from "./ConfirmEnrollment";

const EnrollPopUp = ({ onClose }) => {

  const [isConfirmEnrollmentPopupOpen, setConfirmEnrollmentPopupOpen] =
    useState(false);

  const openConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(true);
  }, []);

  const closeConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(false);
  }, []);

  return (
    <div className={styles.enrollPopUp}>
      <div className={styles.frameforforgetpass}>
        <div className={styles.chooseYourLanguageParent}>
          <div className={styles.chooseYourLanguage}>Choose your language</div>
          <Select
            className={styles.javaParent}
            placeholder="Choose language"
            style={{ width: "226px" }}
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
        </div>
      </div>
      <div className={styles.frameforcross}>
        <img
          className={styles.pagecrossIcon}
          alt=""
          src="/pagecross31.svg"
          onClick={onClose}
        />
      </div>
      <div className={styles.buttondone}>
        <div className={styles.button} onClick={openConfirmEnrollmentPopup}>
          <button className={styles.button} > <div className={styles.save}>Enroll</div> </button> 
        </div>
      </div>

      {isConfirmEnrollmentPopupOpen && (
      <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeConfirmEnrollmentPopup}
      >
        <ConfirmEnrollment onClose={closeConfirmEnrollmentPopup} />
      </PortalPopup>
    )}
    </div>

     
  );
};

export default EnrollPopUp;
