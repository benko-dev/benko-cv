import React from "react"
import Lenis from '@studio-freight/lenis'

function SmoothScroll({children, marker, markerFunc, preloaderFinish, setPreloaderFinish}) {
    React.useEffect( () => {
        const lenis = new Lenis()
        const options = {
            easing: [.51,.92,.24,1.15],
        };
        
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
        if (preloaderFinish) {
            lenis.scrollTo(0, {duration: 0})
            setPreloaderFinish(false)
        }

        if (marker === true) {
            lenis.scrollTo(window.innerHeight, options)
            markerFunc(false)
        }

    }, [marker, preloaderFinish])
  
    return children;
}

export default SmoothScroll;