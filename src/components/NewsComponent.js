import React, { useState, useEffect, Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


export default function NewsComponent(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0); // State for totalResults


  const handleNextPage = () => {
    console.log(pageNumber);
    setPageNumber(pageNumber+1);
    
  };
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      console.log(pageNumber);
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&q=${props.query}&category=${props.category}&apiKey=2a9d89bccbca4869b9c04a74cf54a9d2&page=${pageNumber}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [pageNumber]);

  return (
    <div className="container my-4 text-center">
      <h2>Welcome to NewsChimp</h2>
      {loading && (
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
      <div className="container my-3">
        <div className="row justify-content-center my-3">
          {articles.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          disabled={pageNumber <= 1}
          className="btn btn-outline-dark"
          onClick={handlePrevPage}
        >
          &larr; Prevoius{" "}
        </button>
        <button
          type="button"
          disabled={articles.length === 0 || pageNumber * 20 >= totalResults}
          className="btn btn-outline-dark"
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

NewsComponent.defaultProps = {
  country: 'in',
  category: 'general',
  query: ''
};

NewsComponent.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  query: PropTypes.string
};


//2a9d89bccbca4869b9c04a74cf54a9d2
// console.log(data.sources)
// console.log(elements)

// const elements = data.sources.map(source => ({
//     id: source.id,
//     name: source.name,
//     description: source.description,
//     url: source.url,
//     category: source.category,
//     language: source.language,
//     country: source.country
//   }));
