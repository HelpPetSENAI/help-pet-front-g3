import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={13}
        fill="none"
        {...props}
    >
        <path
            stroke="#061407"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.3}
            d="m16.65.65-11 11-5-5"
        />
    </svg>
)
export default SvgComponent
