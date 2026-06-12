import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function GrafikCacat() {

    const data = {
        labels: ['Scratch', 'Dent', 'Lainnya'],

        datasets: [
            {
                label: 'Proporsi Cacat',
                data: [50, 30, 20],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                ],

                borderWidth: 0,

                hoverOffset: 12,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        cutout: '68%',

        plugins: {

            legend: {
                position: 'bottom',

                labels: {
                    padding: 20,
                    boxWidth: 14,
                    font: {
                        size: 13,
                    },
                },
            },

            tooltip: {
                enabled: true,
            },
        },
    };

    return (

        <div
            style={{
                height: '320px',
                width: '100%',
                maxWidth: '340px',
                margin: '0 auto',
            }}
        >
            <Doughnut
                data={data}
                options={options}
            />
        </div>

    );
}

export default GrafikCacat;