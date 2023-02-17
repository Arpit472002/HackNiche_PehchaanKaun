import React from "react";
import logoC from "../images/logo512.png";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Job() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_PUBLIC_URL}/main/job_post/`
      );
      console.log(res.data);
      setEvents(
        res.data.map((job) => ({
          id: job.id,
          imgUrl: job.job_image,
          title: job.job_title,
          company: job.company_name,
          desc: job.job_description,
          date: job._date,
          venue: job.event_venue,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      {/* Jobs */}
      <div className="flex flex-row border-2 items-center rounded-xl m-8">
        <div>
          <img className="w-[96px] h-[96px] m-6" alt="" src={logoC} />
        </div>
        <div className="p-5 mr-[30rem] items-center">
          <h1 className="text-2xl font-bold">Software Engineer</h1>
          <div className="flex flex-row items-center mt-1">
            <h2 className="text-xl">Company Name</h2>
            <svg
              className="fill-blue-500 w-[20px] h-[20px] ml-2 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          </div>
          <p className="mt-6 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil iste
            culpa, tempore debitis provident nemo laudantium ducimus quidem unde
            aspernatur quos eos rerum harum enim perferendis cupiditate dolore
            exercitationem hic!
          </p>
            <div className="flex flex-row gap-10 mb-2 mt-8">
              <div className="flex flex-row gap-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <p>Mumbai</p>
              </div>
              <div className="flex flex-row gap-2">
                <i className="fa fa-briefcase mt-1" aria-hidden="true"></i>
                <p>Salary</p>
              </div>
              <div className="flex flex-row gap-2">
                <i className="fas fa-check-square mt-1"></i>
                <p>Work From Home</p>
              </div>
            </div>
        </div>
        <div className="px-6">
          <button className="btn border-none bg-blue-500 btn-2xl mb-4 normal-case">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;
