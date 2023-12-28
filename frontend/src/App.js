
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import MytutorialsL from "./pages/MytutorialsL";
import CodeEditorBeforeLogin from "./pages/CodeEditorBeforeLogin";
import CodeEditorAfterLogin from "./pages/CodeEditorAfterLogin";
import GenericTutorialPageL from "./pages/GenericTutorialPageL";
import HomePageL from "./pages/HomePageL";
import Projects from "./pages/Projects";
import FilteredFormCard from "./components/FilteredFormCard";
import UserProfilePageL from "./pages/UserProfilePageL";
import { TutorialsContextProvider } from './context/TutorialsContext';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (

    <Routes>
      <Route path="/" element={<HomePageL />} />
      <Route path="/mytutorialsl" element={
        <TutorialsContextProvider>
          <MytutorialsL />
        </TutorialsContextProvider>
      
      } />
     <Route path="/SignIn" element={<SignIn />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/CodeEditorBeforeLogin" element={<CodeEditorBeforeLogin />} />
      <Route path="/CodeEditorAfterLogin" element={<CodeEditorAfterLogin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/generictutorialpagel" element={
    
    <TutorialsContextProvider>
      <GenericTutorialPageL/>
        </TutorialsContextProvider>
      
    
    
    } />
      <Route path="/myprojectsl" element={<Projects />} />
      <Route path="/user-profile-pagel" element={<UserProfilePageL />} />
    </Routes>
  );
}

export default App;

