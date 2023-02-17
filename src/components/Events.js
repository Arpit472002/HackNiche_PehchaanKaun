import React from "react";
import EventItem from "./EventItem";
import Navbar from "./Navbar";
import axios from "axios";
import { useState,useEffect } from "react";
function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_PUBLIC_URL}/main/event_list/`
      );
      console.log(res.data);
      setEvents(
        res.data.map((event) => ({
          desc: event.event_details,
          id: event.id,
          imgUrl: event.event_image,
          title: event.event_name,
          date: event.event_date,
          venue: event.event_venue,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="text-4xl items-center">Events</div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 items-center gap-[10rem]">
          {
            events.map((event)=>
            <EventItem
              title={event.title}
              desc={event.desc}
              imgUrl={event.imgUrl}
              eventid= {event.id}
              date={ event.date}
              venue={event.venue}
              id = {event.id}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Events;
