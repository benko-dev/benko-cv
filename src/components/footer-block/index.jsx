import React from "react";
import "./index.scss";


function FooterBlock({children, title}) {

    return (
        <div className="footer-block">
            <h2 className="footer-block__title">
                <span>{title}</span>
                <span className="footer-block__title-decor">
                    <svg width="72" height="10" viewBox="0 0 72 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector 7" d="M4.58915 2.33676C-8.27373 2.33676 30.3094 1.91431 43.1699 2.01572C50.4597 2.0732 57.5406 2.63272 64.7957 2.83117C66.432 2.87593 71.2397 2.75887 69.7001 2.99169C63.1561 3.98124 56.0308 4.49637 49.2108 5.02068C41.1071 5.64368 33.0121 6.29799 24.8915 6.88273C24.5543 6.90702 23.5756 6.93478 23.8951 6.98546C26.3455 7.37414 29.3361 7.48418 31.8977 7.64039C32.6458 7.68601 39.3449 8.00413 39.3399 7.99996" stroke="#BAFF49" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </span>
            </h2>
            <div className="footer-block__menu">
                {children}
            </div>
        </div>
    );
}
  
export default FooterBlock;