// BarChart.js
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Define the chart configuration
        const chartConfig = {
            series: [
                {
                    name: 'Sales',
                    data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                },
            ],
            chart: {
                type: 'bar',
                height: 240,
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: '',
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#020617'],
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#616161',
                        fontSize: '12px',
                        fontFamily: 'inherit',
                        fontWeight: 400,
                    },
                },
                categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#616161',
                        fontSize: '12px',
                        fontFamily: 'inherit',
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: '#dddddd',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: 'dark',
            },
        };

        // Initialize ApexCharts
        const chart = new ApexCharts(chartRef.current, chartConfig);
        chart.render();

        // Cleanup function to destroy the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
                <div className="w-max rounded-lg bg-gray-900 text-white">
                    <img className="h-12 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJKd_nDYBmM483cKyfaCdabMR8mTZxZtCzgWvL5e62MwPKb3z4JZ_2vpR_ZYA3KnUGIk&usqp=CAU" alt="" />
                </div>
                <div>
                    <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        Bar Chart
                    </h6>
                    <p className="block max-w-sm font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                        Visualize your data in a simple way using the @material-tailwind/html chart plugin.
                    </p>
                </div>
            </div>
            <div className="pt-6 px-2 pb-0">
                <div id="bar-chart" ref={chartRef}></div>
            </div>
        </div>
    );
};

export default BarChart;
