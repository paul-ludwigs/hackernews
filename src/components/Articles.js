import React from 'react';
import { CircularProgress } from '@mui/material';

const Articles = ({ articles, loading, searchValue }) => {

    if(loading) {
    return(
      <div id="mainDiv">
      <h2>Search results for: {searchValue}</h2>
      <div id="loading">
      <CircularProgress id='circle' size="8rem"/>
      </div>
      </div>)
    }

    return (
      <div id="mainDiv">
      <h2>Search results for: {searchValue}</h2>
              {articles 
              ? articles.length == 0 ? <div><p id='no-results'>No results :(</p></div>
              : articles.map((article) => (
                article.url && article.title ? 
            
            <a href={article.url} key={article.objectID} className="article">
                
              <h3>{article.title}</h3>
            </a> : null
            )) : null }
            </div>
    )
}

export default Articles