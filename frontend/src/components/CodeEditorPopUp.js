import { useState } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./CodeEditorPopUp.module.css";

const CodeEditorPopUp = ({ onClose }) => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  return (
    <div className={styles.codeeditorpopup}>
      <div className={styles.codeeditorpopupChild} />
      <div className={styles.newFileDetails}>New File Details</div>
      <div className={styles.enterFileName}>Enter File Name</div>
      <div className={styles.div}>.</div>
      <input
        className={styles.codeeditorpopupItem}
        name="Enter Name"
        placeholder=" Name"
        type="text"
        value={rectangleInputValue}
        onChange={(event) => setRectangleInputValue(event.target.value)}
        padding-left="1.3rem"
      />
      <Select
        className={styles.chooselanguagedropdown}
        placeholder="ext"
        size="small"
        style={{ width: "70px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={false}
        showArrow={false}
      >
        <Select.Option value="C++">C++</Select.Option>
        <Select.Option value="Java">Java</Select.Option>
        <Select.Option value="Python">Python</Select.Option>
      </Select>
      <div className={styles.or}>OR</div>
      <div className={styles.uploadAFile}>Upload a file</div>
      <input
        className={styles.codeeditorpopupInner}
        type="file"
        colour="white"
        background-color="#4C4863"
        padding-left="1.3rem"
      />
      <div className={styles.buttonsave}>
        <div className={styles.button} onClick={onClose}>
          <div className={styles.save}>Save</div>
        </div>
      </div>
      <div className={styles.buttoncancel} onClick={onClose}>
        <div className={styles.button} onClick={onClose}>
          <div className={styles.save}>Cancel</div>
        </div>
      </div>
      <img
        className={styles.pagecrossIcon}
        alt=""
        src="/pagecross2.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default CodeEditorPopUp;
