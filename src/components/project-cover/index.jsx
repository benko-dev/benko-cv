import React from "react"
import './index.scss'

function ProjectCover({title, imageUrl, index, label, setModal}) {
    return (
        <div className="project" 
            onMouseEnter={() => {setModal({active: true, index: index})}}
            onMouseLeave={() => {setModal({active: false, index: index})}}
        >
            <div className="project__preview">
                <img src={imageUrl} alt="" className="project__previewBg" />
                <img src={imageUrl} alt={`${title} preview`} />
            </div>
            <div className="project__info">
                <span className="project__number">{index < 10 ? `0${index}` : index}</span>
                <h2 className="project__title">{title}</h2>
                <span className="project__label">{label}</span>
            </div>
        </div>
    )
}

export default ProjectCover;