import Chart from "react-apexcharts";
import '../../style.css'
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../localstore/localStore";

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState('');
    const [yourDonation, setYourDonation] = useState('');

    const getTotalDonation = useLoaderData();
    
    useEffect(() => {
        const getLstalDonation = getStoredDonations();
        setYourDonation(getLstalDonation);
        setTotalDonation(getTotalDonation);
    }, [getTotalDonation])

    return (
        <div className="pb-16 flex justify-center items-center">
            <div>
                <Chart
                    series={[yourDonation.length, totalDonation.length]}
                    type="pie"
                    width={700}
                    height={700}
                    options={{
                        labels: ['Your Donation', 'Total Donation'],
                        noData: { text: 'No data found' },
                        colors: ['#00C49F', '#FF444A'],
                        responsive: [
                            {
                                breakpoint: 2561,
                                options: {
                                    chart: {
                                        width: 500,
                                        height: 500
                                    },
                                    legend: {
                                        position: 'bottom',
                                        fontSize: '18px'
                                    }
                                }
                            },
                            {
                                breakpoint: 769,
                                options: {
                                    chart: {
                                        width: 500,
                                        height: 500
                                    },
                                    legend: {
                                        position: 'bottom',
                                        fontSize: '18px',
                                    }
                                }
                            },
                            {
                                breakpoint: 426,
                                options: {
                                    chart: {
                                        width: 370,
                                        height: 370
                                    },
                                    legend: {
                                        position: 'bottom',
                                        fontSize: '18px',
                                    }
                                }
                            }
                        ]
                    }}
                />
            </div>
        </div>
    );
};

export default Statistics;

