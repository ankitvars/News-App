/* eslint-disable array-callback-return */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello this is from constructor of News Component");
    this.state = {
      articles: [],
      loading: false,
      totalResults:0,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5d92a45cfe9a4b0fb3db6e767f3d74c9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data);
    let parse_data = await data.json();
    // console.log(parse_data);
    this.setState({
      articles: parse_data.articles,
      totalResults: parse_data.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("You clicked prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=5d92a45cfe9a4b0fb3db6e767f3d74c9&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data);
    let parse_data = await data.json();
    console.log(parse_data);

    this.setState({
      page: this.state.page - 1,
      articles: parse_data.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("You clicked next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apikey=5d92a45cfe9a4b0fb3db6e767f3d74c9
      &page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      // console.log(data);
      let parse_data = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parse_data.articles,
        loading: false,
      });
    }
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center"> Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / 5)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
