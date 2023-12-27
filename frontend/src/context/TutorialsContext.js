import { createContext, useReducer } from 'react';

export const TutorialsContext = createContext();
export const tutorialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TUTORIALS':
      return { 
        tutorials: action.payload 
      }
    // Add other cases as needed
    default:
      return state;
  }
}

export const TutorialsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tutorialsReducer, { 
    tutorials: null
  });
  return (
    <TutorialsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TutorialsContext.Provider>
  )
}