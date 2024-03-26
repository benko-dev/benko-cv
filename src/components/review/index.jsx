import React from "react"
import './index.scss'

import { Rating } from 'react-simple-star-rating'

import maleAvatar from '../../img/male-avatar.png';
import femaleAvatar from '../../img/female-avatar.png';

function Review({ sex, url, name, rate, text }) {



    return (
        <div className="review">
            <div className="review__header">
                <div className="review__avatar">
                    {(sex === "male" ? <img src={maleAvatar} alt="user avatar" /> :  <img src={femaleAvatar} alt="user avatar" />)}
                </div>

                <div className="review__header-info">
                    <h3 className="review__author-name">{name}</h3>
                    <div className="review-rate">
                        <div className="review-rate__stars">
                            <Rating initialValue={rate} size={25} />
                        </div>
                        <span className="review-rate__text">{rate}</span>
                    </div>
                </div>
            </div>
            <div className="review__body">
                <span className="review__subtitle">review text</span>
                <p>
                    {text}
                </p>
            </div>
            <a href={url} target="_blank" rel="noreferrer" className="review__button">see original</a>
        </div>
    )
}

export default Review;