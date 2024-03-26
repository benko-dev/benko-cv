import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import {
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
} from "../../App";

function Logo() {
  const navigate = useNavigate();
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] = React.useContext(PreloaderLabelText);

  const handleClick = (link) => {
    setPreloader(true);
    document.body.style.overflow = "hidden";
    setPreloaderFinish(false);
    setPreloaderLabel('home');

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
    <button onClick={() => handleClick("/")} className="logo" translate="no">
      <span className="logo__dots">
        <span className="logo__dot"></span>
        <span className="logo__dot"></span>
        <span className="logo__dot"></span>
        <span className="logo__dot"></span>
      </span>
      <span className="logo__text">
        <span>b</span>
        <span>e</span>
        <span>n</span>
        <span>k</span>
        <span>o</span>
      </span>
    </button>
  );
}

export default Logo;
