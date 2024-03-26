import React from "react";
import emailjs from "@emailjs/browser";

import greenRing50 from "../img/decor/green-ring50-2.svg";
import orangeRing50 from "../img/decor/orange-ring50-1.svg";
import blueRing50 from "../img/decor/blue-ring50-1.svg";
import errorIcon from "../img/icons/error-icon.svg";
import successIcon from "../img/icons/success-icon.svg";

import AsideBlock from "../components/aside-block";
import AsideMenuEl from "../components/aside-menu-el";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView, useAnimation } from "framer-motion";
import GsapMagnetic from "../components/GsapMagnetic";

const social = [
  { title: "telegram", link: "https://t.me/benko_dev" },
  {
    title: "instagram",
    link: "https://instagram.com/benko_web_dev?igshid=OGQ5ZDc2ODk2ZA==",
  },
  { title: "dribbble", link: "https://dribbble.com/benko_web_dev" },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/dima-dzyubenko-a7285420b/",
  },
];

const WriteMe = () => {
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [ideaValue, setIdeaValue] = React.useState("");
  const [serviceValue, setServiceValue] = React.useState("");
  const [messageValue, setMessageValue] = React.useState("");

  const [formStatus, setFormStatus] = React.useState(true);
  const [statusVisible, setStatusVisible] = React.useState(false);

  const greenBrash = React.useRef(null);
  const orangeBrash = React.useRef(null);
  const BrashInView = useInView(greenBrash, {
    once: true,
  });
  const BrashInViewSecond = useInView(orangeBrash, {
    once: true,
  });

  const BrashInViewAnim = useAnimation();
  const BrashInViewSecondAnim = useAnimation();

  React.useEffect(() => {
    if (BrashInView) {
      BrashInViewAnim.start("visible");
    }
  }, [BrashInView, BrashInViewAnim]);
  React.useEffect(() => {
    if (BrashInViewSecond) {
      BrashInViewSecondAnim.start("visible");
    }
  }, [BrashInViewSecond, BrashInViewSecondAnim]);

  const inputHandler = (e, seter) => {
    seter(e.target.value);
  };

  const form = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_beu9lco",
        "template_ob400ef",
        form.current,
        "xt7N5rNFTD1vOmD-9"
      )
      .then(
        (result) => {
          setNameValue("");
          setEmailValue("");
          setIdeaValue("");
          setServiceValue("");
          setMessageValue("");

          setFormStatus(true);
          setStatusVisible(true);

          window.setTimeout(() => {
            setStatusVisible(false);
          }, 4000);
        },
        (error) => {
          setFormStatus(false);
          setStatusVisible(true);

          window.setTimeout(() => {
            setStatusVisible(false);
          }, 4000);
        }
      );

    e.target.reset();
  };

  return (
    <section className="write-me">
      <div className="write-me__container-small">
        <div className="write-me__wrapper">
          <div className="write-me__top">
            <img
              src={blueRing50}
              alt=""
              className="write-me__decor write-me__decor-blue anim-circle-type1"
            />
            <img
              src={orangeRing50}
              alt=""
              className="write-me__decor write-me__decor-orange anim-circle-type2"
            />
            <img
              src={greenRing50}
              alt=""
              className="write-me__decor write-me__decor-green anim-circle-type3"
            />

            <Parallax speed={10}>
              <h1 className="write-me__title">
                let's turn your dream into reality
              </h1>
            </Parallax>
          </div>

          <div className="write-me__body">
            <form
              className="write-me__form write-form"
              ref={form}
              onSubmit={(e) => sendEmail(e)}>
              <div className="write-form__inputs">
                <div
                  className="write-me-brash-decor write-me-brash-decor_green"
                  ref={greenBrash}>
                  <Parallax speed={2}>
                    <svg
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        initial="hidden"
                        animate={BrashInViewAnim}
                        variants={{
                          hidden: {
                            opacity: 0,
                            pathLength: 0,
                          },
                          visible: {
                            opacity: 1,
                            pathLength: 1,
                            transition: {
                              duration: 1.2,
                              delay: 0.3,
                              ease: "easeIn",
                            },
                          },
                        }}
                        id="Vector 13"
                        d="M65.0119 4C49.5918 11.3905 34.0285 18.572 18.7908 26.3402C18.1244 26.6799 13.242 28.5168 16.4027 29.3446C23.8523 31.2957 32.376 29.6444 39.5903 31.7327C41.7937 32.3705 36.0605 34.6693 34.1978 36.0081C25.5829 42.2001 17.2159 48.8353 9.73913 56.384C7.12961 59.0186 4 61.798 4 65.7052"
                        stroke="#ABFF22"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Parallax>
                </div>
                <div
                  className="write-me-brash-decor write-me-brash-decor_orange"
                  ref={orangeBrash}>
                  <Parallax speed={2}>
                    <svg
                      viewBox="0 0 89 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        initial="hidden"
                        animate={BrashInViewSecondAnim}
                        variants={{
                          hidden: {
                            opacity: 0,
                            pathLength: 0,
                          },
                          visible: {
                            opacity: 1,
                            pathLength: 1,
                            transition: {
                              duration: 1.2,
                              delay: 0.3,
                              ease: "easeIn",
                            },
                          },
                        }}
                        id="Vector 12"
                        d="M84.7595 4.79726C75.8426 6.26174 66.9143 7.1987 57.96 8.35885C52.1298 9.11422 45.5804 8.75151 48.2495 16.2998C48.856 18.0147 55.1458 26.6422 52.4595 27.6096C44.9734 30.3056 34.7418 28.4423 27.0661 28.155C21.756 27.9562 12.8741 26.1341 7.62536 28.4115C2.31025 30.7177 13.8698 39.0351 15.6831 40.1344C17.8514 41.4491 16.7741 41.4181 16.742 43.5851C16.6733 48.2281 6.99276 46.7187 4.51875 51.4888"
                        stroke="#FFC114"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Parallax>
                </div>

                <div className="write-form__field">
                  <input
                    id="name"
                    name="user_name"
                    value={nameValue}
                    onChange={(e) => inputHandler(e, setNameValue)}
                    type="text"
                    className="write-form__input"
                    autoComplete="off"
                    autofill="off"
                    required
                  />

                  <label
                    htmlFor="name"
                    id="name-label"
                    className={`write-form__label ${
                      nameValue.length > 0 ? "active" : ""
                    }`}>
                    Your name
                  </label>
                </div>
                <div className="write-form__field">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="write-form__input"
                    value={emailValue}
                    onChange={(e) => inputHandler(e, setEmailValue)}
                    required
                  />

                  <label
                    htmlFor="email"
                    id="email-label"
                    className={`write-form__label ${
                      emailValue.length > 0 ? "active" : ""
                    }`}>
                    your email
                  </label>
                </div>
                <div className="write-form__field">
                  <input
                    id="idea"
                    type="text"
                    name="idea"
                    className="write-form__input"
                    value={ideaValue}
                    onChange={(e) => inputHandler(e, setIdeaValue)}
                    required
                  />

                  <label
                    htmlFor="idea"
                    id="idea-label"
                    className={`write-form__label ${
                      ideaValue.length > 0 ? "active" : ""
                    }`}>
                    describe your idea in few words
                  </label>
                </div>
                <div className="write-form__field">
                  <input
                    id="service"
                    name="service"
                    type="text"
                    className="write-form__input"
                    value={serviceValue}
                    onChange={(e) => inputHandler(e, setServiceValue)}
                    required
                  />

                  <label
                    htmlFor="service"
                    id="service-label"
                    className={`write-form__label ${
                      serviceValue.length > 0 ? "active" : ""
                    }`}>
                    what service do you need
                  </label>
                </div>
                <div className="write-form__field">
                  <input
                    id="message"
                    name="message"
                    type="text"
                    className="write-form__input"
                    value={messageValue}
                    onChange={(e) => inputHandler(e, setMessageValue)}
                  />

                  <label
                    htmlFor="message"
                    id="message-label"
                    className={`write-form__label ${
                      messageValue.length > 0 ? "active" : ""
                    }`}>
                    your message (optional)
                  </label>
                </div>
              </div>
              <Parallax speed={4}>
                <GsapMagnetic>
                  <button type="submit" className="write-form__button">
                    Send
                  </button>
                </GsapMagnetic>
              </Parallax>

              <div
                className={`user-message ${
                  formStatus ? "user-message_green" : "user-message_red"
                } ${(statusVisible === true) ? "showed" : ""}`}>
                <div className="user-message__icon">
                  {formStatus && <img src={successIcon} alt="status-icon" />}
                  {!formStatus && <img src={errorIcon} alt="status-icon" />}
                </div>
                <div className="user-message__body">
                  {formStatus && (
                    <h3 className="user-message__title user-message__title_green">
                      Success!
                    </h3>
                  )}
                  {!formStatus && (
                    <h3 className="user-message__title user-message__title_red">
                      Error!
                    </h3>
                  )}

                  {formStatus && (
                    <p className="user-message__paragraph">
                      Message has been sent, please wait for a response.
                    </p>
                  )}
                  {!formStatus && (
                    <p className="user-message__paragraph">
                      The message could not be sent, something went wrong
                    </p>
                  )}
                </div>
              </div>
            </form>
            <div className="write-aside">
              <div className="write-aside__child">
                <AsideBlock title="contacts">
                  <a href={`mailto:benkowebdev@gmail.com`}>
                    benkowebdev@gmail.com
                  </a>
                  <a href={`tel:+380634837597`}>+380634837597</a>
                </AsideBlock>
                <AsideBlock title="contacts">
                  {social.map((obj) => {
                    return (
                      <AsideMenuEl
                        key={obj.title}
                        text={obj.title}
                        link={obj.link}
                      />
                    );
                  })}
                </AsideBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteMe;
