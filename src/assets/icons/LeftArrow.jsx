import * as React from "react"
const LeftArrow = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={34}
        fill="none"
        {...props}
    >
        <path
            stroke="#061407"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M17 2 2 17l15 15"
        />
    </svg>
)
export default LeftArrow
