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
        
        {enrolledTutorials && enrolledTutorials.slice(0, 4).map((enrolledTutorial, index) => {
          
            <InheritencetutCard
              key={enrolledTutorial._id}
              tutorial={enrolledTutorial}
              inheritencetutCardPosition="absolute"
              inheritencetutCardTop="0px"
              inheritencetutCardLeft={`${0 + 250 * index}px`}
              encapsulationTutCardCursor="pointer"
            />
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
