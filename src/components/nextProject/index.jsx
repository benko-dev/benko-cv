import React from "react";
import nextBg from "../../img/bg/ex-header-bg.png";
import { Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";
import {
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
} from "../../App";

const NextProject = ({ project }) => {
  const navigate = useNavigate();
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] =
    React.useContext(PreloaderLabelText);

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
    <section className="next-project">
      <div className="next-project__bg">
        <Parallax speed={-3}>
          <div className="next-project__bg-wrapper">
            <img src={nextBg} alt="" />
          </div>
        </Parallax>
      </div>
      <div className="next-project__container-small">
        <h2 className="next-project__title">Next</h2>

        <button
          className="next-project-box"
          onClick={() =>
            handleClick(`/portfolio/${project.title}`, project.title)
          }>
          <span className="next-project-box__preview">
            <img src={project.imageUrl} alt="" />
          </span>
          <span className="next-project-box__name">{project.title}</span>
        </button>
      </div>
    </section>
  );
};

export default NextProject;
