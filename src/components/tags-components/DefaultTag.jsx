import styled from "styled-components";

function DefaultTag({name}) {

    return(
        <Default>
            <p>{name}</p>
        </Default>
    )
}

const Default = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 8px;

    font-family: var(--main-font), sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 51%;

    border-radius: 50px;
    background: var(--clr-neutral-200, #C6C6C6);
`;

export default DefaultTag