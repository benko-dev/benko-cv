import './index.scss';
import gsap from 'gsap';
import React from 'react'

function SectionHeader(props) {
    const firstText = React.useRef(null);
    const secondText = React.useRef(null);
    const slider = React.useRef();
    const xPercent = React.useRef(0);

    let direction = -1;

    const animate = React.useCallback(() => {
        if (xPercent.current < -100) {
            xPercent.current = 0;
        } else if (xPercent.current > 0) {
            xPercent.current = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent.current });
        gsap.set(secondText.current, { xPercent: xPercent.current });
        requestAnimationFrame(animate);
        xPercent.current += 0.03 * direction;
    }, [direction]);

    React.useEffect( () => {
        requestAnimationFrame(animate);
    }, [animate])

    return (
      <div className="section-header">
            <div>
                <div className="section-header__live-line" ref={slider}>
                    <div className="section-header__live-line-wrapper" ref={firstText}>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                    </div>
                    <div className="section-header__live-line-wrapper" ref={secondText}>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                        <span className="section-header__line-el">{props.title}</span>
                    </div>
                </div>
            </div>
        <div className="section-header__container-small">
            <h2 className="section-header__title title">{props.title}</h2>
        </div>
      </div>
    );
}
  
export default SectionHeader;