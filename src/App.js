import './App.css'
import React from "react";
import Axios from "axios";



function App() {

const getNews = () => {

  Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f7f792eeba474a14bcfac3bf0e293cec")
  .then((response)=>{
    console.log(response);
  })

}

  return (
    <div className='container'>
      <h1 className="title"> TopNews </h1>
      <button className='button' onClick = {getNews}> Get News </button>
    </div>
  );
}

export default App;
