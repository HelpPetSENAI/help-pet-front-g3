import HamburguerIcon from "../../assets/icons/HamburguerIcon.jsx";
import styled from "styled-components";
import HomeIcon from "../../assets/icons/HomeIcon.jsx";
import { Link } from "react-router-dom";
import ConfigIcon from "../../assets/icons/ConfigIcon.jsx";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";
import AddIcon from "../../assets/icons/AddIcon.jsx";
import MyDonationsIcon from "../../assets/icons/MyDonationsIcon.jsx";
import MessagesIcon from "../../assets/icons/MessagesIcon.jsx";
import { useEffect, useRef } from "react";

function SideBar({ isOpen, onClose }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            <SideBarContainer ref={sidebarRef} $isOpen={isOpen}>
                <SideBarWrapper>
                    <LinksWrapper to="/">
                        <HomeIcon/>
                        <SideBarLink  style={{color: "#EBF9EC"}}>Home</SideBarLink>
                    </LinksWrapper>
                    <LinksWrapper to="/register-pet">
                        <AddIcon/>
                        <SideBarLink >Doar Pet</SideBarLink>
                    </LinksWrapper>
                    <LinksWrapper to="/my-donations">
                        <MyDonationsIcon/>
                        <SideBarLink >Minhas doações</SideBarLink>
                    </LinksWrapper>
                    <LinksWrapper to="/messages">
                        <MessagesIcon/>
                        <SideBarLink >Mensagens</SideBarLink>
                    </LinksWrapper>
                    <LinksWrapper to="/config">
                        <ConfigIcon/>
                        <SideBarLink >Configurações</SideBarLink>
                    </LinksWrapper>
                    <LinksWrapper to="/search">
                        <SearchIcon/>
                        <SideBarLink >Pesquisar</SideBarLink>
                    </LinksWrapper>
                </SideBarWrapper>
            </SideBarContainer>
        </>
    );
}

export default SideBar;

export const SideBarContainer = styled.div`
    display: flex;
    width: 229px;
    height: 832px;
    padding: 45px 30px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    flex-shrink: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;

    border-radius: 40px 0 0 40px;
    border: 2px solid var(--crl-green-1000, #061407);
    background: var(--crl-green-500, #39C442);
    box-shadow: -13px 13px 0 0 var(--crl-green-1000, #061407);

    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;

export const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`;

export const LinksWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SideBarLink = styled.p`
    color: var(--crl-green-1000, #061407);
    font-family: var(--main-font), sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;

    &:hover {
        color: var(--clr-green-50, #EBF9EC);
    }
`