import IconfileMd from "./IconfileMd";
import Property1Variant3 from "./Property1Variant3";
import styles from "./AnimationContainer.module.css";

const AnimationContainer = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.files}>
        <div className={styles.file}>
          <IconfileMd
            imageCode="/vector3@2x.png"
            dimensionCode="/vector5@2x.png"
            technologyCode="SG"
            iconfileMdPosition="relative"
            iconfileMdWidth="20px"
            iconfileMdHeight="20px"
            vectorIconHeight="83.5%"
            vectorIconWidth="66.5%"
            vectorIconTop="8.5%"
            vectorIconRight="17%"
            vectorIconBottom="8%"
            vectorIconLeft="16.5%"
            mDColor="rgba(0, 0, 0, 0.8)"
            mDTop="49%"
          />
          <div className={styles.animation1}>Animation</div>
        </div>
      </div>
      <div className={styles.icLoop48pxParent}>
        <img
          className={styles.icLoop48pxIcon}
          alt=""
          src="/ic-loop-48px@2x.png"
        />
        <img
          className={styles.icReplay48pxIcon}
          alt=""
          src="/ic-replay-48px@2x.png"
        />
        <img
          className={styles.icInfoOutline48pxIcon}
          alt=""
          src="/ic-info-outline-48px@2x.png"
        />
        <div className={styles.objectifyParent}>
          <div className={styles.objectify}>Objectify</div>
          <div className={styles.groupChild} />
          <img
            className={styles.icPlayArrow48pxIcon}
            alt=""
            src="/ic-play-arrow-48px@2x.png"
          />
        </div>
      </div>
      <Property1Variant3
        showRectangleDiv={false}
        property1Variant3Width="157px"
        property1Variant3Position="absolute"
        property1Variant3Top="158px"
        property1Variant3Left="234px"
        rectangleDivHeight="20.62%"
        rectangleDivBottom="79.38%"
        rectangleDivBackgroundColor="#ff9aa2"
        rectangleDivHeight1="16.98%"
        rectangleDivWidth="91.59%"
        rectangleDivTop="35.12%"
        rectangleDivBottom1="47.9%"
        rectangleDivLeft="3.69%"
        rectangleDivRight="4.71%"
        rectangleDivHeight2="16.98%"
        rectangleDivWidth1="91.59%"
        rectangleDivTop1="58.77%"
        rectangleDivBottom2="24.26%"
        rectangleDivLeft1="3.69%"
        rectangleDivBackgroundColor1="rgba(236, 235, 235, 0.3)"
        rectangleDivBorder="3px solid var(--color-plum)"
        rectangleDivRight1="4.71%"
      />
      <Property1Variant3
        showRectangleDiv
        property1Variant3Width="158px"
        property1Variant3Position="absolute"
        property1Variant3Top="439px"
        property1Variant3Left="432px"
        rectangleDivHeight="20.62%"
        rectangleDivBottom="79.38%"
        rectangleDivBackgroundColor="#de8ae5"
        rectangleDivHeight1="16.98%"
        rectangleDivWidth="91.65%"
        rectangleDivTop="35.12%"
        rectangleDivBottom1="47.9%"
        rectangleDivLeft="3.67%"
        rectangleDivRight="4.68%"
        rectangleDivHeight2="16.98%"
        rectangleDivWidth1="91.65%"
        rectangleDivTop1="58.77%"
        rectangleDivBottom2="24.26%"
        rectangleDivLeft1="3.67%"
        rectangleDivBackgroundColor1="#ecebeb"
        rectangleDivBorder="3px solid var(--color-darkorchid)"
        rectangleDivRight1="4.68%"
      />
      <Property1Variant3
        showRectangleDiv
        property1Variant3Width="158px"
        property1Variant3Position="absolute"
        property1Variant3Top="439px"
        property1Variant3Left="55px"
        rectangleDivHeight="20.62%"
        rectangleDivBottom="79.38%"
        rectangleDivBackgroundColor="#63ade3"
        rectangleDivHeight1="16.98%"
        rectangleDivWidth="91.65%"
        rectangleDivTop="35.12%"
        rectangleDivBottom1="47.9%"
        rectangleDivLeft="3.67%"
        rectangleDivRight="4.68%"
        rectangleDivHeight2="16.98%"
        rectangleDivWidth1="91.65%"
        rectangleDivTop1="58.77%"
        rectangleDivBottom2="24.26%"
        rectangleDivLeft1="3.67%"
        rectangleDivBackgroundColor1="#ecebeb"
        rectangleDivBorder="3px solid var(--color-slateblue)"
        rectangleDivRight1="4.68%"
      />
      <img className={styles.animationChild} alt="" src="/vector-20@2x.png" />
      <img className={styles.animationItem} alt="" src="/vector-21@2x.png" />
    </div>
  );
};

export default AnimationContainer;
