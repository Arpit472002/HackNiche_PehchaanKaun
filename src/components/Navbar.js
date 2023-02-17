import React from "react";
import logoimg from "../images/home.svg";
import { useUser } from "../context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout } = useUser();
  function handleClick() {
    logout();
  }
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between border sticky top-0 z-50">
        <div className="flex justify-evenly ">
          <label tabIndex={0} className=" btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={logoimg} />
            </div>
          </label>
          <div className="flex-1">
            <a className="normal-case text-xl">Company Name</a>
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/home"}>
                <a>Home</a>
              </Link>
              <Link to={"/blogs"}>
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
            </li>
          </ul>
        </div>
        <div className="">
          <Link to={"/"}>
            <button className="btn btn-outline" onClick={handleClick}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
