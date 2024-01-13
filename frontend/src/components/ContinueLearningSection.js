// ContinueLearningSection.js
import React from "react";
import { useTutorialsContext } from "../hooks/useTutorialsContext.js";
import InheritencetutCard from "./InheritencetutCard";
import styles from "./ContinueLearningSection.module.css";

const ContinueLearningSection = () => {
  const { enrolledTutorials } = useTutorialsContext();

  return (
    <div className={styles.continueLearning}>
      {enrolledTutorials &&
        enrolledTutorials.map((enrolledTutorial, index) => {
          const uniqueLanguages = new Set();
          const tutorial = enrolledTutorial.tutId;

          // Check if the tutorial exists and has the progLang property
          if (tutorial && enrolledTutorial.progLang) {
            uniqueLanguages.add(enrolledTutorial.progLang);
            console.log(
              "Rendering ContinueLearningSection:",
              enrolledTutorial.progLang,
              Array.from(uniqueLanguages)
            );
          } else {
            console.log(
              "Rendering ContinueLearningSection: No valid tutorial or progLang property"
            );
          }

          // Calculate row and column indices
          const rowIndex = Math.floor(index / 4);
          const colIndex = index % 4;

          return Array.from(uniqueLanguages).slice(0,4).map((language, languageIndex) => (
            <InheritencetutCard
              key={`${enrolledTutorial.tutId._id}-${languageIndex}`}
              tutorial={enrolledTutorial.tutId}
              language={language}
              inheritencetutCardPosition="absolute"
              inheritencetutCardTop={`${50 + rowIndex * 300}px`}
              inheritencetutCardLeft={`${10 + colIndex * 240 + 240 * languageIndex}px`}
              encapsulationTutCardCursor="pointer"
            />
          ));
        })}
    </div>
  );
};

export default ContinueLearningSection;
