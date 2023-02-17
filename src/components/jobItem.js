import React from "react";
import { useState } from "react";

function JobItem({ imgUrl, title, company, desc, location, salary, work, id }) {
  function onButtonClick() {
    localStorage.setItem("jobID", id);
  }

  function Checkbox({ checked }) {
    return <input type="checkbox" checked={checked} onChange={() => {}} />;
  }

  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    // Call your apply function or API endpoint here
    setApplied(true);
  };

  return (
    <div className="flex flex-row border-2 rounded-xl m-8">
      <div>
        <img
          src={`${process.env.REACT_APP_PUBLIC_URL}${imgUrl}`}
          className=" w-[80%] items-center justify-center m-6"
          alt="Photo"
        />
      </div>
      <div className="p-5 mr-[30rem] items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-row items-center mt-1">
          <h2 className="text-xl text-black">{company}</h2>
          <svg
            className="fill-blue-500 w-[20px] h-[20px] ml-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>
        <p className="mt-6 text-gray-500">{desc}</p>
        <div className="flex flex-row gap-10 mb-2 mt-8">
          <div className="flex flex-row gap-2">
            <i className="fas fa-map-marker-alt mt-1"></i>
            <p>{location}</p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa fa-briefcase mt-1" aria-hidden="true"></i>
            <p>{salary}</p>
          </div>
          <div className="flex flex-row gap-2">
            <Checkbox checked={work === true} />
            <label>{work} Work From Home</label>
          </div>
        </div>
      </div>
      <div className="my-24 mx-8 px-6">
        <button
          onClick={handleApply}
          disabled={applied}
          className="py-4 px-6 text-white rounded-xl font-bold"
          style={{ backgroundColor: applied ? "grey" : "blue" }}
        >
          {applied ? "Applied" : "Apply"}
          {applied && (
          <>
          </>
          )}
        </button>
      </div>
    </div>
  );
}

export default JobItem;
