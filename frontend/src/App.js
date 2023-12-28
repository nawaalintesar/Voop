
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardL from "./pages/DashboardL";
import SignInL from "./pages/SignInL";
import SignInDL from "./pages/SignInDL";
import LogInL from "./pages/LogInL";
import MytutorialsL from "./pages/MytutorialsL";
import CodeEditorBeforeLogin from "./pages/CodeEditorBeforeLogin";
import CodeEditorAfterLogin from "./pages/CodeEditorAfterLogin";
import GenericTutorialPageL from "./pages/GenericTutorialPageL";
import HomePageL from "./pages/HomePageL";
import MyProjectsL from "./pages/MyProjectsL";
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
     <Route path="/SignInL" element={<SignInL />} />
      <Route path="/SignInDL" element={<SignInDL />} /> 
      <Route path="/LogInL" element={<LogInL />} />
      <Route path="/CodeEditorBeforeLogin" element={<CodeEditorBeforeLogin />} />
      <Route path="/CodeEditorAfterLogin" element={<CodeEditorAfterLogin />} />
      <Route path="/DashboardL" element={<DashboardL />} />
      <Route path="/generictutorialpagel" element={
    
    <TutorialsContextProvider>
      <GenericTutorialPageL/>
        </TutorialsContextProvider>
      
    
    
    } />
      <Route path="/myprojectsl" element={<MyProjectsL />} />
      <Route path="/user-profile-pagel" element={<UserProfilePageL />} />
    </Routes>
  );
}

export default App;

