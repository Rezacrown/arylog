/* eslint-disable no-unused-vars */
import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillBriefcaseFill, BsGithub } from "react-icons/bs";

export default function Card({ judul, deskripsi, icon }) {
  const ikons = "FaNetworkWired";

  // alert();

  return (
    <section>
      <div className="bg-zinc-50 bg-opacity-30 rounded-lg shadow-md pb-5 pt-3 mb-5">
        <div className="px-5 flex flex-col items-center">
          {/* judul */}
          <div className="capitalize text-2xl text-teal-400 font-semibold">
            <h1>{judul}</h1>
          </div>

          {/* icons */}
          <div className="text-4xl mt-4 text-slate-900">
            <FaNetworkWired className="block mx-auto" />
          </div>

          {/* deskripsi */}
          <div className="mt-5 font-medium text-lg text-gray-800">
            <p>{deskripsi}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-zinc-50 bg-opacity-30 rounded-lg shadow-md pb-5 pt-3 mb-5">
        <div className="px-5 flex flex-col items-center">
          {/* judul */}
          <div className="capitalize text-2xl text-teal-400 font-semibold">
            <h1>bekerja totalitas</h1>
          </div>

          {/* icons */}
          <div className="text-4xl mt-4 text-slate-900">
            <BsFillBriefcaseFill className="block mx-auto" />
          </div>

          {/* deskripsi */}
          <div className="mt-5 font-medium text-lg text-gray-800">
            <p>siap lembur asal dibayar</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-zinc-50 bg-opacity-30 rounded-lg shadow-md pb-5 pt-3 mb-5">
        <div className="px-5 flex flex-col items-center">
          {/* judul */}
          <div className="capitalize text-2xl text-teal-400 font-semibold">
            <h1>profesinal and speacilist</h1>
          </div>

          {/* icons */}
          <div className="text-4xl mt-4 text-slate-900">
            <BsGithub className="block mx-auto" />
          </div>

          {/* deskripsi */}
          <div className="mt-5 font-medium text-lg text-gray-800">
            <p>specialist front end</p>
          </div>
        </div>
      </div>
    </section>
  );
}
