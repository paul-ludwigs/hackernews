import React from 'react';
import { useEffect, useState } from "react";

const Articles = () => {

    const [articles, setArticles] = useState(null);

    const getData=()=>{
        fetch('hackernews.json'
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
          });
      }
      useEffect(()=>{
        getData()
      },[])
  return (
    <div>
        {articles
        ? articles.map((article) => (
            <div key={article.objectID}>
              <a href={article.url}><h2>{article.title}</h2></a>
            </div>
          ))
        : "Loading....."}
    </div>
  )
}

export default Articles