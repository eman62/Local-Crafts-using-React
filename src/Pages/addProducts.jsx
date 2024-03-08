import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import header from "../assets/Header2.jpeg";
import Footer from "../Components/footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const AddProducts = () => {
  const [imageURL, setImageURL] = useState("");
  const types = [
    {
      value: "vendor",
      label: "بائع",
    },
    {
      value: "customer",
      label: "مشترى",
    },
  ];
  const [productType, setProductType] = useState('service');
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "LocalCrafts");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dbtaj8rn6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageURL(data.secure_url);
        console.log(data.secure_url); // Log the URL to the console
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
  
          backgroundImage: `url(${header})`,
          height: "35vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(6,0,66,.7)",
            height: "100%",
            top: "0",
            right: "0",
            left: "0",
          }}
        ></Box>
        {/* Red Box */}
        <Box
          sx={{
            position: "absolute",
            width: "70vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "95vh",
            transform: "translateX(-50%)",
            zIndex: 1,
            overflow: "auto",
            padding: "20px", // Added padding for spacing
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align header to the right
          }}
        >
          {/* Header */}
          <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
              اضافه خدمه او منتج
         </Typography>

         <form >
            <Box sx={{ direction: "rtl", mt: "5vh", mr: "15vw" }}>
            <RadioGroup
                row
                aria-label="productType"
                name="productType"
                value={productType}
                onChange={handleProductTypeChange}
                sx={{ marginBottom: "1vh" }}
              >
                <label>النوع</label>
                <FormControlLabel
                  value="service"
                  control={<Radio />}
                  label="خدمة"
                />
                <FormControlLabel
                  value="product"
                  control={<Radio />}
                  label="منتج"
                />
              </RadioGroup>
              {imageURL ? (
              <Avatar
                alt="Avatar"
                src={imageURL}
                sx={{ width: 150, height: 150, mr: "10vw" }}
              />
            ) : (
              <label htmlFor="icon-button-file">
                <IconButton
                  sx={{ display: "block", ml: "10vw" }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon
                    sx={{ fontSize: "5em", textAlign: "center", ml: "10vw" }}
                  />
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </IconButton>
              </label>
            )}
              <TextField
                name="address"
                
                id="standard-basic"
                label="العنوان"
                variant="standard"
                placeholder="ادخل الأسم "
                inputProps={{ style: { direction: "rtl" } }}
                sx={{ width: "30vw", textAlign: "start" }}
                InputLabelProps={{ direction: "rtl", textAlign: "start" }}
              />
                 <Box sx={{ display: "flex" }}>
              <TextField
                id="standard-select-currency"
                name="role"
                select
                label="القسم الفرعي"
                defaultValue="نوع الحساب"
                variant="standard"
                sx={{ width: "14vw", mt: "5vh" }}
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-currency"
                name="role"
                select
                label="القسم الاساسي"
                defaultValue="نوع الحساب"
                variant="standard"
                sx={{
                  width: "14vw",
                  mt: "5vh",
                  mr: "2vw",
                }}
              >
            
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box> 

              <TextField
                id="standard-basic"
                name="Price"
                label="السعر"
                variant="standard"
                placeholder="ادخل البريد الإلكتروني"
                 
                inputProps={{ style: { direction: "rtl" } }}
                sx={{ width: "30vw", direction: "rtl", mb: "1vh" }}
                InputLabelProps={{ direction: "rtl" }}
              /> 
                     <Box sx={{ mt: "5vh", width: "55%" }}>
              <TextField
                id="outlined-multiline-flexible"
                label="الوصف"
                multiline
                maxRows={6}
                sx={{ width: "30vw" }}
              />
            </Box>
              <Box sx={{ display: 'flex', marginTop: 1,justifyContent:"space-evenly",marginLeft:"20%" }}>
                <Button
                sx={{
                  background:
                  "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                  border: 0,
                  color: "black",
                  height: 48,
                  padding: "0 2vw",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  
                  marginTop: "2vh",
                  position: "relative",
                  borderRadius: 0,
                  textWrap: "nowrap",
                  fontSize: "1.5vw",
                }}
              >
                اضافه
                <Box
                  sx={{
                    position: "absolute",
                    background: "#DCE4E7",
                    width: "20%",
                    borderRadius: "50% 0 0",
                    bottom: "0",
                    height: "40%",
                    opacity: "70%",
                    right: "0",
                  }}
                ></Box>
              </Button>
                <Button
               sx={{
                background: "linear-gradient(90deg, #CCCCCC 0%, #CCCCCC 100%)", // Change color code to gray
                border: 0,
                color: "black",
                height: 48,
                padding: "0 2vw",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                
                marginTop: "2vh",
                position: "relative",
                borderRadius: 0,
                textWrap: "nowrap",
                fontSize: "1.5vw",
              }}
              
              >
                 الغاء
                <Box
                  sx={{
                    position: "absolute",
                    background: "#1F2A69",
                    width: "20%",
                    borderRadius: "50% 0 0",
                    bottom: "0",
                    height: "40%",
                    opacity: "70%",
                    right: "0",
                  }}
                ></Box>
              </Button>
                 
                </Box>
            </Box>
          </form>
       
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "80vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={8} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddProducts;



