import styled from "styled-components";
import decor from "../../assets/images/decor.svg";

const Decor = styled.div`
  position: absolute;
  inset: 0;

  background: url(${decor}) no-repeat right center;
  background-size: contain;

  opacity: 0.25;
  pointer-events: none;
`;

export default function BackgroundDecoration() {
  return <Decor />;
}