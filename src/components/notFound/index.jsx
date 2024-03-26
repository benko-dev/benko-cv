import React from 'react';
import "./style.scss"
import empty from '../../img/decor/empty.png'

const NotFound = () => {
    return (
      <div className="notFound">
        <div className="notFound__preview">
          <img src={empty} alt="" />
        </div>
        <div className="notFound__title">Nothing ...</div>
      </div>
    );
}

export default NotFound;
