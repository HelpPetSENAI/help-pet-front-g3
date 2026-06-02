import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={27}
        fill="none"
        {...props}
    >
        <path
            stroke="#061407"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M7.625 13.25h22.5M2 2h33.75m-22.5 22.5H24.5"
        />
    </svg>
)
export default SvgComponent
