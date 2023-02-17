import React from "react";
import card from "../images/logo512.png";
import { useState } from "react";

const Blog = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </div>
  );
  const linkName = readMore ? "" : "Read More";
  return (
    <div className="p-10 w-full">
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-row">
          <img src={card} className="rounded-lg shadow-2xl" alt="card1" />
          <div className="flex flex-col">
            <div className="pl-8">
              <h1 className="text-2xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi{" "}
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
              <label for="toggle-heart"><i className="fa fa-heart fa-2xl"></i></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
