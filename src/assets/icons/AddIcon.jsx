import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <path
            stroke="#061407"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
        />
    </svg>
)
export default SvgComponent
