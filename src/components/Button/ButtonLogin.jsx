import { StyledButton } from "../../styles/ButtonStyle";

export default function ButtonLogin({ onClick, loading }) {
  return (
    <StyledButton type="button" onClick={onClick} disabled={loading}>
      {loading ? "Entrando..." : "Fazer Login"}
    </StyledButton>
  );
}