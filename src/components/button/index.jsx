import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
} from "../../App";

import "./index.scss";

function Button({ href, text, label }) {
  const navigate = useNavigate();
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] = React.useContext(PreloaderLabelText);

  const handleClick = (link, label) => {
    setPreloader(true);
    document.body.style.overflow = "hidden";
    setPreloaderFinish(false);

    setPreloaderLabel(label)

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
    <button onClick={() => handleClick(href, label)} className="button">
      <span className="button__text">{text}</span>

      <span className="button__text-hidden">{text}</span>

      <span className="button__decor"></span>
    </button>
  );
}

export default Button;
