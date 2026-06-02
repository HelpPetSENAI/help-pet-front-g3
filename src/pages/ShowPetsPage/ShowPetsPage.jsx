import Header from "../../components/pet-header/Header.jsx";
import * as S from "../RegisterPetPage/style.js";
import DonationCard from "../../components/donation-card/DonationCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../components/header-side-bar/Index.jsx";

function ShowPetPage() {
    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbm5AZ21haWwuY29tIiwidXNlcklkIjozLCJpYXQiOjE3NzkxMDQzMTV9.SuusoaQ2crfm5FTC5k4xHMXAvBU98h0W7SqBIADwfVI7alfIsuGxQX5yvzpntRPq";
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        axios.get("https://help-pet-back-g2.azurewebsites.net/donations/viewAll", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setDonations(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar doações:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <S.Container>
            <Header
                IsHamburguer={true}
                onOpenSidebar={() => setIsSidebarOpen(true)}
            />

            <SideBar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <S.MainContent>
                {loading ? ( <p>Carregando pets...</p> ) : (
                    donations.map((donation) => (
                        <DonationCard
                            key={donation.id}
                            id={donation.id}
                            specie={donation.specie}
                            name={donation.name}
                            breed={donation.breed}
                            size={donation.size}
                            url={donation.photos && donation.photos.length > 0
                                ? donation.photos[0]
                                : "https://via.placeholder.com/150"}
                        />
                    ))
                )}
                {!loading && donations.length === 0 && (
                    <p>Nenhuma doação encontrada no momento.</p>
                )}
            </S.MainContent>
        </S.Container>
    );
}

export default ShowPetPage;