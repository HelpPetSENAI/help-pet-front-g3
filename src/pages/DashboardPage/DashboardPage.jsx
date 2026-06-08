import { useEffect, useState } from "react";
import BarChart from "../../components/BarChart";
import DashBoardCard from "../../components/DashboardCard";
import HealthCheck from "../../components/HealthCheck";
import { DashboardSectionStyle, PageContainer } from "./DashboardSectionStyle";
import Header from "../../components/pet-header/Header";
import SideBar from "../../components/header-side-bar/Index";

/**
 * Mapeamento dos serviços reais do projeto:
 * - gateway: o próprio API Gateway (porta 8080)
 * - helppet: microsserviço G8 - HelpPet (porta 8081)
 * 
 * Os outros (G1-G5) estão configurados no Gateway mas não existem ainda,
 * então serão exibidos como NOT_CONFIGURED automaticamente pelo health endpoint.
 */
const SERVICE_CARDS = [
    { key: 'gateway', serviceName: 'API Gateway' },
    { key: 'g1_auth_users', serviceName: 'Autenticação' },
    { key: 'g2_pets', serviceName: 'Pets' },
    { key: 'g3_adoption', serviceName: 'Adoção' },
    { key: 'g4_chat', serviceName: 'Conversas' },
    { key: 'g5_notifications', serviceName: 'Notificações' },
];

export default function Dashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <PageContainer>
            <Header IsHamburguer={true} onOpenSidebar={() => setIsSidebarOpen(true)} />

            <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <DashboardSectionStyle>
                {/* Card principal: gráfico de métricas semanais */}
                <DashBoardCard colSpan={2} rowSpan={3} mobileRowSpan={4} title={'Gráfico de barra'}
                    description={'Quantidades de requisições e respostas dos últimos 7 dias'} content={<BarChart />} />

                {/* Cards de health check dos serviços reais */}
                {SERVICE_CARDS.map((service) => (
                    <DashBoardCard key={service.key} colSpan={1} rowSpan={1}
                        title={'Health Check'}
                        content={
                            <HealthCheck serviceName={service.serviceName} serviceKey={service.key}
                            />
                        }
                    />
                ))}
            </DashboardSectionStyle>
        </PageContainer>
    )
}