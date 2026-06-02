import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForms from "../../components/Forms/SignUpForms.jsx";
import ButtonSignUp from "../../components/Button/ButtonSignUp.jsx";
import SocialLogin from "../../components/buttonSocial/SocialLogin.jsx";
import Background from "../../components/Background/Background.jsx";
import { register } from "../../service/AuthService.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cep: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    setError("");

    if (!formData.cep.trim()) {
      setError("CEP obrigatório!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.phone,
        formData.cep
      );
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <div className="container-login">
        <div className="left-side">
          <SignUpForms userType="signup" formData={formData} onChange={handleChange} />
          {error && <p style={{ color: "red", margin: "8px 0" }}>{error}</p>}
          <ButtonSignUp onClick={handleRegister} loading={loading} />
          <SocialLogin type="signup" />
        </div>
      </div>
    </Background>
  );
}