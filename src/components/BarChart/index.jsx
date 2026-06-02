import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { StyledCanvasWrapper } from './style';

function getLast7DaysLabels() {
  const today = new Date();
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    labels.push(day.toLocaleDateString('pt-br', { weekday: 'short'}));
  }
  return labels;
}

const mockedRequest = [65, 59, 80, 81, 56, 55, 40];
const mockedResponses = [44, 33, 98, 45, 99, 65, 32];

export default function BarChart() {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);
  const [metricsData, setMetricsData] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // Buscar métricas reais do gateway
  useEffect(() => {
    const fetchMetrics = async () => {
      if (document.visibilityState === 'hidden') return;
      try {
        const response = await fetch('https://gateway-help-pet-aqhhahgdbuaahfc8.brazilsouth-01.azurewebsites.net/api/admin/metrics/weekly', {
          credentials: 'include',
        });
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        setMetricsData(data);
        setUsingFallback(false);
      } catch {
        setUsingFallback(true);
        setMetricsData(null);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000);
    const onVisible = () => { if (document.visibilityState === 'visible') fetchMetrics(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  // Renderizar o chart sempre que os dados mudarem
  useEffect(() => {
    if (!canvasRef.current) return;

    const labels = getLast7DaysLabels();
    let requestsData, responsesData;

    if (metricsData && Array.isArray(metricsData)) {
      requestsData = metricsData.map(item => item.requests ?? 0);
      responsesData = metricsData.map(item => item.responses ?? 0);
    } else {
      requestsData = mockedRequest;
      responsesData = mockedResponses;
    }

    const config = {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Requisições',
            data: requestsData,
            backgroundColor: '#81DA87',
          },
          {
            label: 'Respostas',
            data: responsesData,
            backgroundColor: '#2FA237',
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };

    // Destruir instância anterior antes de criar nova
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [metricsData, usingFallback]);

  return (
    <StyledCanvasWrapper>
      {usingFallback && (
        <p>
          Gateway offline — exibindo dados de exemplo
        </p>
      )}
      <canvas ref={canvasRef}></canvas>
    </StyledCanvasWrapper>
  );
}