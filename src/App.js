import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=f7f792eeba474a14bcfac3bf0e293cec"
    ).then((response) => {
      console.log(response);
      setNews(response.data.articles);
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="title"> TopNews </h1>
        <button className="button" onClick={getNews}>
          Get News
        </button>
      </div>

      <div className="news-container">
        {news.map((index) => {
          return (
            <>
              <div id="container">
                <div class="news-details">
                  <h1>{index.title}</h1>

                  <p class="information">{index.description}</p>

                  <div class="control">
                    <button class="btn">
                      <a href={index.url} class="readmore">Read More</a>
                    </button>
                  </div>
                </div>

                <div class="news-image">
                  <img src={index.urlToImage} alt="default" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
