import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PopulationChart = ({ populationData }) => {
    const chartData = {
        labels: populationData.map(data => data.year),
        datasets: [
            {
                label: 'Population',
                data: populationData.map(data => data.value),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
            }
        ]
    };

    const chartOptions = {
        responsive: true, // Ensures the chart is responsive
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    font: { size: 14 }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Population',
                    font: { size: 14 }
                },
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Population Over Time',
                font: { size: 18 }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.raw.toLocaleString()} people`;
                    }
                }
            }
        }
    };

    return (
        <div>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default PopulationChart;
