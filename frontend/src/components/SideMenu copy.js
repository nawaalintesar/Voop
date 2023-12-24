import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideMenu.module.css";

const SideMenu = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onDashboardSMContainerClick = useCallback(() => {
    // Please sync "Dashboard-L" to the project
  }, []);

  const onMytutorialSMContainerClick = useCallback(() => {
    // Please sync "Mytutorials-L" to the project
  }, []);

  const onMyProjectSMContainerClick = useCallback(() => {
    navigate("/myprojectsl");
  }, [navigate]);

  const onUserProfileSMContainerClick = useCallback(() => {
    navigate("/user-profile-pagel");
  }, [navigate]);

  const onUsericonContainerClick = useCallback(() => {
    // Please sync "User Profile Page- L" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    // Please sync "My Projects-L" to the project
  }, []);

  return (
    <div className={styles.sideMenu} data-animate-on-scroll>
      <div className={styles.hamburgericon}>
        <img
          className={styles.fiBrMenuBurgerIcon}
          alt=""
          src="/fibrmenuburger@2x.png"
          onClick={onClose}
        />
      </div>
      <div className={styles.dashboardsmParent}>
        <div
          className={styles.dashboardsm}
          onClick={onDashboardSMContainerClick}
        >
          <img
            className={styles.layoutgrid4Icon}
            alt=""
            src="/layoutgrid41@2x.png"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <div
          className={styles.mytutorialsm}
          onClick={onMytutorialSMContainerClick}
        >
          <img
            className={styles.interfaceEssentialbookIcon}
            alt=""
            src="/interface-essentialbook1@2x.png"
          />
          <div className={styles.myTutorials}>My Tutorials</div>
        </div>
        <div
          className={styles.myprojectsm}
          onClick={onMyProjectSMContainerClick}
        >
          <div className={styles.foldermultiFolderParent}>
            <img
              className={styles.foldermultiFolderIcon}
              alt=""
              src="/foldermultifolder@2x.png"
            />
            <div className={styles.myProjects}>My Projects</div>
          </div>
        </div>
        <div
          className={styles.dashboardsm}
          onClick={onUserProfileSMContainerClick}
        >
          <div className={styles.usericon} onClick={onUsericonContainerClick}>
            <button
              className={styles.usericon1}
              id="projectIcon"
              onClick={onUserIconClick}
            />
            <img
              className={styles.usericonom}
              alt=""
              src="/usericonom@2x.png"
            />
          </div>
          <div className={styles.userProfile}>User Profile</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
