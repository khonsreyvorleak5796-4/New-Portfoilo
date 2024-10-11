


"use client"; 

import React, { useEffect, useState } from "react";


interface AboutData {
    id: number;
    documentId: string;
    Text: string;
    Text2: string;
    frontend: string;
    backend: string;
    uxui: string;
}

const About: React.FC = () => {
    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/about-portfolios");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`); 
                }
                const result = await response.json();
                setData(result.data[0]); 
            } catch (error: any) {
                setError(error.message || "Failed to fetch data."); 
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-white text-center">Loading...</div>; 
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>; 
    }

    if (!data) {
        return <div className="text-white text-center">No data available.</div>; 
    }

    return (
        <div className="flex justify-center">
            <div className="w-[70%] border-2 hover:border-black rounded-lg py-10">
                <h1 className="text-[30px] font-bold text-white p-4">About</h1>
                <p className="text-white text-[20px] hover:text-[#60A5FA] p-4">
                    {data.Text}
                </p>
                <div className="flex items-center space-x-4 p-4">
                    <img className="w-[70px] h-auto" src="/9951679.png" alt="" />
                    <h2 className="text-white text-[20px]">
                        {data.Text2}
                    </h2>
                </div>
                <div className="flex justify-around mt-[50px]">
                    <div className="border-2 border-blue-200 hover:border-blue-500 w-[22%] h-[200px] bg-white rounded-md flex flex-col justify-center items-center p-4 text-center shadow-lg">
                        <h1 className="text-[30px] font-bold mb-2">FrontEnd</h1>
                        <p className="text-[16px] leading-relaxed">{data.frontend}</p>
                    </div>

                    <div className="border-2 border-blue-200 hover:border-blue-500 w-[22%] h-[200px] bg-white rounded-md flex flex-col justify-center items-center p-4 text-center shadow-lg">
                        <h1 className="text-[30px] font-bold mb-2">BackEnd</h1>
                        <p className="text-[16px] leading-relaxed">{data.backend}</p>
                    </div>

                    <div className="border-2 border-blue-200 hover:border-blue-500 w-[22%] h-[200px] bg-white rounded-md flex flex-col justify-center items-center p-4 text-center shadow-lg">
                        <h1 className="text-[30px] font-bold mb-2">UX & UI</h1>
                        <p className="text-[16px] leading-relaxed">{data.uxui}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;



