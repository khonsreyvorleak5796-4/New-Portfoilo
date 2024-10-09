import React from "react";

const Home: React.FC = () => {
    return (
        <header className="w-full h-[80px] bg-black">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <h1 className="text-[#60A5FA] text-[30px] font-bold">Portfolio</h1>
                <nav>
                    <ul className="flex justify-center space-x-6">
                        <li><a href="#Home" className=" text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Home">Home</a></li>
                        <li><a href="#About" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="About">About</a></li>
                        <li><a href="#Project" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Project">Project</a></li>
                        <li><a href="#Contact" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="w-full h-[600px] bg-[#111827] flex  justify-around">
                <div className="w-[55%] flex justify-between items-center  ">
                <div className="flex flex-col  gap-4">
                    <h2 className="text-white text-[30px] font-bold">Hello,i'm</h2>
                    <h1 className="text-white text-[40px] font-bold">Sreyvorleak Khon</h1>
                    <p className="text-white text-[15px] font-bold">Freelance UI designer, full-stack developer, & <br />data miner. I create seamless web experiences <br />for end-users.</p>
                    <button className=" py-2  bg-[#60A5FA] text-black font-semibold rounded-lg hover:bg-[#3B82F6] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-opacity-50">
                        Resume</button>
                </div>
                <div>
                    <img className="w-[350px] h-[350px] rounded-full object-cover" src="/pic.jpeg" alt="" />
                </div>
                </div>
            </div>
            <div className="bg-[black] w-full h-[50px]"></div>
        </header>
        
    );
};

export default Home;
