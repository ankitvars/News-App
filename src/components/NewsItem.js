/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem"}}>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/tech/img/2023/04/14/1600x900/Garena_Free_Fire_Max_1632206791669_1681434841827_1681434841827.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
