import React from "react";
import { Outlet } from "react-router-dom";
import {
  PreloaderStat,
  PreloaderSeter,
  OverlayStat,
  BurgerActivated,
} from "../App";
import Preloader from "./preloader";

import Logo from "./logo";

import linkedIn from "../img/icons/linkedin-icon.svg";
import drrrible from "../img/icons/dribbble-icon.svg";
import instagram from "../img/icons/instagram-icon.svg";
import github from "../img/icons/github-icon.svg";

import useDarkScheme from "../hooks/useDarkScheme.jsx";
import SmoothScroll from "./smoothScroll";
import GsapMagnetic from "./GsapMagnetic";

import AOS from "aos";
import "aos/dist/aos.css";

import menuItems from "../data/header-menu.json";

import MenuEl from "./headerMenuEl";
import Button from "./button";
import ThemeButton from "./theme-button";
import FooterBlock from "./footer-block";

const servicesIcons = [
  {
    link: linkedIn,
    alt: "LinkedIn link",
    url: "https://www.linkedin.com/in/dima-dzyubenko-a7285420b/",
  },
  {
    link: drrrible,
    alt: "Drrrible link",
    url: "https://dribbble.com/benko_web_dev",
  },
  {
    link: instagram,
    alt: "Instagram link",
    url: "https://instagram.com/benko_web_dev?igshid=OGQ5ZDc2ODk2ZA==",
  },
  { link: github, alt: "GitHub link", url: "https://github.com/benko-dev" },
];

const Layout = ({
  scrollTargetMarker,
  setScrollTargetMarker,
  scrollReady,
  setScrollReady,
}) => {
  const { darkScheme, changeScheme } = useDarkScheme();
  const [preloader] = React.useContext(PreloaderStat);
  const [setPreloader] = React.useContext(PreloaderSeter);
  const [preloaderFinish, setPreloaderFinish] = React.useContext(OverlayStat);
  const [burgerActive, setBurgerActive] = React.useContext(BurgerActivated);

  const [finishStartPreloader, setFinishStartPreloader] = React.useState(false);

  const [menuNav, setMenuNav] = React.useState([]);
  const [menuIcons, setMenuIcons] = React.useState([]);
  const [burgerFixed, setBurgerFixed] = React.useState(false);
  const [overlayActive, setOverlayActive] = React.useState(true);

  const wrapper = React.useRef();

  const openBurger = () => {
    setBurgerActive(!burgerActive);
    setOverlayActive(!overlayActive);

    if (burgerActive) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const loadData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setPreloader(false);
      setPreloaderFinish(true);
      AOS.init();
      document.body.style.overflow = "visible";
      setOverlayActive(!overlayActive);
      setTimeout(() => {
        setFinishStartPreloader(true);
      }, 600);
    } catch (error) {
      console.error("Error", error);
    }
  };

  React.useEffect(() => {
    if (burgerActive) {
      setOverlayActive(true);
    } else {
      setOverlayActive(false);
    }
  }, [burgerActive]);

  React.useEffect(() => {
    setMenuNav(menuItems);
    setMenuIcons(servicesIcons);

    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollReady(true);

        if (window.scrollY > 300) {
          setBurgerFixed(true);
        } else {
          setBurgerFixed(false);
        }
      } else {
        setScrollReady(false);
      }
    });

    loadData();
  }, []);

  return (
    <SmoothScroll
      marker={scrollTargetMarker}
      markerFunc={setScrollTargetMarker}
      preloaderFinish={preloaderFinish}
      setPreloaderFinish={setPreloaderFinish}>
      <div
        className={`wrapper ${darkScheme ? "dark" : ""}`}
        ref={wrapper}
        data-lenis-prevent={overlayActive ? "true" : undefined}>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__container-big">
              <Logo />

              <div className="header__navigation">
                {menuNav.map((item, i) => {
                  return <MenuEl key={i} href={item.url} text={item.text} />;
                })}
              </div>

              <div className="header__actions">
                <ThemeButton click={changeScheme} />

                <Button text="Write me" href="/write-me" label="write me" />
              </div>

              <div
                className={`burger-btn-parrent ${scrollReady ? "fixed" : ""} ${
                  burgerFixed ? "showed" : ""
                } ${burgerActive ? "burger-active" : ""}`}>
                  <GsapMagnetic>
                    <button
                      className={`burger-btn ${burgerActive ? "active" : ""}`}
                      onClick={() => openBurger()}>
                      <span></span>
                      <span></span>
                    </button>
                  </GsapMagnetic>
              </div>

              <div className={`burger-frame ${burgerActive ? "active" : ""}`}>
                <div className="burger-frame__wrapper">
                  <div className="burger-frame__header burger-frame-anim">
                    <h3 className="burger-frame__header-title">navigation</h3>
                  </div>
                  <div className="burger-frame__menu burger-frame-anim">
                    {menuNav.map((item, i) => {
                      return (
                        <MenuEl key={i} href={item.url} text={item.text} />
                      );
                    })}
                  </div>

                  <div className="burger-frame__header burger-frame-anim">
                    <h3 className="burger-frame__header-title">actions</h3>
                  </div>
                  <div className="burger-frame__actions burger-frame-anim">
                    <Button text="Write me" href="write-me" label="write me" />

                    <ThemeButton click={changeScheme} />
                  </div>
                </div>

                <div className="burger-frame__decor"></div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="footer">
          <div className="footer__container-big">
            <div className="footer__main-info">
              <div className="footer-logo-wrapper">
                <Logo />
              </div>
              <p>
                Browse through my range of services that cater to various needs.
                From consultations to custom solutions, i have you covered.
              </p>
              <div className="copyright-block">
                <span className="copyright-block__copyright">
                  ©by benko 2023
                </span>
              </div>
            </div>

            <FooterBlock title={"navigation"} social={false}>
              {menuNav.map((item, i) => {
                return (
                  <MenuEl
                    key={i}
                    href={item.url}
                    text={item.text}
                    current={item.current === "true" ? true : false}
                  />
                );
              })}
            </FooterBlock>

            <FooterBlock title={"Contacts"}>
              <div className="social-list">
                {menuIcons.map((item, i) => {
                  return (
                    <GsapMagnetic key={i}>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <img src={item.link} alt={item.alt} />
                      </a>
                    </GsapMagnetic>
                  );
                })}
              </div>

              <Button text="Write me" href="write-me" label="write me" />
            </FooterBlock>

            <div className="copyright-block copyright-block_mobile">
              <span className="copyright-block__copyright">©by benko 2023</span>
            </div>
          </div>

          <div className="footer__decor-wrapper decor-wrapper">
            <div className="decor-wrapper__wrapper">
              <div className="decor-wrapper__decor decor-wrapper__decor_one"></div>
              <div className="decor-wrapper__decor decor-wrapper__decor_two"></div>
              <div className="decor-wrapper__decor decor-wrapper__decor_three"></div>
              <div className="decor-wrapper__decor decor-wrapper__decor_four"></div>
            </div>
          </div>
        </footer>

        <div className={`overlay ${overlayActive ? "active" : ""}`}></div>
      </div>

      <Preloader
        preloader={preloader}
        finishStartPreloader={finishStartPreloader}
      />
    </SmoothScroll>
  );
};

export default Layout;
