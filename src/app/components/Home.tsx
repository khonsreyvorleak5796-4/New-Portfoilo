
// import React from "react";

// const Home: React.FC = () => {
//     return (
//         <div className="flex justify-center">
//             <div className="w-[70%]  py-10">
            
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-[#60A5FA] text-[30px] font-bold">Portfolio</h1>
//                     <nav>
//                         <ul className="flex space-x-6">
//                             <li><a href="#Home" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Home">Home</a></li>
//                             <li><a href="#About" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="About">About</a></li>
//                             <li><a href="#Project" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Project">Project</a></li>
//                             <li><a href="#Contact" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Contact">Contact</a></li>
//                         </ul>
//                     </nav>
//                 </div>

                
//                 <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
//                     <div className="flex flex-col gap-4 mb-6 lg:mb-0">
//                         <h2 className="text-white text-[30px] font-bold  hover:text-[#60A5FA]">Hello, I'm</h2>
//                         <h1 className="text-white text-[40px] font-bold  hover:text-[#60A5FA]">Sreyvorleak Khon</h1>
//                         <p className="text-white text-[18px] font-bold  hover:text-[#60A5FA]">
//                             Freelance UI designer, full-stack developer, &<br />
//                             data miner. I create seamless web experiences<br />
//                             for end-users.
//                         </p>
//                         <button className=" bg-blue-600 text-white font-bold text-lg  py-2 rounded-lg shadow-lg  hover:bg-gray-500">
//                       RESUME </button>

//                     </div>
//                     <div>
//                         <img className="w-[350px] h-[350px] rounded-full object-cover" src="/pic.jpeg" alt="Sreyvorleak Khon" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[70%] py-10">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-[#60A5FA] text-[30px] font-bold">Portfolio</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#Home" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Home">Home</a>
                            </li>
                            <li>
                                <a href="#About" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="About">About</a>
                            </li>
                            <li>
                                <a href="#Project" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Project">Project</a>
                            </li>
                            <li>
                                <a href="#Contact" className="text-[20px] font-bold text-white hover:text-[#60A5FA]" aria-label="Contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Home Section */}
                <div id="Home" className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
                    <div className="flex flex-col gap-4 mb-6 lg:mb-0">
                        <h2 className="text-white text-[30px] font-bold hover:text-[#60A5FA]">Hello, I'm</h2>
                        <h1 className="text-white text-[40px] font-bold hover:text-[#60A5FA]">Sreyvorleak Khon</h1>
                        <p className="text-white text-[18px] font-bold hover:text-[#60A5FA]">
                            Freelance UI designer, full-stack developer, &<br />
                            data miner. I create seamless web experiences<br />
                            for end-users.
                        </p>
                        <button className="bg-blue-600 text-white font-bold text-lg py-2 rounded-lg shadow-lg hover:bg-gray-500">
                            RESUME
                        </button>
                    </div>
                    <div>
                        <img className="w-[350px] h-[350px] rounded-full object-cover" src="/pic.jpeg" alt="Sreyvorleak Khon" />
                    </div>
                </div>

                {/* About Section */}
                <div id="About" className="mt-10">
                    {/* You can add the content of the About section here, or use a separate component */}
                </div>
            </div>
        </div>
    );
};

export default Home;

