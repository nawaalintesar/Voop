import { createContext, useReducer } from 'react';

export const ProfilesContext = createContext();
export const profilesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        users: action.payload,
      };
    case 'UPDATE_ACCOUNT_INFO':
      return {
        ...state,
        users: { ...state.users, ...action.payload },
      };

    case 'UPDATE_ENROLMENT':
      return{

      }

    default:
      return state;
  }
};

export const ProfilesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profilesReducer, {
    users: null,
  });

  const updateProfile = (updatedData) => {
    dispatch({ type: 'UPDATE_ACCOUNT_INFO', payload: updatedData });
  };

  return (
    <ProfilesContext.Provider value={{ ...state, dispatch, updateProfile }}>
      {children}
    </ProfilesContext.Provider>
  );
};


