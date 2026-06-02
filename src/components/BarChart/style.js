import styled from "styled-components";


export const StyledCanvasWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.2rem;
  padding: 1rem 0 0 0;

  width: 100%;

  p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
  }

  canvas {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    max-height: 525px;
  }

  @media(min-width: 700px) {
    canvas {
      max-height: 375px;
    }
  }
`