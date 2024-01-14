//import { useState, useCallback } from "react";
import LessonContinuation from "./LessonContinuation";
import PortalPopup from "./PortalPopup";
import InheritencetutCard from "./InheritencetutCard";
import styles from "./FilteredFormCard.module.css";
import { useEffect, dispatch, useState, useCallback } from "react";
import { useTutorialsContext } from "../hooks/useTutorialsContext.js";
import { useAuthContext } from "../hooks/useAuthContext";

const FilteredFormCard = () => {
  const user = useAuthContext();
  const { enrolledTutorials, dispatch } = useTutorialsContext();
  const [isLessonContinuationPopupOpen, setLessonContinuationPopupOpen] =
    useState(false);
  const [isLessonContinuationPopup1Open, setLessonContinuationPopup1Open] =
    useState(false);
  const [isLessonContinuationPopup2Open, setLessonContinuationPopup2Open] =
    useState(false);
  const [isLessonContinuationPopup3Open, setLessonContinuationPopup3Open] =
    useState(false);

  const openLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(true);
  }, []);

  const closeLessonContinuationPopup = useCallback(() => {
    setLessonContinuationPopupOpen(false);
  }, []);

  useEffect(() => {
    const fetchEnrolledTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials/enrolled', {
          headers: { 'Authorization': `Bearer ${user.user.token}` }
        });
        const json = await response.json();
        console.log(json.enrolledTutorials);

        if (response.ok) {
          dispatch({ type: 'GET_ENROLLED_TUTORIALS', payload: json.enrolledTutorials });
        }
      } catch (error) {
        console.error('Error fetching enrolled tutorials:', error.message);
      }
    };

    if (user.user.userEmail) {
      // console.log("HEllo user from inside FF")
      // console.log(user.user)
      fetchEnrolledTutorials();
    }

  }, [user, dispatch]);


  return (
    <>
      <div className={styles.continuejourneycards}>
      {enrolledTutorials &&
  enrolledTutorials.map((enrolledTutorial, index) => {
    const uniqueLanguages = new Set();
    const tutorial = enrolledTutorial.tutId;

    // Check if the tutorial exists and has the progLang property
    if (tutorial && enrolledTutorial.progLang) {
      uniqueLanguages.add(enrolledTutorial.progLang);
      console.log("Rendering FilteredFormCard:", enrolledTutorial.progLang, Array.from(uniqueLanguages));
    } else {
      console.log("Rendering FilteredFormCard: No valid tutorial or progLang property");
    }

    // Calculate row and column indices
    const rowIndex = Math.floor(index / 4);
    const colIndex = index % 4;

    return Array.from(uniqueLanguages).map((language, languageIndex) => (
      <InheritencetutCard
        key={`${enrolledTutorial.tutId._id}-${languageIndex}`}
        tutorial={enrolledTutorial.tutId}
        language={language}
        inheritencetutCardPosition="absolute"
        inheritencetutCardTop={`${50 + rowIndex * 300}px`}
        inheritencetutCardLeft={`${10 + colIndex * 240 + 240 * languageIndex}px`}
        encapsulationTutCardCursor="pointer"
      />
    // return Array.from(uniqueLanguages).map((language, languageIndex) => (
    //   <InheritencetutCard
    //     key={`${enrolledTutorial.tutId._id}-${languageIndex}`}
    //     tutorial={enrolledTutorial.tutId}
    //     language={language}
    //     inheritencetutCardPosition="absolute"
    //     inheritencetutCardTop="0px"
    //     inheritencetutCardLeft={`${10 + 285 * index + 240 * languageIndex}px`}
    //     encapsulationTutCardCursor="pointer"
    //   />
    ));
  })}


      </div>
      {isLessonContinuationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLessonContinuationPopup}
        >
          <LessonContinuation onClose={closeLessonContinuationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilteredFormCard;
