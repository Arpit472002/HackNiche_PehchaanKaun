import React from "react";
import logoC from "../images/logo512.png";
import Navbar from "./Navbar";

const job = () => {
  return (
    <div>
      <Navbar />
      {/* Job 1 */}
      <div className="flex flex-row border-2 items-center rounded-xl m-8">
        <div>
          <img className="w-[96px] h-[96px] m-6" alt="" src={logoC} />
        </div>
        <div className="p-5 mr-[60rem]">
          <h1 className="text-2xl font-bold">Software Engineer</h1>
          <div className="flex flex-row items-center mt-2">
            <h2 className="text-xl">Company Name</h2>
            <svg
              className="fill-blue-500 w-[20px] h-[20px] ml-2 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          </div>
          <div className="flex gap-2 mt-2">
            <i className="fas fa-map-marker-alt mt-1"></i>
            <div>
              <p className="">Mumbai - Maharashtra</p>
              <i class="fas fa-dot fill-black"></i>
            </div>
            <i className="fa fa-briefcase mt-1 ml-6" aria-hidden="true"></i>
            <p>Years</p>
          </div>
          <div>
            <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
              Tags
            </div>
            <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full ml-2">
              Tags
            </div>
            <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full ml-2">
              Tags
            </div>
            <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full ml-2">
              Tags
            </div>
          </div>
        </div>
        <div className="px-6">
          <button className="btn border-none bg-blue-500 btn-2xl mb-4  normal-case">
            Apply
          </button>
        </div>
      </div>

      {/* Job 2 */}
    </div>
  );
};

export default job;
