import React from "react";
import logoimg from "../images/military.jpeg"
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function SpecificEvent() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
      getEvents();
    }, []);
  
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/main/event_detail/${localStorage.getItem('eventID')}/`
        );
        console.log(res.data);
        setEvents(
          {
            desc: res.data.event_details,
            id: res.data.id,
            imgUrl: res.data.event_image,
            title: res.data.event_name,
            date: res.data.event_date,
            venue: res.data.event_venue,
            create_date:res.data.event_create_date

          }
        );
      } catch (error) {
        console.log(error);
      }
    };  
  return (
    <>
    <Navbar/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}${events.imgUrl}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{events.title}</h1>
            <p className="py-6">
              {events.desc}
            </p>
            <div className="gap-[10rem]">
            <button className="btn btn-primary">Interested</button>
            <button className="btn btn-primary">Back</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificEvent;
