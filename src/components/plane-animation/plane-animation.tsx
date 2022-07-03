import React, {useEffect} from "react";
import "./plane-animation.scss"

// @ts-ignore
import anime from 'animejs/lib/anime.es.js'

export const PlaneAnimation: React.FC = () => {
    useEffect(() => {
        playAnimation();
    }, [])
    
    return <div className="plane-animation">
        <div className="shape"/>
        <div className="paperplane">
            <svg width="461" height="158" viewBox="0 0 462 158" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#3265b3" className="morph"
                         points="460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727"/>
                <polygon fill="#4183e7" className="morph2"
                         points="112.758683 38.9677241 184.146186 0 460.677372 157.296036"/>
                <polygon fill="#4183e7" className="morph3"
                         points="78.250435 57.8044647 460.677372 157.296036 0 100.518402"/>
            </svg>
        </div>
    </div>
}

const playAnimation = () => {
    anime({
        targets: ".morph",
        points: [{value: "460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036"}, {value: "460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727"}],
        easing: "easeInOutQuad",
        duration: 3e3,
        loop: !0
    });
    anime({
        targets: ".morph2",
        points: [{value: "108.040017 24.8652344 168.780251 0 460.677372 125.296036"}, {value: "112.758683 38.9677241 184.146186 0 460.677372 157.296036"}],
        easing: "easeInOutQuad",
        duration: 3e3,
        loop: !0
    });
    anime({
        targets: ".morph3",
        points: [{value: "75.3147561 38.1354167 460.677372 125.296036 0 68.5184024"}, {value: "78.250435 57.8044647 460.677372 157.296036 0 100.518402"}],
        easing: "easeInOutQuad",
        duration: 3e3,
        loop: !0
    })
}