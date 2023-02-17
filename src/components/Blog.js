import React from "react";
import card from "../images/image2.jpeg";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Toggle from 'react-toggle'



const Blog = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.lo
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.lo
      </p>
    </div>
  );
  const linkName = readMore ? "" : "Read More";

  const [likesCount, setLikesNumber] = useState(2);


  return (
    <div>
      <Navbar />
    <div className="p-10 w-full">
      <div className="text-3xl mb-12">Blogs</div>
      {/* First Blog */}
      <div className="hero bg-base-200 rounded-2xl">
        <div className="flex flex-row">
          <img src={card} className="shadow-2xl" alt="card1" />

          <div className="hero-content flex-row">
            <div className="flex flex-col">
              <div className="pl-8">
                <h1 className="text-2xl mt-4 font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi{" "}
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2>{linkName}</h2>
                  </a>
                  {readMore && extraContent}
                </p>
              </div>
              <div className="flex flex-row pl-8 p-2 pb-6 ">
                <input id="toggle-heart" onClick={() => setLikesNumber(likesCount + 1)} type="checkbox" />
                <label for="toggle-heart">
                  <i className="fa fa-heart fa-2xl"></i> 
                </label>
                <p className="pl-4 text-red-500">{likesCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Blog */}
      <div className="hero bg-base-200 mt-10 rounded-2xl">
        <div className="flex flex-row">
          <img src={card} className="shadow-2xl" alt="card1" />

          <div className="hero-content flex-row">
            <div className="flex flex-col">
              <div className="pl-8">
                <h1 className="text-2xl mt-4 font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi{" "}
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2>{linkName}</h2>
                  </a>
                  {readMore && extraContent}
                </p>
              </div>
              <div className="pl-8 p-2 pb-6">
                <input id="toggle-heart" type="checkbox" />
                <label for="toggle-heart">
                  <i className="fa fa-heart fa-2xl"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Blog */}
      <div className="hero bg-base-200 mt-10 rounded-2xl">
        <div className="flex flex-row">
          <img src={card} className="shadow-2xl" alt="card1" />

          <div className="hero-content flex-row">
            <div className="flex flex-col">
              <div className="pl-8">
                <h1 className="text-2xl mt-4 font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi{" "}
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2>{linkName}</h2>
                  </a>
                  {readMore && extraContent}
                </p>
              </div>
              <div className="pl-8 p-2 pb-6">
                <input id="toggle-heart" type="checkbox" />
                <label for="toggle-heart">
                  <i className="fa fa-heart fa-2xl"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Blog */}
      <div className="hero bg-base-200 mt-10 rounded-2xl">
        <div className="flex flex-row">
          <img src={card} className="shadow-2xl" alt="card1" />

          <div className="hero-content flex-row">
            <div className="flex flex-col">
              <div className="pl-8">
                <h1 className="text-2xl mt-4 font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi{" "}
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2>{linkName}</h2>
                  </a>
                  {readMore && extraContent}
                </p>
              </div>
              <div className="pl-8 p-2 pb-6">
                <input id="toggle-heart" type="checkbox" />
                <label for="toggle-heart">
                  <i className="fa fa-heart fa-2xl"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
