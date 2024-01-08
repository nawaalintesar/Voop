import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])
  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}

// import React, { createContext, useReducer, useEffect } from 'react';

// // Define initial state for authentication
// const initialState = {
//   user: null,
// };

// // Create context for authentication
// export const AuthContext = createContext();

// // Reducer function for handling authentication actions
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { ...state, user: action.payload };
//     case 'LOGOUT':
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// // AuthContextProvider component to manage authentication state
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     // Check if user data exists in localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       dispatch({ type: 'LOGIN', payload: storedUser });
//     }
//   }, []);

//   useEffect(() => {
//     // Update localStorage when user state changes
//     localStorage.setItem('user', JSON.stringify(state.user));
//   }, [state.user]);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
