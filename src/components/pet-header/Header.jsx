import * as S from "./style.js";
import HelpPetLogo from "../../assets/icons/HelpPetLogo.jsx";
import HelpPetLogoText from "../../assets/icons/HelpPetLogoText.jsx";
import LeftArrow from "../../assets/icons/LeftArrow.jsx";
import HamburguerIcon from "../../assets/icons/HamburguerIcon.jsx";
import { useNavigate } from "react-router-dom";

function Header({ IsHamburguer, onOpenSidebar }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.state?.idx > 0) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    return (
        <S.PetHeader>
            <S.LogoContainer>
                <HelpPetLogo />
                <HelpPetLogoText />
            </S.LogoContainer>

            {IsHamburguer ? (
                <div
                    onClick={onOpenSidebar}
                    style={{ cursor: "pointer", display: "flex" }}
                >
                    <HamburguerIcon />
                </div>
            ) : (
                <div
                    onClick={handleBack}
                    style={{ cursor: "pointer", display: "flex" }}
                >
                    <LeftArrow />
                </div>
            )}
        </S.PetHeader>
    );
}

export default Header;