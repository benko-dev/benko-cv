import React from "react";
import "./index.scss";
import {
  mainPortfolio,
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
} from "../../App";

import blueRing75two from "../../img/decor/blue-ring75-2.svg";
import orangeRing50 from "../../img/decor/orange-ring50-1.svg";
import greenRing50 from "../../img/decor/green-ring50-1.svg";

import ProjectCover from "../project-cover";
import ProjectModal from "../project-modal";
import Button from "../button";

import { Parallax } from "react-scroll-parallax";
import { motion, useInView, useAnimation } from "framer-motion";
import StaticButton from "../static-button";
import NotFound from "../notFound";
import { useNavigate } from "react-router-dom";

function RecentWorks({ projects, setModal, modal, label }) {
  const portfolioBlueBrash = React.useRef(null);
  const portfolioOrangeBrash = React.useRef(null);

  const navigate = useNavigate();
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] =
    React.useContext(PreloaderLabelText);

  const [projectsCount, setProjectsCount] = React.useState(0);
  const [buttonText, setButtonText] = React.useState("More");

  const [mainProjectsCount, setMainProjectsCount, totalProjectsCount] =
    React.useContext(mainPortfolio);

  const portfolioBrashInView = useInView(portfolioBlueBrash, { once: true });
  const portfolioBrashInViewSecond = useInView(portfolioOrangeBrash, {
    once: true,
  });

  const portfolioBrashInViewAnim = useAnimation();
  const portfolioBrashInViewSecondAnim = useAnimation();

  React.useEffect(() => {
    if (portfolioBrashInView) {
      portfolioBrashInViewAnim.start("visible");
    }
  }, [portfolioBrashInView, portfolioBrashInViewAnim]);
  React.useEffect(() => {
    if (portfolioBrashInViewSecond) {
      portfolioBrashInViewSecondAnim.start("visible");
    }
  }, [portfolioBrashInViewSecond, portfolioBrashInViewSecondAnim]);

  React.useEffect(() => {
    setProjectsCount(totalProjectsCount);
  }, [totalProjectsCount]);

  const moreProjectsHandler = () => {
    if (mainProjectsCount !== projectsCount) {
      setMainProjectsCount(
        mainProjectsCount + 2 <= projectsCount
          ? mainProjectsCount + 2
          : mainProjectsCount + projectsCount - mainProjectsCount
      );
    } else {
      setMainProjectsCount(4);
    }
  };
  React.useEffect(() => {
    if (mainProjectsCount === projectsCount) {
      setButtonText("Hide");
    } else {
      setButtonText("More");
    }
  }, [mainProjectsCount, projectsCount]);

  const handleClick = (link, label) => {
    setPreloader(true);
    document.body.style.overflow = "hidden";
    setPreloaderFinish(false);

    setPreloaderLabel(label);

    setTimeout(() => {
      navigate(link);
      setBurgerActive(false);
    }, 800);
    setTimeout(() => {
      setPreloader(false);
      document.body.style.overflow = "visible";
      setPreloaderFinish(true);
    }, 3000);
  };

  return (
    <>
      <div className="portfolio__wrapper">
        <img
          src={blueRing75two}
          alt=""
          className="portfolio__decor portfolio__decor-blue anim-circle-type1"
        />
        <img
          src={orangeRing50}
          alt=""
          className="portfolio__decor portfolio__decor-orange anim-circle-type2"
        />
        <img
          src={greenRing50}
          alt=""
          className="portfolio__decor portfolio__decor-green anim-circle-type3"
        />

        <div
          className={`portfolio-brash-decor portfolio-brash-decor_blue ${
            !label ? "portfolio-brash-decor_blue-nonlabel" : ""
          }`}
          ref={portfolioBlueBrash}>
          <Parallax speed={2}>
            <svg
              viewBox="0 0 93 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                initial="hidden"
                animate={portfolioBrashInViewAnim}
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
                d="M74.2928 81.7265C80.6904 78.7666 94.7673 71.0552 84.081 63.6743C73.5648 56.4109 61.9528 57.0223 49.8897 57.5132C46.1579 57.665 40.391 58.1875 37.0804 55.7953C31.617 51.8474 38.7864 37.9059 40.0111 33.3034C46.0476 10.617 15.8173 15.9581 5.3208 5.45639"
                stroke="#80C2FF"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
          </Parallax>
        </div>
        <div
          className="portfolio-brash-decor portfolio-brash-decor_orange"
          ref={portfolioOrangeBrash}>
          <Parallax speed={2}>
            <svg
              viewBox="0 0 95 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                initial="hidden"
                animate={portfolioBrashInViewSecondAnim}
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
                d="M89.6852 56.5276C89.581 57.2131 89.6769 56.9519 88.9129 57.8181C85.5066 61.6805 81.7813 65.3303 78.1591 68.9818C72.6921 74.4931 66.801 81.5023 59.7894 85.1949C54.8968 87.7715 54.42 79.0907 53.9636 76.373C51.3353 60.7212 52.3129 44.5709 49.4267 28.9965C48.583 24.4438 41.5476 38.8671 41.4705 39.0178C40.9205 40.0935 36.8294 48.8911 35.1876 50.0297C29.5197 53.9605 23.0778 34.204 22.8311 33.6546C19.922 27.1779 17.2324 20.445 13.9975 14.1035C12.5761 11.3171 10.7143 7.50399 7.81409 5.7392C6.95842 5.21852 5.76402 5.17136 4.78719 5.02277"
                stroke="#FFC122"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
          </Parallax>
        </div>
        {label && <div className="portfolio__label">recent works</div>}

        {projects.length === 0 && <NotFound />}

        <div className="portfolio__projects">
          {projects.map((obj, i) => {
            return (
              <button
                key={obj.title}
                onClick={() => handleClick(`/portfolio/${obj.title}`, obj.title)}>
                <ProjectCover
                  setModal={setModal}
                  index={i + 1}
                  imageUrl={obj.imageUrl}
                  title={obj.title}
                  label={obj.label}
                />
              </button>
            );
          })}
        </div>
        {label && (
          <Button text="More works" href="/portfolio" label="portfolio" />
        )}
        {!label && projects.length >= 4 && (
          <StaticButton text={buttonText} func={moreProjectsHandler} />
        )}
      </div>
      <ProjectModal modal={modal} projects={projects} />
    </>
  );
}

export default RecentWorks;
