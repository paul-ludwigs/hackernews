import React from 'react'
import { useState, useEffect } from "react";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #ff8c00;
        color: #ff8c00
    }


`

const Search = ({ setSearchValue }) => {

    useEffect(()=>{
        setTimeout(()=>{

        document.getElementById('searchbar').addEventListener('submit', (event) => {
            event.preventDefault();
            const searchValue = document.getElementById('outlined-basic').value;
            console.log(searchValue);
            document.getElementById('outlined-basic').value = null;                    
            setSearchValue(searchValue);
        })
        console.log('fire once');
    }, 1000)
    }, [])


  return (

    <div id='searchDiv'>
        <form id='searchbar'>
            <StyledTextField id="outlined-basic" label="Search" variant="outlined" />
            <Button id="searchButton" variant="contained" type="submit"><img id="searchIcon" src='suche.png' /></Button>



        </form>
    </div>
  )
}

export default Search