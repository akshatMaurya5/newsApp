import React from "react";
import "../Components/NewsItem.css";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="boundary rounded m-1">
        <div className="imgBox rounded-lg m-2">
          <img
            src={
              !imageUrl
                ? "https://image.shutterstock.com/image-vector/no-preview-red-stamp-text-260nw-293654195.jpg"
                : imageUrl
            }
            alt=""
          />
        </div>
        <div className="headline">
          <h1 id="headline">{title}</h1>
        </div>
        <div className="news">
          <div id="news">
            <h4>{description}</h4>
          </div>
        </div>
        <div className="info">
          <br />
          {/* <h5>
            By:{author} on {new Date(date).toGMTString()}{" "}
          </h5> */}
        </div>
        <div>
          <button className="container">
            <a href={newsUrl} target="_blank" rel="noreferrer">
              Read More..
            </a>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

