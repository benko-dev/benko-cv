import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
  PreloaderLabelText,
  PortfolioSearch,
  CategoryActive,
} from "../../App";

const SkillLabel = ({ text, color }) => {
  const navigate = useNavigate();
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);
  const [preloaderLabel, setPreloaderLabel] =
    React.useContext(PreloaderLabelText);
  const [searchValue, setSearchValue] = React.useContext(PortfolioSearch);
  const [categoryActive, setCategoryActive] = React.useContext(CategoryActive);

  const handleClick = (color) => {
    setPreloader(true);
    document.body.style.overflow = "hidden";
    setPreloaderFinish(false);

    setPreloaderLabel("portfolio");
    if (color === "blue") {
      setCategoryActive(2);
    } else if (color === "red") {
      setCategoryActive(1);
    } else {
      setCategoryActive(0);
    }

    setTimeout(() => {
      navigate("/portfolio");
      setBurgerActive(false);

      setSearchValue(text);
    }, 800);
    setTimeout(() => {
      setPreloader(false);
      document.body.style.overflow = "visible";
      setPreloaderFinish(true);
    }, 3000);
  };

  return (
    <button
      className={`skill-label skill-label_${color}`}
      onClick={() => handleClick(color)}>
      {text}
    </button>
  );
};

export default SkillLabel;
