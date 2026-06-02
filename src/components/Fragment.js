import styled from "styled-components"

const Fragment = styled.div`
    position: relative;
    width: 100dvw;
    height: 100vh;
    
    svg#background {
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
    }

    .rope-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .rope-wrapper svg {
        position: absolute;
        filter: drop-shadow(24px 0px 3px rgba(0, 0, 0, 0.50));
        transform: translate(-50%, -25%);
    }

    .rope-wrapper svg#first-rope {
        left: 33%;
    }

    .rope-wrapper svg#second-rope {
        left: 52%;
    }

    .rope-wrapper svg#third-rope {
        left: 60%;
    }

    .rope-wrapper svg#fourth-rope {
        left: 71%;
    }

    .tittle {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }


    .tittle h1 {
        position: relative;
        font-size: 100px;
        font-family: var(--logo-font);

        color: var(--clr-green-500);
    }
    
    .border {
        position: absolute;
        color: transparent;
        -webkit-text-stroke: 18px #000;
    }
    
    .fill {
        text-shadow: 24px 16px 3px rgba(0, 0, 0, 0.50);
        position: relative;
    }

    .brick-wall {
        position: fixed;
        bottom: 0;
        left: 0;
    }

    svg#dog {
        position: fixed;
        right: 2%;
        bottom: 0;
    }

`

export default Fragment