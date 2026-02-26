import "./null.scss";
import "./ui.scss";
import "./App.scss";
import "./scheme.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
//import menuItems from "./data/header-menu.json";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound/index.jsx";

import ReviewsPage from "./pages/ReviewsPage";
import WriteMe from "./pages/WriteMe";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project.jsx";

// Art&Life
import ArtPreview from "./img/art&life/preview.png";
import ArtMobile from "./img/art&life/mobile.png";
import ArtDesktop from "./img/art&life/desktop.png";
// TODO
import ToDoPreview from "./img/todo/preview.png";
import ToDoMobile from "./img/todo/mobile.png";
import ToDoDesktop from "./img/todo/desktop.png";
// TODO
import AsicPreview from "./img/asic/preview.png";
import AsicMobile from "./img/asic/mobile.png";
import AsicDesktop from "./img/asic/desktop.png";
// NEXT AUTH APP
import AuthPreview from "./img/NextAuthApp/preview.png";
import AuthMobile from "./img/NextAuthApp/mobile.png";
import AuthDesktop from "./img/NextAuthApp/preview.png";
// CREON APP
import CreonPreview from "./img/CreonApp/preview.png";
import CreonMobile from "./img/CreonApp/mobile.png";
import CreonDesktop from "./img/CreonApp/preview.png";

// DTF Configurator
import DtfPreview from "./img/DTFConfigurator/desktop.png";
import DtfMobile from "./img/DTFConfigurator/mobile.png";
import DtfDesktop from "./img/DTFConfigurator/desktop.png";
// Rhinestones Configurator
import RhinestonesPreview from "./img/RhinestonesConfigurator/desktop.png";
import RhinestonesMobile from "./img/RhinestonesConfigurator/mobile.png";
import RhinestonesDesktop from "./img/RhinestonesConfigurator/desktop.png";
// AI Dashboard
import AIDashboardPreview from "./img/AIDashboard/desktop.png";
import AIDashboardMobile from "./img/AIDashboard/mobile.png";
import AIDashboardDesktop from "./img/AIDashboard/desktop.png";
// Notion Clone (TODO: add ./img/NotionClone/ images)
import NotionPreview from "./img/NotionClone/desktop.png";
import NotionMobile from "./img/NotionClone/mobile.png";
import NotionDesktop from "./img/NotionClone/desktop.png";
// NOVA E-Commerce (TODO: add ./img/NOVA/ images)
import NovaPreview from "./img/Nova/desktop.png";
import NovaMobile from "./img/Nova/mobile.png";
import NovaDesktop from "./img/Nova/desktop.png";
// UI Playground
import UIPlaygroundPreview from "./img/UIPlayground/desktop.png";
import UIPlaygroundMobile from "./img/UIPlayground/mobile.png";
import UIPlaygroundDesktop from "./img/UIPlayground/desktop.png";

const projectsPortfolio = [
  {
    pos: 1,
    title: "Art & Life",
    label: "development",
    imageUrl: ArtPreview,
    category: [2],
    date: "2022",
    demoLink: "https://benko-dev.github.io/Art-Life/",
    tags: [
      ["html", "css/scss", "js libraries", "js/javascript"],
      [],
      ["bem metodology", "flex-grid", "git/github"],
    ],
    aboutText: [
      "An excellent example of a multi-page responsive website developed by me. Fully ready to fit on any modern CMS. An animation has been made for the appearance of elements when the scroll reaches them. There is also a script for selecting categories on the Magazine page.",
    ],
    mobilePreview: ArtMobile,
    desktopPreview: ArtDesktop,
  },
  {
    pos: 2,
    title: "ToDo App",
    label: "design & development",
    imageUrl: ToDoPreview,
    category: [2, 1],
    date: "2023",
    demoLink: "https://to-do-app-lovat-eight.vercel.app/",
    designLink:
      "https://www.figma.com/community/file/1287029163993360080/simple-todo-list-design",
    tags: [
      ["jsx", "css/scss", "react js"],
      ["figma"],
      ["bem metodology", "flex-grid", "git/github"],
    ],
    aboutText: [
      "This is my first React JS project",
      "Used react-select library. There are light and dark themes. Advanced search - search by keywords and categories. Use local storage - every new note are saved, the color scheme is remembered. You can also edit notes, undo editing, delete, undo deleting within 5 seconds. Everything is responsive and cross-browser compatible",
    ],
    mobilePreview: ToDoMobile,
    desktopPreview: ToDoDesktop,
  },
  {
    pos: 3,
    title: "Asicavanue",
    label: "development",
    imageUrl: AsicPreview,
    category: [2],
    date: "2024",
    demoLink: "https://benko-dev.github.io/Asicavenue/",
    tags: [
      ["html", "css/scss", "js libraries", "js/javascript"],
      [],
      ["bem metodology", "flex-grid", "git/github"],
    ],
    aboutText: [
      "Simple responsible html layout with animations",
      "Logic has been wrote on vanila JS. For sliders used Swiper JS library. Cool dynamic search frame in header width categories. Full response from 4k to 320px width.",
    ],
    mobilePreview: AsicMobile,
    desktopPreview: AsicDesktop,
  },
  {
    pos: 4,
    title: "DTF Configurator",
    label: "design & development",
    imageUrl: DtfPreview,
    category: [2, 1],
    date: "2025",
    demoLink: "https://dtfonline.pl/en/dtf-configurator/",
    tags: [
      [
        "html",
        "css/scss",
        "js libraries",
        "js/javascript",
        "php",
        "wordpress",
        "custom plugins",
      ],
      ["figma"],
      ["bem metodology", "flex-grid"],
    ],
    aboutText: [
      "Custom Product Builder for Clothing Design.",
      "An interactive product configurator that allows users to customize clothing items by selecting materials, sizes, colors, and uploading personal designs. Built with a focus on performance, usability, and mobile-first experience, it provides instant visual feedback and price calculation based on selected options."
    ],
    mobilePreview: DtfMobile,
    desktopPreview: DtfDesktop,
  },
  {
    pos: 5,
    title: "Rhinestones Configurator",
    label: "design & development",
    imageUrl: RhinestonesPreview,
    category: [2, 1],
    date: "2025",
    demoLink: "https://dtfonline.pl/en/rhinestones-configurator/",
    tags: [
      [
        "html",
        "css/scss",
        "js libraries",
        "js/javascript",
        "php",
        "wordpress",
        "custom plugins",
      ],
      ["figma"],
      ["bem metodology", "flex-grid"],
    ],
    aboutText: [
      "Interactive Designer for Custom Crystal-Based Prints.",
      "A powerful web-based configurator for creating personalized rhinestone prints with full control over stone size, color, density, and quality. Users can either upload their own designs or generate them from custom text, instantly previewing the result with real-time visualization."
    ],
    mobilePreview: RhinestonesMobile,
    desktopPreview: RhinestonesDesktop,
  },
  {
    pos: 6,
    title: "Creon App",
    label: "development",
    imageUrl: CreonPreview,
    category: [2],
    date: "2024",
    demoLink: "https://creon-app-eosin.vercel.app/",
    tags: [
      [
        "html",
        "css/scss",
        "js libraries",
        "js/javascript",
        "react js",
        "next.js",
        "typescript",
        "module css",
        "tailwind css",
        "framer motion",
      ],
      [],
      ["bem metodology", "flex-grid", "git/github", "vercel"],
    ],
    aboutText: [
      "A simple web application using Next.JS to demonstrate my project structuring, motion designing and working with some tools and libraries. The application is fully adaptive for any screen resolution and for any client. I also added a simple but beautiful animation of elements when scrolling and for interaction with some elements that call for action.",
    ],
    mobilePreview: CreonMobile,
    desktopPreview: CreonDesktop,
  },
  {
    pos: 7,
    title: "AI Dashboard",
    label: "development",
    imageUrl: AIDashboardPreview,
    category: [2],
    date: "2025",
    demoLink: "https://ai-dashboard-zeta-khaki.vercel.app/",
    tags: [
      ["react js", "next.js", "typescript", "tailwind css", "framer motion", "heroui", "recharts"],
      [],
      ["git/github", "vercel"],
    ],
    aboutText: [
      "A premium-style AI SaaS dashboard built with Next.js App Router, TypeScript, HeroUI, Tailwind CSS, and Framer Motion.",
      "Showcases how to design and structure a modern analytics dashboard with polished UX and production-ready frontend architecture. Features collapsible sidebar navigation, stats cards, animated activity feed, interactive usage chart with 7/14-day range switcher, command palette (⌘K), dark/light theme toggle, skeleton loading states, and a fully responsive mobile-first layout.",
    ],
    mobilePreview: AIDashboardMobile,
    desktopPreview: AIDashboardDesktop,
  },
  {
    pos: 8,
    title: "Notion Clone",
    label: "development",
    imageUrl: NotionPreview,
    category: [2],
    date: "2025",
    demoLink: "https://notion-clone-livid-nu.vercel.app/",
    tags: [
      ["react js", "next.js", "typescript", "tailwind css", "framer motion", "heroui", "dnd-kit"],
      [],
      ["git/github", "vercel", "local storage"],
    ],
    aboutText: [
      "A polished, Notion-inspired block editor built with Next.js App Router, TypeScript, Tailwind CSS v4, HeroUI, Framer Motion, and dnd-kit.",
      "Features a block-based editor with local persistence, slash command menu with keyboard navigation, drag-and-drop block reordering, file sidebar with create/select/delete, dark/light theme with system preference fallback, and a responsive mobile layout. Supports text, headings, checklists, lists, separators, and image blocks.",
    ],
    mobilePreview: NotionMobile,
    desktopPreview: NotionDesktop,
  },
  {
    pos: 9,
    title: "NOVA — E-Commerce",
    label: "development",
    imageUrl: NovaPreview,
    category: [2],
    date: "2025",
    demoLink: "https://nova-sneakers.vercel.app/",
    tags: [
      ["react js", "next.js", "typescript", "tailwind css", "framer motion", "heroui"],
      [],
      ["git/github", "vercel"],
    ],
    aboutText: [
      "NOVA is a frontend portfolio project for a premium footwear e-commerce experience, focusing on UI quality, interaction polish, and realistic store flows.",
      "Features a full product catalog, collection search and filtering, product detail pages with variants and size selection, an editorial lookbook, multi-step checkout, cart and wishlist drawers with localStorage persistence, and a fully responsive UI for mobile and desktop.",
    ],
    mobilePreview: NovaMobile,
    desktopPreview: NovaDesktop,
  },
  {
    pos: 10,
    title: "UI Playground",
    label: "development",
    imageUrl: UIPlaygroundPreview,
    category: [2],
    date: "2025",
    demoLink: "https://ui-playground-eight.vercel.app/",
    tags: [
      ["react js", "next.js", "typescript", "tailwind css", "framer motion", "heroui", "lucide icons"],
      [],
      ["git/github", "vercel", "local storage"],
    ],
    aboutText: [
      "A minimal design-system playground built with Next.js, HeroUI, TypeScript, Tailwind CSS, and Framer Motion.",
      "Lets you preview component states, tweak props live, and copy ready-to-use code snippets. Supports live controls for Button, Input, Card, and Modal — with size, variant, color, radius, and state toggles. Includes a dark/light theme switcher, card orientation toggle, and smooth Framer Motion transitions.",
    ],
    mobilePreview: UIPlaygroundMobile,
    desktopPreview: UIPlaygroundDesktop,
  },
];

export const PreloaderSeter = React.createContext(null);
export const PreloaderStat = React.createContext(null);
export const OverlayStat = React.createContext(null);
export const BurgerActivated = React.createContext(null);
export const PreloaderLabelText = React.createContext(null);
export const PortfolioSearch = React.createContext(null);
export const mainPortfolio = React.createContext(null);
export const CategoryActive = React.createContext(null);

function App() {
  const [projects, setProjects] = React.useState([]);
  const [mainProjects, setMainProjects] = React.useState([]);
  const [mainProjectsCount, setMainProjectsCount] = React.useState(4);
  const [totalProjectsCount, setTotalProjectsCount] = React.useState(0);
  const [scrollReady, setScrollReady] = React.useState(false);
  const [modal, setModal] = React.useState({ active: false, index: 0 });
  const [scrollTargetMarker, setScrollTargetMarker] = React.useState(false);

  const [preloader, setPreloader] = React.useState(true);
  const [preloaderFinish, setPreloaderFinish] = React.useState(false);
  const [burgerActive, setBurgerActive] = React.useState(false);

  const [preloaderLabel, setPreloaderLabel] = React.useState("home");

  const [searchValue, setSearchValue] = React.useState("");
  const [categoryActive, setCategoryActive] = React.useState(0);

  React.useEffect(() => {
    setProjects(projectsPortfolio.slice().reverse().slice(0, 4));

    setTotalProjectsCount(projectsPortfolio.length);
  }, []);

  React.useEffect(() => {
    setMainProjects(
      projectsPortfolio.slice().reverse().slice(0, mainProjectsCount)
    );
    setMainProjects(projectsPortfolio);
  }, [mainProjectsCount]);

  return (
    <PreloaderSeter.Provider value={[setPreloader]}>
      <PreloaderStat.Provider value={[preloader]}>
        <OverlayStat.Provider value={[preloaderFinish, setPreloaderFinish]}>
          <BurgerActivated.Provider value={[burgerActive, setBurgerActive]}>
            <PreloaderLabelText.Provider
              value={[preloaderLabel, setPreloaderLabel]}>
              <PortfolioSearch.Provider value={[searchValue, setSearchValue]}>
                <mainPortfolio.Provider
                  value={[
                    mainProjectsCount,
                    setMainProjectsCount,
                    totalProjectsCount,
                  ]}>
                  <CategoryActive.Provider
                    value={[categoryActive, setCategoryActive]}>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Layout
                            scrollTargetMarker={scrollTargetMarker}
                            setScrollTargetMarker={setScrollTargetMarker}
                            scrollReady={scrollReady}
                            setScrollReady={setScrollReady}
                          />
                        }>
                        <Route
                          index
                          element={
                            <Home
                              projects={projects}
                              modal={modal}
                              setModal={setModal}
                              setScrollTargetMarker={setScrollTargetMarker}
                              scrollReady={scrollReady}
                            />
                          }
                        />
                        <Route
                          path="reviews"
                          element={
                            <ReviewsPage
                              projects={projects}
                              modal={modal}
                              setModal={setModal}
                            />
                          }
                        />
                        <Route path="write-me" element={<WriteMe />} />
                        <Route path="about" element={<AboutMe />} />
                        <Route
                          path="portfolio"
                          element={
                            <Portfolio
                              projects={mainProjects}
                              modal={modal}
                              setModal={setModal}
                            />
                          }
                        />
                        <Route
                          path="portfolio?/:project"
                          element={
                            <Project
                              projectList={projectsPortfolio}
                              modal={modal}
                              setModal={setModal}
                            />
                          }
                        />

                        <Route path="*" element={<NotFound />} />
                      </Route>
                    </Routes>
                  </CategoryActive.Provider>
                </mainPortfolio.Provider>
              </PortfolioSearch.Provider>
            </PreloaderLabelText.Provider>
          </BurgerActivated.Provider>
        </OverlayStat.Provider>
      </PreloaderStat.Provider>
    </PreloaderSeter.Provider>
  );
}

export default App;
