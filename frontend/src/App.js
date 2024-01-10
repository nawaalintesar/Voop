
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

import LogIn from "./pages/LogIn";
import Tutorials from "./pages/Tutorials";
import CodeEditorBeforeLogin from "./pages/CodeEditorBeforeLogin";
import CodeEditorAfterLogin from "./pages/CodeEditorAfterLogin";
import GenericTutorial from "./pages/GenericTutorial";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import { TutorialsContextProvider } from './context/TutorialsContext';
import { ProfilesContextProvider } from "./context/ProfilesContext";
import { ProjectsContextProvider } from "./context/ProjectsContext";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const user = useAuthContext();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }

  }, [action, pathname]);

  console.log("User is:", user.user);

  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Tutorials" element={user.user ?
        <TutorialsContextProvider>
          <Tutorials />
        </TutorialsContextProvider>
        : <Navigate to="/LogIn" />

      } />

      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/CodeEditorBeforeLogin" element={<CodeEditorBeforeLogin />} />

      <Route path="/CodeEditorAfterLogin" element={user.user ?
        <TutorialsContextProvider>
          <ProjectsContextProvider>
            <CodeEditorAfterLogin />
          </ProjectsContextProvider>
        </TutorialsContextProvider>
        : <Navigate to="/LogIn" />
      } />
      <Route path="/Dashboard" element={user.user ?
        <TutorialsContextProvider>
          <ProjectsContextProvider>
            <Dashboard />
          </ProjectsContextProvider>
        </TutorialsContextProvider>
        : <Navigate to="/LogIn" />

      } />
      <Route path="/GenericTutorial" element={user.user ?
        <TutorialsContextProvider>
          <GenericTutorial />
        </TutorialsContextProvider>
        : <Navigate to="/LogIn" />
      } />
      <Route path="/Projects"
        element={user.user ?

          <ProjectsContextProvider>
            <Projects />
          </ProjectsContextProvider>

          :
          <Navigate to="/LogIn" />

        }
      />

      <Route path="/Profile" element={
        user.user ?
          <ProfilesContextProvider>
            <Profile />
          </ProfilesContextProvider> : <Navigate to="/LogIn" />
      } />

    </Routes>
  );
}

export default App;
