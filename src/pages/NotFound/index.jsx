import React from 'react';
import styles from './index.module.scss'
import Button from '../../components/button';

import errorPreview from '../../img/error.png'

const NotFound = () => {
    return (
      <section className="main__error">
        <div className="error__container">
          <div className={styles.errorWrapper}>
            <div className={styles.errorWrapper__preview}>
              <img src={errorPreview} alt="error 404" />
            </div>
            <div className={styles.errorWrapper__article}>
              <h1 className="title">page not found</h1>

              <p>
                If you see this page, something went wrong. <br /> Please report
                to <a href="mailto:benkowebdev@gmail.com">support</a>
              </p>

              <div className={styles.errorButton}>
                <Button text="Home" href="/" label="home" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default NotFound;