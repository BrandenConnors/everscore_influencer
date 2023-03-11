import { useState } from "react";

export function Header (props: any) {
  
    return (
        <div className=" col-span-12 h-auto w-full rounded-lg bg-gray-300 p-8 mt-4">
        <div className="flex flex-wrap justify-center gap-6">
          <img
          className="flex justify-center rounded-xl h-40"
          src="images/chef.JPG"
          alt="Me and my bike"
        ></img>
            <h2 className="flex items-center font-bold text-gray-800 text-center px-20">Shannon Dorn</h2>
            <div className="flex place-items-end">
            <button className="btn" onClick={()=>setShow(!show)}>
            {show === true ? "Hide" : "About Me"}
          </button>
          </div>
        </div>
        </div>
        )}