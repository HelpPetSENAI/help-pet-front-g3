import { StyledHealthCheck, StyledStatus, StyledStatusWrapper } from "./style"
import iconSucess from '../../assets/icons/icon-sucess.svg'
import iconFail from '../../assets/icons/icon-fail.svg'
import { useEffect, useState } from "react";

/**
 * Componente de status de serviço.
 * 
 * Props:
 * - serviceName: nome do serviço a exibir (ex: "API Gateway", "G8 - HelpPet")
 * - status: "UP" | "DOWN" | "DEGRADED" | "NOT_CONFIGURED" | undefined (undefined = carregando)
 * - lastCheck: string com horário da última verificação
 */
export default function HealthCheck({ serviceName, serviceKey }) {
    const [healthData, setHealthData] = useState(null);
    const [lastCheck, setLastCheck] = useState(null);

    useEffect(() => {
        const fetchAllHealth = async () => {
            if (document.visibilityState === 'hidden') return;
            try {
                const response = await fetch('https://gateway-help-pet-aqhhahgdbuaahfc8.brazilsouth-01.azurewebsites.net/api/health');
                const data = await response.json();
                setHealthData(data);
            } catch (err) {
                setHealthData({ gateway_status: 'DOWN', services: {} });
            } finally {
                setLastCheck(new Date().toLocaleTimeString('pt-br'));
            }
        };

        fetchAllHealth();
    }, []);

    const getStatus = () => {
        if (!healthData) return undefined; // carregando
        if (serviceKey === 'gateway') return healthData.gateway_status;
        return healthData.services?.[serviceKey] || 'NOT_CONFIGURED';
    };

    const status = getStatus();
    const isSucessful = status === 'UP';
    const isLoading = status === undefined || status === null;

    const displayStatus = isLoading
        ? '...'
        : isSucessful
            ? 'up'
            : status === 'NOT_CONFIGURED'
                ? 'nulo'
                : 'down';

    const displayTime = lastCheck ?? '—';

    return (
        <StyledHealthCheck $isSucessful={isSucessful}>
            <StyledStatusWrapper>
                <img src={isSucessful ? iconSucess : iconFail} alt="" />

                <h4>{serviceName}</h4>

                <StyledStatus $isSucessful={isSucessful} $isLoading={isLoading}>
                    {displayStatus}
                </StyledStatus>
            </StyledStatusWrapper>

            <p>Última verificação: {displayTime}</p>
        </StyledHealthCheck>
    )
}