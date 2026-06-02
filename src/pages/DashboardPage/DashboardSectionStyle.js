import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--clr-green-500);
    overflow: hidden;
`

export const DashboardSectionStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
    gap: 1rem;
    
    font-family: var(--main-font);
    
    width: 100%;
    height: 100%;
    padding: 1rem;
    overflow: auto;
    
    border-radius: 30px 30px 0 0;
    border: 4px solid var(--clr-green-1000);
    background-color: var(--clr-green-50);

    @media(min-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media(min-width: 1080px) {
        grid-template-columns: 1fr 2fr 1fr 1fr;
    }
`