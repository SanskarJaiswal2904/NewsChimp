import React from "react";
import defaultImage from "./noImgAvail.jpg";

const NewsItem = ({ article }) => {
  return (
    <div className="card">
      <img
        src={article.urlToImage ? article.urlToImage : defaultImage}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <span
          className="position-absolute top-0 end-0 bg-warning"
          style={{ zIndex: 1 }}
        >
          {article.author ? article.author : "Unknown"}
        </span>

        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>

        <p className="card-text">
          <small className="text-muted">
            {new Date(article.publishedAt).toGMTString()}
          </small>
        </p>
        <a href={article.url} className="btn btn-outline-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
