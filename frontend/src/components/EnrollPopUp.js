import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./EnrollPopUp.module.css";


import { useState, useCallback, useContext } from "react";
import PortalPopup from "./PortalPopup";
import ConfirmEnrollment from "./ConfirmEnrollment";
import { enrollTutorialAction } from '../context/TutorialsContext'
import { TutorialsContext } from '../context/TutorialsContext';
import { useTutorialsContext } from '../hooks/useTutorialsContext'
import { useAuthContext } from "../hooks/useAuthContext";

const EnrollPopUp = ({ onClose, tutorialId }) => {

  var selectedLanguage="";
  const user=useAuthContext();
  //const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isConfirmEnrollmentPopupOpen, setConfirmEnrollmentPopupOpen] =
    useState(false);

  const openConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(true);
  }, []);

  const closeConfirmEnrollmentPopup = useCallback(() => {
    setConfirmEnrollmentPopupOpen(false);
  }, []);

  const onLanguageChange = (value) => {
    selectedLanguage=value;
  };

  const enrolledTutorials = useTutorialsContext();
  const { dispatch } = useContext(TutorialsContext);
 
  const onEnrollButtonClick = useCallback(async () => {
    // console.log("Lang is: ", selectedLanguage);
    // console.log("Tutid is: ", tutorialId);

    await enrollTutorialAction(dispatch, selectedLanguage, tutorialId, user);
    // You can add additional logic or close the popup after enrollment
    console.log("The user has enrolled in", enrolledTutorials);
    onClose();
  }, [dispatch, onClose, tutorialId]);

  return (
    <div className={styles.enrollPopUp}>
      <div className={styles.frameforforgetpass}>
        <div className={styles.chooseYourLanguageParent}>
          <div id="langChoice" className={styles.chooseYourLanguage}>Choose your language</div>
          <Select
            className={styles.javaParent}
            placeholder="Choose language"
            style={{ width: "226px" }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            virtual={false}
            showArrow={false}
            onChange={(value) => {
              console.log('Selected value:', value);
              onLanguageChange(value);
            }}
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
        <div className={styles.button} onClick={() => { closeConfirmEnrollmentPopup(); onClose(); }}>
          <button className={styles.button} onClick={onEnrollButtonClick} > <div className={styles.save}>Enroll</div> </button>
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
