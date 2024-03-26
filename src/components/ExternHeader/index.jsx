import React from 'react';
import styles from './style.module.scss'
import { Parallax } from "react-scroll-parallax";

import headerBg from '../../img/bg/ex-header-bg.png'

const ExternHeader = ({ title }) => {
    return (
      <div className={styles.header}>
        <div className={`${styles.header__container} __container-big`}>
          <div className={styles.header__wrapper}>
            <Parallax speed={-6}>
              <img src={headerBg} alt={title} className={styles.header__bg} />
            </Parallax>

            <h1 className={styles.header__title}>
              <Parallax speed={3}>
                <span>{title}</span>
              </Parallax>
            </h1>
          </div>
        </div>
      </div>
    );
}

export default ExternHeader;
