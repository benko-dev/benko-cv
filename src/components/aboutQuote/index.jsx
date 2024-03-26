import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const AboutQoute = () => {
  const greenBrashAbout = React.useRef(null);

  const BrashInView = useInView(greenBrashAbout, { once: true });
  const BrashInViewAnim = useAnimation();

  React.useEffect(() => {
    if (BrashInView) {
      BrashInViewAnim.start("visible");
    }
  }, [BrashInView, BrashInViewAnim]);
  return (
    <div className="about__quote">
      <div
        className="about-brash-decor about-brash-decor_green"
        ref={greenBrashAbout}>
        <Parallax speed={1}>
          <svg
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial="hidden"
              animate={BrashInViewAnim}
              variants={{
                hidden: {
                  opacity: 0,
                  pathLength: 0,
                },
                visible: {
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1.2,
                    delay: 0.3,
                    ease: "easeIn",
                  },
                },
              }}
              id="Vector 1"
              d="M70.0105 5.57778C70.8171 5.73354 70.5124 5.60767 71.502 6.55301C75.9146 10.7682 80.0603 15.3512 84.2131 19.812C90.4808 26.5448 98.502 33.8504 102.544 42.3263C105.364 48.2407 95.063 48.396 91.8236 48.8083C73.1678 51.1824 54.0917 49.2635 35.5153 51.9466C30.085 52.731 46.8308 61.7409 47.0056 61.8393C48.2533 62.5413 58.4769 67.7999 59.7476 69.7974C64.1345 76.6936 40.4389 83.3896 39.7767 83.6559C31.9711 86.7949 23.8724 89.662 16.2115 93.1933C12.8453 94.7449 8.24282 96.7695 6.01656 100.12C5.35972 101.109 5.24758 102.521 5.0256 103.67"
              stroke="#ABFF22"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </Parallax>
      </div>
      <div className="about-brash-decor about-brash-decor_blue">
        <Parallax speed={1}>
          <svg
            viewBox="0 0 73 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial="hidden"
              animate={BrashInViewAnim}
              variants={{
                hidden: {
                  opacity: 0,
                  pathLength: 0,
                },
                visible: {
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1.2,
                    delay: 0.3,
                    ease: "easeIn",
                  },
                },
              }}
              id="Vector 2"
              d="M67.2174 7.86244C55.7931 6.37256 43.721 3.69107 32.0715 4.11538C30.3294 4.17883 29.0003 4.96661 27.6488 6.13648C25.8894 7.65943 24.7462 9.21445 25.1634 11.7334C25.4974 13.7502 26.346 14.8178 27.9852 15.7756C34.4715 19.5658 41.1381 23.0482 47.5369 26.996C53.5994 30.7362 63.4328 35.4573 67.2043 42.0845C71.7098 50.0014 66.381 54.3781 58.699 54.9132C45.86 55.8075 33.2972 52.5336 20.8793 50.0184C17.5881 49.3517 -2.0978 43.973 6.90389 53.8651C13.4313 61.0382 21.8818 66.748 29.9546 71.8064C32.1583 73.1873 28.2178 75.3414 26.9651 76.174C25.2374 77.3222 23.3069 78.1799 21.2692 78.1911C21.0699 78.1922 18.6924 77.7492 19.7232 77.9942"
              stroke="#80C2FF"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </Parallax>
      </div>

      <p>
        I help you find interesting and effective solutions to turn your dream
        into reality.
      </p>
    </div>
  );
};

export default AboutQoute;
