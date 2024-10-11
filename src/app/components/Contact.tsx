// import React from "react";

// const Contact: React.FC = () => {
//     return (
       
//             <div className="absolute inset-0 flex justify-center items-center">
//                 <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
//                     <h2 className="text-center text-2xl font-bold mb-4">Follow us</h2>
//                     <form>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your Name"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter a valid email address"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
//                             />
//                         </div>
//                         <div className="mb-4 flex items-center">
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700"
//                         >
//                             SUBMIT
//                         </button>
//                     </form>
//                 </div>
//             </div>
        
//     );
// };

// export default Contact;


import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="Contact" className="relative flex justify-center">
            <div className="w-[70%] h-[600px] mt-[90px] relative">
                <img 
                    className="shadow-2xl w-full h-full object-cover  rounded-lg " 
                    src="/back.jpeg" 
                    alt="Background Image" 
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-full max-w-md p-8 border-2 rounded-md    ">
                        <h2 className="text-center text-white text-2xl font-bold mb-4">Follow us</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#111827]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
                                />
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-white">Message</label>
                               <textarea
                                 placeholder="Enter your message here"
                                 className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#111827] "
                                 ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full  bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-gray-500"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

