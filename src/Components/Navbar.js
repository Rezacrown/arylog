/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";



export default function Navbar() {
  return (
    <section className="bg-teal-800">
      
        
        <div className="px-2 pt-1 pb-2">
          <div className="flex flex-wrap items-end justify-between">
            {/* PP */}
            <div className="ml-3 mb-3 bg-slate-900 rounded-full p-[2px]">
              <img
                src={require("../assets/portofolioPP.jpg")}
                alt=""
                className="block rounded-full h-14 w-14"
              />
            </div>

            {/* menu */}
            <div className="pr-5">
              <ul className="flex gap-4 text-xl font-light text-red-100">
                <a href="" className="block ">
                  portofolio
                </a>
                <a href="" className="block ">
                  about
                </a>
                <a href="" className="block ">
                  bussines
                </a>
              </ul>
            </div>
            
            
          </div>
        </div>
    </section>
  );
}
