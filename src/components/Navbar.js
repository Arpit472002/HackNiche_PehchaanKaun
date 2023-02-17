import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#33691E]">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Pension</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
