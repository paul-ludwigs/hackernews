import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from '@mui/material';

const Articles = ({ searchValue }) => {

    const [articles, setArticles] = useState(null);

    const getData=()=>{
        axios
        .get(`https://hn.algolia.com/api/v1/search?query=${searchValue}`)
        .then((response) => {
            setArticles(response.data.hits); 
            console.log(response.data.hits)})
        .catch((err) => console.log(err));
        /*fetch('hackernews.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setArticles(myJson.hits);
          });*/
      }
      useEffect(()=>{
        setArticles(null);
        setTimeout(()=>{
            getData();
        }, 1000)
      },[searchValue])
  return (
    <div key={searchValue}>
        <h2>Search results for: {searchValue}</h2>
        {articles
        ? articles.length == 0 ? <div><p>No results :(</p></div>
        : articles.map((article) => (
            article.url ? (
            <div key={article.objectID}>
              <a href={article.url}><h2>{article.title}</h2></a>
            </div> ) : null
          ))
        : <CircularProgress />
    }
    </div>
  )
}

export default Articles