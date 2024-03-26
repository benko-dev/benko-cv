import React from "react"
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './index.scss'

import arrow from "../../img/icons/arrow-right-bottom-white.svg"

function ProjectModal({modal, projects}) {

    const {active, index} = modal;

    const modalContainer = React.useRef(null);
    const cursor = React.useRef(null);
    const cursorLabel = React.useRef(null);

    const scaleAnimation = {
        initial: {scale: 0, x:"-50%", y:"-50%"},
        enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.3, ease: [0.11, 0, 0.5, 0]}},
        closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.3, ease: [0.11, 0, 0.5, 0]}}
    }

    React.useEffect( () => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
    
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY} = e;
          xMoveContainer(pageX)
          yMoveContainer(pageY)
          xMoveCursor(pageX)
          yMoveCursor(pageY)
          xMoveCursorLabel(pageX)
          yMoveCursorLabel(pageY)
        })
    }, [])

    return (
        <>
            <motion.div ref={modalContainer} className="modal-container"
                variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}    
            >
                <div className="modal-slider" style={{top: (index - 1) * -100 + "%"}}>
                    {projects.map((obj, i) => {
                        return (
                            <div className="modal-item" key={i}>
                                <div className="modal-item__wrapper">
                                    <img src={obj.imageUrl} alt="" className="modal-item__bg" />

                                    <img src={obj.imageUrl} alt={`${obj.title} preview`}  className="modal-item__image" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div ref={cursor} className="modal-cursor" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className="modal-cursor-label" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
                <img src={arrow} alt="link" />
            </motion.div>
        </>
    )
}

export default ProjectModal;