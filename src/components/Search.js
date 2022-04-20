import React from 'react'
import { useState, useEffect } from "react";

const Search = ({ setSearchValue, setArticles }) => {

    useEffect(()=>{
        setTimeout(()=>{

        document.getElementById('searchbar').addEventListener('submit', (event) => {
            event.preventDefault();
            setArticles(null);
            const searchValue = document.getElementById('inputField').value;
            console.log(searchValue);
            document.getElementById('inputField').value = "";                    
            setSearchValue(searchValue);
        })
        console.log('fire once');
    }, 1000)
    }, [])


  return (

    <div>
        <form id='searchbar'>
            <label>Search: </label>
            <input id="inputField"></input>
            <button type="submit">Okay lets go</button>

        </form>
    </div>
  )
}

export default Search