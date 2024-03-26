import React from 'react';

const AsideMenuEl = ({link, text}) => {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="uppercase">
        {text}
      </a>
    );
}

export default AsideMenuEl;
