import React from "react";
import logoimg from "../images/logo.png";
import { useUser } from "../context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout } = useUser();
  function handleClick() {
    logout();
  }
  return (
    <>
      <div className="navbar bg-green-900 flex justify-between border sticky top-0 z-50">
        <div className="flex justify-evenly">
          <label tabIndex={0} className=" btn-circle avatar ml-4 mr-2">
            <div className="w-14 rounded-full">
              <img src={logoimg} />
            </div>
          </label>
          <div className="flex-1">
            <a className="normal-case text-white text-2xl ml-4">After Battle</a>
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            <li>
              <Link to={"/home"}>
                <a>Home</a>
              </Link>
              <Link to={"/blog"}>
                <a>Blogs</a>
              </Link>
              <Link to={"/jobs"}>
                <a>Jobs</a>
              </Link>
              <Link to={"/events"}>
                <a>Events</a>
              </Link>
              <Link to={"/pension"}>
                <a>Pension</a>
              </Link>
              <Link to={"/mentorship"}>
                <a>Mentorship</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link to={"/"}>
            <button className="btn btn-outline btn-md mr-2 my-2 text-white" onClick={handleClick}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
