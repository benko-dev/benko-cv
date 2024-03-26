import React from "react";
import {
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
} from "../../App";

import GsapMagnetic from "../GsapMagnetic";
import { useNavigate, useLocation } from "react-router-dom";

function MenuEl({ href, text }) {
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] =
    React.useContext(PreloaderLabelText);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link, text) => {
    setPreloader(true);
    document.body.style.overflow = "hidden";
    setPreloaderFinish(false);
    setPreloaderLabel(text);

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
    <GsapMagnetic>
      <button
        onClick={() => handleClick(href, text)}
        className={location.pathname === href ? "active" : ""}>
        <span>{text}</span>
        <span className="dot"></span>
      </button>
    </GsapMagnetic>
  );
}

export default MenuEl;
