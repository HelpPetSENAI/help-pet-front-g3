import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px; 
`;

export const SocialLoginButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 8px 20px;
  width: 180px;

  font-size: 12px;
  font-weight: 500;

  background: #fff;
  border: 1px solid #001a1a;
  box-shadow: 2px 2px 0 0 #061407;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #000;
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0px 0px 0px #000;
  }
`;

export const SocialLoginText = styled.p`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const SocialLoginLink = styled.span`
  color: blue;
  font-weight: 600;
  cursor: pointer;
`;
