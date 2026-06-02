import {
  containerStyle,
  titleStyle,
  labelInputRow,
  labelStyle,
  inputStyle,
  forgotStyle,
} from "../../styles/FormStyles.js";
import Logo from "../../assets/images/Login/Logo.svg";

export default function LoginForm({ userType, formData, onChange }) {
  return (
    <div style={containerStyle}>
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "120px",
          marginBottom: "20px",
          alignSelf: "center",
          transform: "translateX(5px)",
        }}
      />
      <h2 style={titleStyle}>
        Deseja adotar um pet? Faça login na sua conta!
      </h2>
      <div style={labelInputRow}>
        <label style={labelStyle}>SEU EMAIL</label>
      </div>
      <input
        type="email"
        placeholder="Digite seu email"
        style={inputStyle}
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <div style={labelInputRow}>
        <label style={labelStyle}>SUA SENHA</label>
        <a href="#" style={forgotStyle}>esqueceu sua senha?</a>
      </div>
      <input
        type="password"
        placeholder="Digite sua senha"
        style={inputStyle}
        value={formData.password}
        onChange={(e) => onChange("password", e.target.value)}
      />
    </div>
  );
}