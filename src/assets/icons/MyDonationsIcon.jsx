import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="#061407"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m20.7 11.5-2-2-2 2M19 10a9 9 0 1 1-1.245-4.57M10 5v5l3 2"
        />
    </svg>
)
export default SvgComponent
