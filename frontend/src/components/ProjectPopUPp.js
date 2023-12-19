import { useState } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./ProjectPopUPp.module.css";

const ProjectPopUPp = ({ onClose }) => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  return (
    <div className={styles.projectPopUpp}>
      <div className={styles.projectPopUppChild} />
      <img
        className={styles.pagecrossIcon}
        alt=""
        src="/pagecross41.svg"
        onClick={onClose}
      />
      <div className={styles.frameParent}>
        <div className={styles.projectDetailsParent}>
          <div className={styles.projectDetails}>Project Details</div>
          <div className={styles.name}>Name</div>
          <input
            className={styles.frameChild}
            name="Enter Name"
            placeholder=" Name"
            type="text"
            value={rectangleInputValue}
            onChange={(event) => setRectangleInputValue(event.target.value)}
            padding-left="1.3rem"
          />
          <div className={styles.name}>Choose Language</div>
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
        <div className={styles.buttonsave}>
          <div className={styles.button} onClick={onClose}>
            <div className={styles.save}>Save</div>
          </div>
        </div>
        <div className={styles.buttoncancel} onClick={onClose}>
          <div className={styles.button1} onClick={onClose}>
            <div className={styles.save}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopUPp;
