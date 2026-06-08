import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm.jsx";
import ButtonLogin from "../../components/Button/ButtonLogin.jsx";
import SocialLogin from "../../components/buttonSocial/SocialLogin.jsx";
import { login } from "../../service/AuthService.js"
import Background from "../../components/Background/Background.jsx";


export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Email ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <Background>
    <div className="container-login">
      <div className="left-side">
        <LoginForm userType="login" formData={formData} onChange={handleChange} />
        {error && <p style={{ color: "red", margin: "8px 0" }}>{error}</p>}
        <ButtonLogin onClick={handleLogin} loading={loading} />
        <SocialLogin type="login" />
      </div>
      <div className="right-side"></div>
    </div>
    </Background>
  );
}