import React from "react";
import { useState } from "react";

function BlogItem({ imgUrl, title, desc, like, comment, id }) {
  const [readMore, setReadMore] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(like);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showCommentSection, setShowCommentSection] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleCommentButtonClick = () => {
    setShowCommentSection(true);
  };

  return (
    <div className="p-10 w-full">
      <div className="hero bg-base-200 rounded-2xl">
        <div className="flex flex-row">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}${imgUrl}`}
            className="shadow-2xl"
            alt="card1"
          />
  
          <div className="hero-content flex-row">
            <div className="flex flex-col">
              <div className="pl-8">
                <h1 className="text-2xl mt-4 font-bold">{title}</h1>
                <p className="py-6">
                  {desc}
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2>{readMore ? "Read Less" : "Read More"}</h2>
                  </a>
                  {readMore && (
                    <div>
                      <p className="extra-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui, consectetur nequeab porro quasi culpa nulla
                        rerum quis minus voluptatibus sed hic ad quo sint,
                        libero commodi officia aliquam! Maxime.lo Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Qui,
                        consectetur nequeab porro quasi culpa nulla rerum quis
                        minus voluptatibus sed hic ad quo sint, libero commodi
                        officia aliquam! Maxime.lo
                      </p>
                    </div>
                  )}
                </p>
              </div>
              <div className="flex flex-row pl-8 p-2 pb-6 ">
                <div className="flex items-center mr-4">
                    <i
                      className={`fa ${
                        liked ? "fa-heart text-red-500" : "fa-heart-o"
                      } mr-2`}
                      onClick={handleLike}
                    ></i>
                    <p className="text-sm">{likeCount}</p>
                  </div>
                  <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2 mr-4"
                    onClick={handleCommentButtonClick}
                  >
                    <i className="fa fa-comment mr-2"></i>
                    Comment
                  </button>
                </div>
              </div>
              {showCommentSection && (
                <div>
                  <h2>Comments</h2>
                  {comments.map((comment, index) => (
                    <div key={index}>
                      <p>{comment}</p>
                    </div>
                  ))}
                  <form onSubmit={handleCommentSubmit}>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-2">
                        <i className="fa fa-user text-white"></i>
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          className="w-full rounded-md px-4 py-2 outline-none border-2 border-gray-200 focus:border-blue-500"
                          value={newComment}
                          onChange={handleCommentChange}
                        />
                      </div>
                    </div>
                    <div className="text-right mt-2">
                      <button
                        type="submit"
                        className="bg-blue-500 rounded-md px-4 py-2 text-white"
                      >
                        Add Comment
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  ); 
  
}

export default BlogItem;