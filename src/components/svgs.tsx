import React, { FC, memo } from "react";

export const LinkIcon: FC = memo(() => {
    return <svg width={ 12 } height={ 12 } viewBox="0 0 12 12" fill="none">
        <path
            d="M10.5 1.5L1.5 10.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.5 1.5H10.5V7.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
})