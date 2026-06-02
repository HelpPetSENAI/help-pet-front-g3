import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import BackgroundImages from "./BackgroundDecoration";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: var(--clr-green-500);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 60%;
        height: 100%;
        background: linear-gradient(180deg, var(--clr-green-900), var(--clr-green-500));
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    min-width: 430px;
    min-height: 100vh;
    padding: 24px 20px 40px;

    @media (max-width: 900px) {
        width: 100%;
        min-width: 0;
    }
`;

export default function Background({ children }) {
    return (
        <Container>
            <BackgroundImages />
            <Content>
                {children}
            </Content>
        </Container>
    );
}
