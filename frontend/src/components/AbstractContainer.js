// import { useMemo } from "react";
// import styles from "./AbstractContainer.module.css";

// const AbstractContainer = ({
//   tutorial,
//   conceptDescription,
//   propLeft,
//   propBackground,
//   propLetterSpacing,
//   propLineHeight,
//   onTutContainerClick={onTutContainerClick},
// }) => {
//   const interfaceTutStyle = useMemo(() => {
//     return {
//       left: propLeft,
//     };
//   }, [propLeft]);

//   const rectangleDivStyle = useMemo(() => {
//     return {
//       background: propBackground,
//     };
//   }, [propBackground]);

//   const interfacesDefineAStyle = useMemo(() => {
//     return {
//       letterSpacing: propLetterSpacing,
//       lineHeight: propLineHeight,
//     };
//   }, [propLetterSpacing, propLineHeight]);

//   return (
//     <div className={styles.interfacetut}
//       onClick={onTutContainerClick}
//       style={interfaceTutStyle}>
//       <div className={styles.interfacetutChild} />
//        <div className={styles.interfacetutItem} style={rectangleDivStyle} />
//        <div className={styles.interfacesDefineA} style={interfacesDefineAStyle}>
//         {tutorial.tutDescription}
//        </div>
//        <p>tutorial.tutDescription</p>
//        <div className={styles.interfaces}>{conceptDescription}</div>
//       <h4>{tutorial.tutName}</h4>
//       <p><strong>Load (kg): </strong>{tutorial.tutDescription}</p>
//     </div>
//   );
// };
  // return (
  //   <div
  //     className={styles.interfacetut}
  //     onClick={onTutContainerClick}
  //     style={interfaceTutStyle}
  //   >
  //     <div className={styles.interfacetutChild} />
  //     <div className={styles.interfacetutItem} style={rectangleDivStyle} />
  //     <div className={styles.interfacesDefineA} style={interfacesDefineAStyle}>
  //       {tutorial.tutDescription}
  //     </div>
  //     <p>tutorial.tutDescription</p>
  //     <div className={styles.interfaces}>{conceptDescription}</div>
  //   </div>
  // );


//export default AbstractContainer;


import { useMemo } from "react";
import styles from "./AbstractContainer.module.css";

const AbstractContainer = ({
  tutorial,
  conceptDescription,
  propLeft,
  propBackground,
  propLetterSpacing,
  propLineHeight,
  onTutContainerClick, // Ensure this prop is passed correctly
}) => {
  const interfaceTutStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground="linear-gradient(92.09deg, #4e64a5 36.98%, #2d1f8b)"]);

  const interfacesDefineAStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      lineHeight: propLineHeight,
    };
  }, [propLetterSpacing="0.01em", propLineHeight="100%"]);

  return (
    <div
      className={styles.interfacetut}
      onClick={onTutContainerClick} // Ensure onClick is correctly implemented
      style={interfaceTutStyle}
    >
      <div className={styles.interfacetutChild} />
      <div className={styles.interfacetutItem} style={rectangleDivStyle} />
      <div className={styles.interfacesDefineA} style={interfacesDefineAStyle}>
        {tutorial.tutDescription}
      </div>
      <p>{tutorial.tutDescription}</p> {/* This seems repetitive */}
      <div className={styles.interfaces}>{conceptDescription}</div>
      <h4>{tutorial.tutName}</h4>
      <p>
        {tutorial.tutDescription} {/* Check if this is the intended data */}
      </p>
    </div>
  );
};

export default AbstractContainer;
