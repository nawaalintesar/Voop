import { useContext } from 'react';
import { ProfilesContext } from '../context/ProfilesContext';

export const useProfilesContext = () => {
  const context = useContext(ProfilesContext);

  if (!context) {
    throw new Error('useProfilesContext must be used inside a ProfilesContextProvider');
  }

  return context;
};

