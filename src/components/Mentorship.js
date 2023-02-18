import React from "react";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import dot from "../images/black-circle.png";

const Mentorship = () => {
  return (
    <div>
      <Navbar />
      <div className="text-left p-12 flex flex-row items-center gap-10 ml-12">
        <div className="w-[50%] my-12">
          <div className="text-7xl font-bold mb-8">
            Mind-Body <br />
            <span className="text-orange-500">Connection</span>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reiciendis dolorum nostrum illo, quae eaque, aperiam voluptatum
            accusantium maiores numquam voluptates, laudantium commodi. Ad
            accusantium, vero rerum ducimus deleniti distinctio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Illo quia, fuga rem
            atque eum optio non velit sit libero sint cupiditate, animi natus
            ea. Reiciendis possimus ut accusantium sed molestiae? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nam dolorum ducimus
            eligendi quos optio ea amet quia magnam, ipsa impedit aut saepe
            labore similique, tempora voluptate at molestiae cumque delectus?
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-5 mx-24 my-20">
            <li className="flex items-center flex-row gap-5">
              <img src={dot} className="w-[16px] h-[16px]" alt="" />
              <TypeAnimation
                sequence={[
                  "labore similique, tempora voluptate at molestiae",
                  1000,
                ]}
                speed={50}
                wrapper="h2"
                repeat={Infinity}
              />
            </li>
            <li className="flex flex-row items-center gap-5">
              <img src={dot} className="w-[16px] h-[16px]" alt="" />
              <TypeAnimation
                sequence={[
                  "labore similique, tempora voluptate at molestiae",
                  1000,
                ]}
                speed={50}
                wrapper="h2"
                repeat={Infinity}
              />
            </li>
            <li className="flex flex-row items-center gap-5">
              <img src={dot} className="w-[16px] h-[16px]" alt="" />
              <TypeAnimation
                sequence={[
                  "labore similique, tempora voluptate at molestiae",
                  1000,
                ]}
                speed={50}
                wrapper="h2"
                repeat={Infinity}
              />
            </li>
            <li className="flex flex-row items-center gap-5">
              <img src={dot} className="w-[16px] h-[16px]" alt="" />
              <TypeAnimation
                sequence={[
                  "labore similique, tempora voluptate at molestiae",
                  1000,
                ]}
                speed={50}
                wrapper="h2"
                repeat={Infinity}
              />
            </li>
            <li className="flex flex-row items-center gap-5">
              <img src={dot} className="w-[16px] h-[16px]" alt="" />
              <TypeAnimation
                sequence={[
                  "labore similique, tempora voluptate at molestiae",
                  1000,
                ]}
                speed={50}
                wrapper="h2"
                repeat={Infinity}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <button class=" btn btn-wide bg-green-900 text-center text-white font-bold py-2 px-4 rounded">
          <a href="https://chat.1410inc.xyz/?room=Mentorship_Sessions_08qhw4cusf2l">
            Enter Room
          </a>
        </button>
      </div>
    </div>
  );
};

export default Mentorship;
