import React from 'react';

const StaticButton = ({func, text}) => {
    return (
      <button onClick={() => func()} className="button">
        <span className="button__text">{text}</span>

        <span className="button__text-hidden">{text}</span>

        <span className="button__decor"></span>
      </button>
    );
}

export default StaticButton;
