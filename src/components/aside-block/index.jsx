import React from "react";

const AsideBlock = ({children, title}) => {
  return (
    <div className="aside-block">
      <h3 className="aside-block__title">{title}</h3>
      <div className="aside-block__body">{children}</div>
    </div>
  );
};

export default AsideBlock;
