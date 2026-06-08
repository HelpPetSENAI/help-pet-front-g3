import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  width: 400px;
  height: 44px;
  padding: 10px;
  align-items: center;
  gap: 8px;

  background: var(--clr-green-500);
  border: 2px solid var(--clr-green-1000);
  margin: 20px 0;
  transition: width 0.3s ease;

  ${({ $status }) =>
    $status === "success" &&
    `
    width: 1220px;
    `}

  @media (max-width: 768px) {
    width: 315px;
  }

  @media (max-width: 350px) {
    width: 95%;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Inputtext = styled.input`
  border: none;
  background: none;
  color: var(--clr-neutral-1000);
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  outline: none;
  box-shadow: none;
`;

export const SearchButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
