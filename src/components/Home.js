import React from "react";
import Navbar from "./Navbar";
import leftimg from "../images/home.svg";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={leftimg} className="max-w-sm rounded-lg mb-16 mx-4" />
          <div>
            <div className="text-7xl font-semibold">
              It can be <br />
              better after <br />
              {/* <span className="text-orange-500">Battle</span> */}
              </div>
              <TypeAnimation
                sequence={["A War.", 1000, "A Battle.", 1000, "A Fight.", 1000]}
                //  Replacing previous Text
                wrapper="h2"
                speed={40}
                repeat={Infinity}
                className="text-orange-500 text-9xl font-bold"
              />
            <p className="py-6 text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-green-900 hover:bg-base-300 hover:text-green-900 text-white font-bold py-4 mt-8 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
