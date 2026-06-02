import {
  containerStyle,
  titleStyle,
  labelInputRow,
  labelStyle,
  inputStyle,
} from "../../styles/FormStyles";
import Logo from "../../assets/images/Login/Logo.svg";

export default function SignUpForms({ userType, formData, onChange }) {
  return (
    <div style={containerStyle}>
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "95px",
          marginBottom: "10px",
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
        <label style={labelStyle}>SEU NOME</label>
      </div>
      <input
        type="text"
        placeholder="Digite seu nome"
        style={inputStyle}
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <div style={labelInputRow}>
        <label style={labelStyle}>SEU TELEFONE</label>
      </div>
      <input
        type="tel"
        placeholder="Digite seu telefone"
        style={inputStyle}
        value={formData.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <div style={labelInputRow}>
        <label style={labelStyle}>SEU CEP</label>
      </div>
      <input
        type="text"
        placeholder="Digite seu CEP"
        style={inputStyle}
        value={formData.cep}
        onChange={(e) => onChange("cep", e.target.value)}
      />
      <div style={labelInputRow}>
        <label style={labelStyle}>CRIE UMA SENHA</label>
      </div>
      <input
        type="password"
        placeholder="Digite sua senha"
        style={inputStyle}
        value={formData.password}
        onChange={(e) => onChange("password", e.target.value)}
      />
      <div style={labelInputRow} />
      <input
        type="password"
        placeholder="Repita sua senha"
        style={inputStyle}
        value={formData.confirmPassword}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
      />
    </div>
  );
}