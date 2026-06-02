import styled from 'styled-components';

export const PetHeader = styled.header`
    width: 100%;
    height: 75px;
    background-color: var(--clr-green-500);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`;

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoText = styled.p `
    color: var(--clr-green-500);
    text-align: center;
    /* GShadow/min */
    text-shadow: 2px 2px 0 var(--clr-green-1000);
    -webkit-text-stroke-width: 1.4px;
    -webkit-text-stroke-color: var(--clr-green-1000);
    font-family: var(--logo-font);
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 36px */
`;