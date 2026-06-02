import styled from "styled-components";


export const StyledHealthCheck = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    gap: 0.5rem;

    padding-top: 0.5rem;

    > p {
        font-size: 1rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
    }
`

export const StyledTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
`

export const StyledStatusWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4 {
        font-size: 1.125rem;
        font-weight: 500;
    }
`

export const StyledStatus = styled.p`
    padding: 8px;
    
    font-size: 1rem;
    text-transform: uppercase;
    
    border-radius: 7.5px;
    color: var(--clr-neutral-100);
    background-color: ${props =>
        props.$isLoading
            ? 'var(--clr-neutral-500)'
            : props.$isSucessful
                ? 'var(--clr-green-500)'
                : 'var(--clr-red-500)'};
`