import React from "react";
import { Link } from "react-router-dom";

function EventItem({
  imgUrl,
  title,
  desc,
  date,
  venue,
  id,
}) 
{
    function onButtonClick() {
        localStorage.setItem('eventID',id)
    }
  return (
    <>
      <div className="card card-compact w-[18rem] h-[25rem] bg-base-100 shadow-xl ">
        <figure>
          <img src={`${process.env.REACT_APP_PUBLIC_URL}${imgUrl}`} alt="Photo" className="h-[10rem] w-[20rem] mt-5" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-evenly align-middle">
            <h2 className="card-title">{title}</h2>
          </div>
          <p>{desc.slice(0, 100)}...</p>
          <div className="flex justify-between items-center">
            <div className="text-gray-800 text-bold"><i className="fa-sharp fa-solid fa-calendar-days mr-2"></i>{date}</div>
            <div className="text-gray-800 text-bold"><i className="fa-solid fa-location-dot mr-2"></i>{venue}</div>
          </div>
          <div className="card-actions flex justify-center items-center">
            <Link to={`/eventsdetails`}>
              <button className="btn btn-primary btn-wide" style={{backgroundColor:"rgb(20 83 45 / var(--tw-bg-opacity))"}} onClick={onButtonClick}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventItem;
