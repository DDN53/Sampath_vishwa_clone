'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer, Herosection } from "./components/index";

export default function Home() {
  const [textSize, setTextSize] = useState("text-base");
  useEffect(() => {
    const saved = localStorage.getItem("textSize");
    if (saved) setTextSize(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("textSize", textSize);
  }, [textSize]);
  return (
    <div className={`overflow-hidden ${textSize} transition-all duration-200`}>
        <div className="w-full h-24 fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-none flex items-center justify-center z-50">
            <div className="absolute sm:left-10 mt-0 -left-9">
              <ul className="flex items-center">
                <li className=" mr-2 -mt-4 ">
                  <Image src="/logo.webp" alt="logo" width={200} height={250} />
                </li>
                <li className="mr-7 -mt-4 hidden sm:flex flex-col">
                  <span className=" block text-black font-bold -mb-1">Welcome to</span>
                  <span className=" block text-black font-light text-2xl">Sampath Vishwa</span>
                </li>
              </ul>
            </div>
      
      
      
            <div className="absolute right-24 -mt-4 hidden sm:flex ">
              <div className="flex items-center">
                <button onClick={()=>setTextSize("text-sm")} className="bg-gray-500/10 text-black px-3 py-1 rounded mr-4 backdrop-blur-sm hover:bg-gray-500/20 hover:scale-105  duration-100 ">
                  <span className="text-xs font-bold">A</span>
                </button>
                <button onClick={()=>setTextSize("text-base")} className="bg-orange-400/30 text-black px-3 py-1 rounded mr-4 backdrop-blur-sm hover:bg-orange-400/50 hover:scale-105  duration-100">
                  <span className="text-normal font-bold">A</span>
                </button>
                <button onClick={()=>setTextSize("text-lg")} className="bg-gray-500/10 text-black px-3 py-1 rounded mr-4 backdrop-blur-sm hover:bg-gray-500/20 hover:scale-105  duration-100">
                  <span className="text-lg font-bold">A</span>
                </button>
                <button className="bg-gray-500/10 text-black px-3 py-1 rounded mr-4 backdrop-blur-sm hover:bg-gray-500/20 hover:scale-105  duration-100">
                  <span className="text-lg font-bold">en</span>
                </button>
              </div>
            </div>
          </div>
  {/* <Header /> */}
  <Herosection />
  <Footer />
</div>
  );
}
