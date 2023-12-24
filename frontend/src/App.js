//import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
/*import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}*/
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardL from "./pages/DashboardL";
import MytutorialsL from "./pages/MytutorialsL";
import GenericTutorialPageL from "./pages/GenericTutorialPageL";
import HomePageL from "./pages/HomePageL";
import MyProjectsAfterDeleteL from "./pages/MyProjectsAfterDeleteL";
import MyProjectsL from "./pages/MyProjectsL";
import UserProfilePageL from "./pages/UserProfilePageL";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/DashboardL":
          title = "";
          metaDescription = "";
          break;
      case "/mytutorialsl":
        title = "";
        metaDescription = "";
        break;
      case "/generictutorialpagel":
        title = "";
        metaDescription = "";
        break;
      case "/myprojectsafterdeletel":
        title = "";
        metaDescription = "";
        break;
      case "/myprojectsl":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile-pagel":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageL />} />
      <Route path="/mytutorialsl" element={<MytutorialsL />} />
      <Route path="/DashboardL" element={<DashboardL />} />
      <Route path="/generictutorialpagel" element={<GenericTutorialPageL />} />
      <Route path="/myprojectsafterdeletel" element={<MyProjectsAfterDeleteL />} />
      <Route path="/myprojectsl" element={<MyProjectsL />} />
      <Route path="/user-profile-pagel" element={<UserProfilePageL />} />
    </Routes>
  );
}

export default App;

