import React, {useState} from 'react';
import {Paper, TextField} from "@mui/material";

const SearchBar = ({handleSubmit}) => {
    const [searchTerm,setSearchTerm]=useState('javascript');

    return (
        <Paper elevation={6} style={{padding:'25px'}}>
            <form onSubmit={(e)=>handleSubmit(e,searchTerm)}>
                <TextField value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} fullWidth label={'Search ...'}></TextField>
            </form>
        </Paper>
    );
};

export default SearchBar;