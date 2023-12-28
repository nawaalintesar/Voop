import TutorialExampleLevel3 from "./TutorialExampleLevel3";
import styles from "./TutorialExamplesContainer1.module.css";

const TutorialExamplesContainer1 = () => {
  return (
    <div className={styles.tutorialexamples}>
      <div className={styles.tutorialExamples}>Tutorial Examples</div>
      <TutorialExampleLevel3
        lessonTitle="Level 1"
        lessonDescription="Learn how to make objects using animal examples "
        property1DefaultWidth="100%"
        property1DefaultHeight="23.19%"
        property1DefaultPosition="absolute"
        property1DefaultTop="21.99%"
        property1DefaultRight="0%"
        property1DefaultBottom="54.82%"
        property1DefaultLeft="0%"
      />

    </div>
  );
};

export default TutorialExamplesContainer1;
