import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const Portfolio: React.FC = () => {
    return (
        <div className="bg-[#111827] min-h-screen w-full">
            <main>  
                <Home />
                <About />
                <Project />
                <Contact />
            </main>
        </div>
    );
};

export default Portfolio;

