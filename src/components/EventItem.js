import React from 'react'
import { Link } from 'react-router-dom'
import card from "../images/logo512.png";

function EventItem({
    imgUrl =card ,
    title='Title',
    desc ,
    date ,
    venue,
    blogid
  }) {
  return (
    <>
      <div className="card card-compact w-[18rem] h-[25rem] bg-base-100 shadow-xl ">
        <figure>
          <img src={imgUrl} alt="Photo" className="h-[10rem] w-[20rem] mt-5" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-evenly align-middle">
            <h2 className="card-title">
              {title}
            </h2>
          </div>
          <p>{desc.slice(0, 100)}...</p>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col items-center">
              <div className="text-gray-800 text-bold">{date}</div>
              <div className="text-gray-800 text-bold">{venue}</div>
            </div>
          </div>
          <div className="card-actions flex justify-center items-center">
            <Link
                href={`/blog/blogcard`}
              >
                <button className="btn btn-primary btn-wide">Check Out</button>
              </Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default EventItem
