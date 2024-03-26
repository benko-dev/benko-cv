import React from "react";
import ExternHeader from "../components/ExternHeader";
import Reviews from "../components/reviews";
import { PortfolioSearch, CategoryActive, mainPortfolio } from "../App";
import RecentWorks from "../components/recent-works";

const categories = ["all", "design", "development"];

const Portfolio = ({ projects, setModal, modal, label }) => {
  const [searchValue, setSearchValue] = React.useContext(PortfolioSearch);
  const [categoryActive, setCategoryActive] = React.useContext(CategoryActive);
  const [filteredProjects, setFilteredProjects] = React.useState([]);
  const [mainProjectsCount, setMainProjectsCount, totalProjectsCount] =
    React.useContext(mainPortfolio);

  const categoryHandler = (i) => {
    setCategoryActive(i);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);
  React.useEffect(() => {
    setFilteredProjects(
      projects
        .slice()
        .reverse()
        .filter((obj) => {
          if (parseInt(categoryActive) === 0) {
            return true;
          }
          if (obj.category.includes(parseInt(categoryActive))) {
            return true;
          }
          return false;
        })
        .filter((obj) => {
          let same;
          if (searchValue.length !== 0) {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            } else {
              same = false;
              obj.tags.forEach((tag) => {
                tag.forEach((subtag) => {
                  if (
                    subtag.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    same = true;
                  }
                });
              });

              if (same) {
                same = false;
                return true;
              }

              return false;
            }
          } else {
            return true;
          }
        })
        .slice(0, mainProjectsCount)
    );
    const debounce = setTimeout(() => {}, 300);
  }, [searchValue, projects, categoryActive, mainProjectsCount]);

  return (
    <>
      <ExternHeader title="Portfolio" />

      <section className="portfolio-main">
        <div className="portfolio-main__container-big">
          <div className="portfolio-main__wrapper">
            <div className="portfolio-main__filter">
              <h2 className="portfolio-main__filter-header">filter</h2>
              <div className="portfolio-main__filter-body">
                <div className="portfolio-main__filter-categories">
                  {categories.map((obj, i) => {
                    return (
                      <button
                        onClick={() => categoryHandler(i)}
                        key={obj}
                        className={`portfolio-main__filter-category ${
                          i === categoryActive
                            ? "portfolio-main__filter-category_active"
                            : ""
                        }`}>
                        {obj}
                      </button>
                    );
                  })}
                </div>

                <div className="filter-search">
                  <input
                    type="text"
                    className="filter-search__input"
                    placeholder="Search by title or skills"
                    value={searchValue}
                    onChange={(e) => searchHandler(e)}
                  />

                  <svg
                    className="filter-search__icon"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      id="Vector"
                      d="M19.23 19.1883L25 25M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="portfolio-main__list">
              <RecentWorks
                projects={filteredProjects}
                modal={modal}
                setModal={setModal}
                label={false}
              />
            </div>
          </div>
        </div>
      </section>

      <Reviews home={true} />
    </>
  );
};

export default Portfolio;
