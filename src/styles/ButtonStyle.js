import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    display: block;
    padding: 12px 20px;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #061407;
    background-color: var(--green-300, #81da87);
    border: 2px solid var(--green-1000, #061407);
    box-shadow: 2px 2px 0 0 var(--green-1000, #061407);
    transition: all 0.2s ease;
    margin: 8px auto 0 auto;

    &:hover {
        transform: translate(2px, 2px);
        box-shadow: 3px 3px 0px #000;
    }

    &:active {
        transform: translate(6px, 6px);
        box-shadow: 0px 0px 0px #000;
    }
`;
