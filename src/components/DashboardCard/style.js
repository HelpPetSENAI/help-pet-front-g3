import styled from "styled-components";

export const StyledDashboardCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    grid-column: span 1;
    grid-row: span ${props => props.$mobileRowSpan};

    padding: 0.5rem;

    background-color: var(--clr-neutral-100);
    border: 4px solid var(--clr-red-1000);
    border-radius: 15px;

    @media (min-width: 700px) {
    grid-column: span ${props => props.$colSpan};
    grid-row: span ${props => props.$rowSpan};

    padding: 1rem;
    }
`