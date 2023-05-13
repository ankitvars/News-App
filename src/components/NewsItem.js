import React from "react";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div>
      <div className="card my-4">
        <div className="d-flex justify-content-end position-absolute end-0">
          <span className="badge rounded-pill bg-dark">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2023/04/14/1600x900/Garena_Free_Fire_Max_1632206791669_1681434841827_1681434841827.jpg"
              : imageUrl
          }
          className="card-img-top"
          style={{ height: "18rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
