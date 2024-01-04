
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
import Tutorials from "./pages/Tutorials";
import CodeEditorBeforeLogin from "./pages/CodeEditorBeforeLogin";
import CodeEditorAfterLogin from "./pages/CodeEditorAfterLogin";
import GenericTutorial from "./pages/GenericTutorial";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FilteredFormCard from "./components/FilteredFormCard";
import Profile from "./pages/Profile";
import { TutorialsContextProvider } from './context/TutorialsContext';
import { ProjectsContextProvider } from "./context/ProjectsContext";
import { ProfilesContextProvider } from "./context/ProfilesContext";
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
      <Route path="/" element={<Home />} />
      <Route path="/Tutorials" element={
        <TutorialsContextProvider>
          <Tutorials />
        </TutorialsContextProvider>
      } />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/CodeEditorBeforeLogin" element={<CodeEditorBeforeLogin />} />
      <Route path="/CodeEditorAfterLogin" element={

         <ProjectsContextProvider>
           <CodeEditorAfterLogin />
         </ProjectsContextProvider>
      } />
      <Route path="/Dashboard" element={
        <TutorialsContextProvider>
          <ProjectsContextProvider>
            <Dashboard />
          </ProjectsContextProvider>
        </TutorialsContextProvider>
      } />
      <Route path="/GenericTutorial" element={
        <TutorialsContextProvider>
          <GenericTutorial />
        </TutorialsContextProvider>
      } />
      <Route path="/Projects" element={
        <ProjectsContextProvider>
          <Projects />
        </ProjectsContextProvider>} />

      <Route path="/Profile" element={
        <ProfilesContextProvider>
          <Profile />
        </ProfilesContextProvider>
      } />
    </Routes>
  );
}

export default App;

