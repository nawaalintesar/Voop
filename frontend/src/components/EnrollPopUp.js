import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./EnrollPopUp.module.css";

const EnrollPopUp = ({ onClose }) => {
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
        <div className={styles.button} onClick={onClose}>
          <div className={styles.save}>Enroll</div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPopUp;
