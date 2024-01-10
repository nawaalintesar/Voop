import { createContext, useReducer } from 'react';

export const TutorialsContext = createContext();
export const tutorialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TUTORIALS':
      return {
        ...state,
        tutorials: action.payload
      };
    case 'GET_ENROLLED_TUTORIALS':
      return {
        ...state,
        enrolledTutorials: action.payload
      };
    case 'GET_TUTORIAL':
      return {
        ...state,
        tutorial: action.payload
      };
    case 'ENROLL_TUTORIAL_SUCCESS':
      return {
        ...state,
        enrolledTutorials: [...state.enrolledTutorials, action.payload.tutorialId],
      };
    case 'ENROLL_TUTORIAL_FAILURE':
      // Handle failure, you may want to show an error message to the user
      return state;
    // Add other cases as needed
    default:
      return state;
  }
};


export const TutorialsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tutorialsReducer, {
    tutorials: null,
    enrolledTutorials: null,
    tutorial: null
  });
  return (
    <TutorialsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TutorialsContext.Provider>
  );
};
export const enrollTutorialAction = async (dispatch, language, tutorialId) => {
  try {
    const response = await fetch(`/api/tutorials/${tutorialId}/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add any necessary authentication headers or tokens
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'ENROLL_TUTORIAL_SUCCESS', payload: { language, tutorialId } });
    } else {
      dispatch({ type: 'ENROLL_TUTORIAL_FAILURE' });
    }
  } catch (error) {
    console.error('Error enrolling tutorial:', error);
    dispatch({ type: 'ENROLL_TUTORIAL_FAILURE' });
  }
};
