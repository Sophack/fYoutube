import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { SearchIcon } from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: 20, 
        pl: 2,
        mr: { sm:5 }
    }}>
        <input
        className='search-bar'
        placeholder='Search...'
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'rgb(127, 54, 195)'}}>
        <Search/>

      </IconButton>
      
    </Paper>
  )
}

export default SearchBar
