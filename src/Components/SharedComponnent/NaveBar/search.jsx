import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { axiosInstance } from "../../../api/config";
import { useDispatch } from "react-redux";
import {
  setSearchProducts,
  setSearchServices,
} from "../../../stores/slice/search";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(products);
  //   console.log(services);
  // }, [products, services]);

  const handleSearch = () => {
    axiosInstance
      .get(`/search?q=${query}`, {
        headers: {
          token,
        },
      })
      .then((response) => {
        setProducts(response.data.products);
        setServices(response.data.services);
        dispatch(setSearchProducts(response.data.products));
        dispatch(setSearchServices(response.data.services));
        console.log(response.data);
        navigate("/search");
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        variant="outlined"
        placeholder="بحث"
        value={query}
        onChange={handleInputChange}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          marginRight: "1rem",
          flexGrow: 1,
          height: "38px",
          mt: "1.5vh",
          "& input": {
            fontFamily: "inherit",
            fontSize: "1rem",
            paddingTop: "6px",
            paddingBottom: "6px",
          },
        }}
      />

      <IconButton
        onClick={handleSearch}
        style={{
          backgroundColor: "#3f51b5",
          color: "white",
          borderRadius: "20px",
          marginTop: "1.8vh",
          marginRight: "10px",
          marginLeft: "3vw",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
