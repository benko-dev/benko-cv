import React from "react";

import { useParams } from "react-router-dom";

import whiteArrow from "../img/icons/arrow-right-bottom-white.svg";
import iphone from "../img/decor/iphone.png";
import macbook from "../img/decor/macbook.png";

import blueRing75 from "../img/decor/blue-ring75-1.svg";
import orangeRing50 from "../img/decor/orange-ring50-1.svg";
import greenRing50 from "../img/decor/green-ring50-1.svg";

import GsapMagnetic from "../components/GsapMagnetic";
import SkillLabel from "../components/skillLabel";
import RecentWorks from "../components/recent-works";
import NextProject from "../components/nextProject";
import { Parallax } from "react-scroll-parallax";

const Project = ({ projectList, setModal, modal }) => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = React.useState([]);
  const [nextProject, setNextProject] = React.useState([]);
  const [developSkills, setDevelopSkills] = React.useState([]);
  const [designSkills, setDesignSkills] = React.useState([]);
  const [otherSkills, setOtherSkills] = React.useState([]);

  const [recentWorksOther, setRecentWorksOther] = React.useState([]);

  React.useEffect(() => {
    setCurrentProject(
      projectList.find((el) => el.title.toLowerCase() === project.toLowerCase())
    );
  }, [project]);

  React.useEffect(() => {
    if (currentProject.length !== 0) {
      setDevelopSkills(currentProject.tags[0]);
      setDesignSkills(currentProject.tags[1]);
      setOtherSkills(currentProject.tags[2]);

      setRecentWorksOther(
        projectList
          .slice()
          .filter((_, index) => index !== currentProject.pos - 1)
          .reverse()
          .slice(0, 4)
      );
      setNextProject(
        projectList
          .slice()
          .filter((_, index) => index === currentProject.pos - 2)[0]
          ? projectList
              .slice()
              .filter((_, index) => index === currentProject.pos - 2)[0]
          : projectList[parseInt(projectList.length - 1)]
      );
    }
  }, [currentProject]);

  return (
    <>
      <div className="main-project-preview">
        <div className="main-project-preview__container-big">
          <div className="main-project-preview__preview">
            <div className="main-project-preview__preview-bg">
              <img src={currentProject.imageUrl} alt="" />
            </div>
            <div className="main-project-preview__wrapper">
              <img src={currentProject.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="main-project">
        <div className="main-project__container-small">
          <div className="main-project__body">
            <h1 className="main-project__title title">
              {currentProject.title}
            </h1>
            <div className="main-project__button-links">
              {currentProject.designLink && (
                <GsapMagnetic>
                  <a
                    href={currentProject.designLink}
                    target="_blank"
                    rel="noreferrer"
                    className="main-project__button-link main-project__button-link_red">
                    <img src={whiteArrow} alt="" />
                  </a>
                </GsapMagnetic>
              )}
              {currentProject.demoLink && (
                <GsapMagnetic>
                  <a
                    href={currentProject.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="main-project__button-link main-project__button-link_blue">
                    <img src={whiteArrow} alt="" />
                  </a>
                </GsapMagnetic>
              )}
            </div>
            <div className="main-project__date">{currentProject.date}</div>
          </div>
          <span className="main-project__label">{currentProject.label}</span>

          <div className="main-project__button-links main-project__button-links_mobile">
            {currentProject.designLink && (
              <GsapMagnetic>
                <a
                  href={currentProject.designLink}
                  target="_blank"
                  rel="noreferrer"
                  className="main-project__button-link main-project__button-link_red">
                  <img src={whiteArrow} alt="" />
                </a>
              </GsapMagnetic>
            )}
            {currentProject.demoLink && (
              <GsapMagnetic>
                <a
                  href={currentProject.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="main-project__button-link main-project__button-link_blue">
                  <img src={whiteArrow} alt="" />
                </a>
              </GsapMagnetic>
            )}
          </div>
        </div>
      </section>
      <div className="project-skills">
        <div className="project-skills__container-small">
          {developSkills.length > 0 && (
            <div className="skills-list">
              {developSkills.map((obj) => {
                return <SkillLabel key={obj} text={obj} color="blue" />;
              })}
            </div>
          )}
          {designSkills.length > 0 && (
            <div className="skills-list">
              {designSkills.map((obj) => {
                return <SkillLabel key={obj} text={obj} color="red" />;
              })}
            </div>
          )}
          {otherSkills.length > 0 && (
            <div className="skills-list">
              {otherSkills.map((obj) => {
                return <SkillLabel key={obj} text={obj} color="black" />;
              })}
            </div>
          )}
        </div>
      </div>
      <div className="project-about">
        <div className="project-about__container-small">
          <div className="project-about__wrapper">
            {currentProject.mobilePreview && (
              <div className="project-about__main">
                <img
                  src={blueRing75}
                  alt=""
                  className="project-about__decor project-about__decor-blue anim-circle-type1"
                />
                <img
                  src={orangeRing50}
                  alt=""
                  className="project-about__decor project-about__decor-orange anim-circle-type2"
                />
                <img
                  src={greenRing50}
                  alt=""
                  className="project-about__decor project-about__decor-green anim-circle-type3"
                />

                <div className="project-about__phone-preview project-phone-preview">
                  <img
                    src={iphone}
                    alt=""
                    className="project-phone-preview__phone"
                  />
                  <div className="project-phone-preview__phone-preview-img">
                    <img src={currentProject.mobilePreview} alt="" />
                  </div>
                </div>
                {currentProject.aboutText && (
                  <div className="project-about__article">
                    <Parallax speed={4}>
                      <div className="project-about__article-wrapper">
                        {currentProject.aboutText &&
                          currentProject.aboutText.map((text, index) => (
                            <p key={index}>{text}</p>
                          ))}
                      </div>
                    </Parallax>
                  </div>
                )}
              </div>
            )}
            {currentProject.desktopPreview && (
              <div className="project-about__desktop desktop-project-preview">
                <div className="desktop-project-preview__mockup">
                  <img src={macbook} alt="" />
                  <div className="desktop-project-preview__preview">
                    <img src={currentProject.desktopPreview} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <NextProject project={nextProject} />

      <div className="portfolio-main portfolio-main_project-page">
        <div className="portfolio-main__container-big">
          <div className="portfolio-main__list">
            <RecentWorks
              projects={recentWorksOther}
              modal={modal}
              setModal={setModal}
              label={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
