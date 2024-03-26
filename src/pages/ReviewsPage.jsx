import React from "react";
import Reviews from "../components/reviews";
import ExternHeader from "../components/ExternHeader";
import RecentWorks from "../components/recent-works";
import reviews from "../data/reviews.json";
import Review from "../components/review";
import StaticButton from "../components/static-button";

const ReviewsPage = ({ projects, setModal, modal }) => {
  const [reviewsState, setReviewsState] = React.useState([]);
  const [showedReviews, setShowedReviews] = React.useState(4);
  const [buttonText, setButtonText] = React.useState("More");

  React.useEffect(() => {
    setReviewsState(reviews);
  }, []);

  const loadReviewsHandler = () => {
    if (showedReviews !== reviewsState.length) {
      setShowedReviews(
        showedReviews + 4 <= reviewsState.length
          ? showedReviews + 4
          : showedReviews + reviewsState.length - showedReviews
      );
    } else {
      setShowedReviews(4);
    }
  };

  React.useEffect(() => {
    if (showedReviews === reviewsState.length) {
      setButtonText("Hide");
    } else {
      setButtonText("More");
    }
  }, [showedReviews, reviewsState.length]);

  return (
    <div>
      <ExternHeader title="Reviews" />
      <Reviews home={false} />

      <div className="reviews-list">
        <div className="reviews-list__container-small">
          <div className="reviews-list__wrapper">
            <div className="reviews-list__list">
              {reviewsState.slice(0, showedReviews).map((obj, i) => {
                return (
                  <Review
                    key={obj.url}
                    sex={obj.sex}
                    name={obj.name}
                    text={obj.text}
                    url={obj.url}
                    rate={obj.rate}
                  />
                );
              })}
            </div>

            <StaticButton text={buttonText} func={loadReviewsHandler} />
          </div>
        </div>
      </div>

      <div className="recent-works">
        <div className="recent-works__container-big">
          <div className="recent-works__wrapper">
            <RecentWorks
              projects={projects}
              modal={modal}
              setModal={setModal}
              label={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
