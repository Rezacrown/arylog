/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillBriefcaseFill, BsGithub } from "react-icons/bs";

export default function Card({ judul, deskripsi, icon }) {
  return (
    <section>
      <div className="bg-zinc-50 bg-opacity-30 rounded-lg shadow-md pb-5 pt-3 mb-5">
        <div className="px-5 flex flex-col items-center">
          {/* judul */}
          <div className="uppercase text-xl text-teal-400 font-semibold">
            <h1>{judul}</h1>
          </div>

          {/* icons */}
          <div className="text-4xl mt-4 rounded-3xl">
            <img src={icon} alt="" className="block h-14 w-14 " />
          </div>

          {/* deskripsi */}
          <div className="mt-5 font-serif text-xl capitalize text-stone-200">
            <p>{deskripsi}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
