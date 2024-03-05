import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onChange }) => {
  return (
    <TextField
      variant="standard"
      placeholder="بحث"
      InputProps={{
        startAdornment: (
          <SearchIcon color="disabled" />
        ),
      }}
      sx={{
        marginTop:"1rem",
        backgroundColor: 'white',
        borderRadius: '20px',
        marginRight:"1rem",
        
      }}
      onChange={(e) => onChange(e.target.value)}
      
    />
  );
};

export default SearchInput;
