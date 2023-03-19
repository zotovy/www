import {trackCustomEvent} from "gatsby-plugin-google-analytics";

/** Track custom project click event */
export const trackProjectClick = (project: string): void => {
    trackCustomEvent({
        category: "project",
        action: "Click",
        label: project,
    })
}