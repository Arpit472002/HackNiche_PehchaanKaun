import React from "react";
import JobItem from "./jobItem";
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
          location: job.job_location,
          salary: job.salary_offered,
          work: job.work_from_home,
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
      {
            events.map((job)=>
            <JobItem
              title={job.title}
              desc={job.desc}
              imgUrl={job.imgUrl}
              company={job.company}
              eventid= {job.id}
              date={job.date}
              location={job.location}
              salary={job.salary}
              work={job.work}
              id = {job.id}
            />
          )}
    </div>
  );
}

export default Job;
