import React from "react"
import {Link} from "gatsby";
import Lottie from "lottie-react"
import animation from "../../static/animations/404.json"

import "styles/pages/404.scss"

export default function Page404() {
    return <div className="page-404">
        <Lottie animationData={animation} loop={true}/>
        <span>
            Look's like you're lost
            <br/>
            Go back to the <Link to="/">home page</Link>
        </span>
    </div>
}