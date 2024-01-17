import { useCallback } from "react";
import TutorialSTEPS from "./TutorialSTEPS";
import TutorialStep from "./TutorialStep";
import TutorialAddingReco from "./TutorialAddingReco";
import TutorialStepPro from "./TutorialStepPro";
import styles from "./Step.module.css";

const Step = () => {
  const onVectorIcon1Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Tutorials 2" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    // Please sync "Code Editor- After Log In- Tutorials 1" to the project
  }, []);

  const onVectorIcon12Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Tutorials 3" to the project
  }, []);

  const onVectorIcon13Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 4" to the project
  }, []);

  const onVectorIcon3Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 3" to the project
  }, []);

  const onVectorIcon14Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 5" to the project
  }, []);

  const onVectorIcon32Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onVectorIcon4Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 4" to the project
  }, []);

  const onVectorIcon15Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onVectorIcon33Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onVectorIcon5Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 6" to the project
  }, []);

  const onVectorIcon16Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 7" to the project
  }, []);

  const onVectorIcon22Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 3" to the project
  }, []);

  const onVectorIcon34Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 3" to the project
  }, []);


  const onVectorIcon23Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 3" to the project
  }, []);

  const onGetCodingButtonClick = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 9" to the project
  }, []);

  const onGetCodingButton2Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Projects 11" to the project
  }, []);

  const onVectorIcon7Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Tutorials 2" to the project
  }, []);

  const onVectorIcon17Click = useCallback(() => {
    // Please sync "Code Editor- After Log In- Tutorials 4" to the project
  }, []);

  return (
    <div className={styles.step1}>
      <TutorialSTEPS
        stepTitle="Walkthrough Step 1"
        stepDescription="/vector.svg"
        carClassDescription="Car is a class that has 6 attributes, 2 of them are encapsulated"
        stepFraction="1/3"
        contentTop="20px"
        onVectorIcon15Click={onVectorIcon1Click}
      />
      <TutorialSTEPS
        stepTitle="Walkthrough Step 2"
        stepDescription="/vector.svg"
        carClassDescription="Super car is a type of car, so it inherits certain characteristics from car such as the make and the display function. It also has its own attribute called topSpeed which is unique to it. "
        stepFraction="2/3"
        contentTop="119px"
        onVectorIcon15Click={onVectorIcon12Click}
      />
      <div className={styles.property1variant3}>
        <div className={styles.content}>
          <div className={styles.walkthroughStep3}>Walkthrough Step 3</div>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector.svg"
            onClick={onVectorIcon7Click}
          />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector.svg"
            onClick={onVectorIcon17Click}
          />
          <div className={styles.suvIsAnother}>
            SUV is another type of car so it also inherits all the
            characteristics of a car by default. It also has its own attribute
            called offRoadCapability that is unique to it. Note that the
            constructor in each class has small variations.
          </div>
          <div className={styles.div}>3/3</div>
        </div>
      </div>
      <TutorialStep
        oopConceptTitles="Identified OOP Concept- Classes 1/2"
        conceptTitle="/vector.svg"
        conceptDescription="/vector.svg"
        conceptCode="/vector.svg"
        conceptCodeImageUrls="/vector.svg"
        carMake="The first class identified is Car. It has an attribute “make” and a function called “displayInfo” "
        conceptCodeDimensions="1/3"
        propTop="317px"
        propLeft="20px"
        propRight="51.74%"
        propLeft1="46.86%"
        propRight1="48.66%"
        propLeft2="49.95%"
        onVectorIcon1Click={onVectorIcon13Click}
        onVectorIcon3Click={onVectorIcon3Click}
      />
      <TutorialStep
        oopConceptTitles="Identified OOP Concept- Classes 1/2"
        conceptTitle="/vector.svg"
        conceptDescription="/vector.svg"
        conceptCode="/vector.svg"
        conceptCodeImageUrls="/vector.svg"
        carMake="The next class identified is Sports Car. It has an attribute “make” and a function called “displayInfo” and an additional unique attribute called topSpeed"
        conceptCodeDimensions="2/3"
        propTop="416px"
        propLeft="20px"
        propRight="51.56%"
        propLeft1="47.04%"
        propRight1="48.47%"
        propLeft2="50.13%"
        onVectorIcon4Click={onVectorIcon2Click}
        onVectorIcon1Click={onVectorIcon14Click}
        onVectorIcon3Click={onVectorIcon32Click}
      />
      <TutorialStep
        oopConceptTitles="Identified OOP Concept- Classes 1/2"
        conceptTitle="/vector.svg"
        conceptDescription="/vector.svg"
        conceptCode="/vector.svg"
        conceptCodeImageUrls="/vector.svg"
        carMake="The next class identified is SUV. It has an attribute “make” and a function called “displayInfo” and an additional unique attribute called offRoadCapability"
        conceptCodeDimensions="3/3"
        propTop="515px"
        propLeft="20px"
        propRight="51.56%"
        propLeft1="47.04%"
        propRight1="48.47%"
        propLeft2="50.13%"
        onVectorIcon4Click={onVectorIcon4Click}
        onVectorIcon1Click={onVectorIcon15Click}
        onVectorIcon3Click={onVectorIcon33Click}
      />
      <TutorialStep
        oopConceptTitles="Identified OOP Concept- Inheritance 2/2"
        conceptTitle="/vector.svg"
        conceptDescription="/vector.svg"
        conceptCode="/vector.svg"
        conceptCodeImageUrls="/vector.svg"
        carMake="Notice that SUV “extends” from Car to inherit all the attributes and functions of Car. "
        conceptCodeDimensions="1/2"
        propTop="614px"
        propLeft="20px"
        propRight="51.02%"
        propLeft1="47.58%"
        propRight1="47.93%"
        propLeft2="50.67%"
        onVectorIcon4Click={onVectorIcon5Click}
        onVectorIcon1Click={onVectorIcon16Click}
        onVectorIcon22Click={onVectorIcon22Click}
        onVectorIcon3Click={onVectorIcon34Click}
      />
      <TutorialStep
        oopConceptTitles="Identified OOP Concept- Inheritance 2/2"
        conceptTitle="/vector.svg"
        conceptDescription="/vector.svg"
        conceptCode="/vector.svg"
        conceptCodeImageUrls="/vector.svg"
        carMake="Notice that Sports Car “extends” from Car to inherit all the attributes and functions of Car. "
        conceptCodeDimensions="2/2"
        propTop="713px"
        propLeft="20px"
        propRight="51.02%"
        propLeft1="47.58%"
        propRight1="47.93%"
        propLeft2="50.67%"
        onVectorIcon22Click={onVectorIcon23Click}
      />
      <TutorialAddingReco
        recommendedAdditionsClass="Recommended Additions- Classes 1/4"
        recommendedAdditionsClass2="/vector.svg"
        recommendedAdditionsClass3="/vector.svg"
        recommendedAdditionsClass4="/vector.svg"
        recommendedAdditionsClass5="/vector.svg"
        recommendedAdditionsClass6="You can add a class called Sedan to understand the inheritance from Car better."
        recommendedAdditionsClass7="1/2"
        propTop="812px"
        propWidth="70.29%"
        onGetCodingButtonClick={onGetCodingButtonClick}
      />
      <TutorialAddingReco
        recommendedAdditionsClass="Recommended Additions- Classes 1/4"
        recommendedAdditionsClass2="/vector.svg"
        recommendedAdditionsClass3="/vector.svg"
        recommendedAdditionsClass4="/vector.svg"
        recommendedAdditionsClass5="/vector.svg"
        recommendedAdditionsClass6="You can add a super class Vehicle that is a parent to the class Car. "
        recommendedAdditionsClass7="2/2"
        propTop="911px"
        propWidth="70.29%"
      />
      <TutorialAddingReco
        recommendedAdditionsClass="Recommended Additions- Attributes 2/4"
        recommendedAdditionsClass2="/vector.svg"
        recommendedAdditionsClass3="/vector.svg"
        recommendedAdditionsClass4="/vector.svg"
        recommendedAdditionsClass5="/vector.svg"
        recommendedAdditionsClass6="You can add an attribute model to the parent class and override it in the child classes"
        recommendedAdditionsClass7="1/1"
        propTop="1010px"
        propWidth="70.29%"
      />
      <TutorialAddingReco
        recommendedAdditionsClass="Recommended Additions- Functions 3/4"
        recommendedAdditionsClass2="/vector.svg"
        recommendedAdditionsClass3="/vector.svg"
        recommendedAdditionsClass4="/vector.svg"
        recommendedAdditionsClass5="/vector.svg"
        recommendedAdditionsClass6="You can add a function called drivable() that implements an interface"
        recommendedAdditionsClass7="1/1"
        propTop="1109px"
        propWidth="70.29%"
      />
      <TutorialAddingReco
        recommendedAdditionsClass="Recommended Additions- Relations 4/4"
        recommendedAdditionsClass2="/vector.svg"
        recommendedAdditionsClass3="/vector.svg"
        recommendedAdditionsClass4="/vector.svg"
        recommendedAdditionsClass5="/vector.svg"
        recommendedAdditionsClass6="You can add inhertiance between Sedan and Sports Car since they can share make and model in common"
        recommendedAdditionsClass7="1/1"
        propTop="1208px"
        propWidth="90.81%"
      />
      <TutorialStepPro
        recommendedRemovals="Recommended Removals- Classes 1/2"
        removalsDescription="/vector.svg"
        removalsTitle="/vector.svg"
        removalsList="You can remove the Sedan class that was just added since it was just an example"
        propTop="1307px"
        onGetCodingButton2Click={onGetCodingButton2Click}
      />
      <TutorialStepPro
        recommendedRemovals="Recommended Removals- Relations 2/2"
        removalsDescription="/vector.svg"
        removalsTitle="/vector.svg"
        removalsList="You can remove the encapsulation of model since it does not need to be private."
        propTop="1406px"
      />
    </div>
  );
};

export default Step;
