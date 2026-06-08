import {
  SocialLoginButton,
  SocialLoginContainer,
  SocialLoginText,
  SocialLoginLink,
  SocialWrapper
} from "../../styles/SocialLoginStyles";

import { Link } from "react-router-dom";

export default function SocialLogin({ type }) {
  return (
    <SocialWrapper>
      <SocialLoginText>
        {type === "login" && (
          <>
            Não tem conta?{" "}
            <SocialLoginLink as={Link} to="/signup">
              Faça seu cadastro
            </SocialLoginLink>
          </>
        )}

        {type === "signup" && (
          <>
            Já tem uma conta?{" "}
            <SocialLoginLink as={Link} to="/login">
              Faça seu login
            </SocialLoginLink>
          </>
        )}
      </SocialLoginText>
    </SocialWrapper>
  );
}