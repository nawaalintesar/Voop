import { createContext, useReducer } from 'react';

export const ProjectsContext = createContext();
export const projectssReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return {
        ...state,
        projects: action.payload
      };
    case 'GET_PROJECT':
      return {
        ...state,
        project: action.payload
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        project: action.payload
      };
    case 'CREATE_PROJECT':
      return {
        ...state,
        project: action.payload
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        project: { ...state.project, ...action.payload },
      }
    default:
      return state;
  }
};


export const ProjectsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectssReducer, {
    projects: null,
    project: null
  });
  const updateProject = (updatedCode) => {
    dispatch({ type: 'UPDATE_PROJECT', payload: updatedCode });
  };
  return (
    <ProjectsContext.Provider value={{ ...state, dispatch, updateProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};
