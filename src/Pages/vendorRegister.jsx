import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { getGovernorates, getCities } from "../api/locations";
import logo from "../assets/logo.png";
import header from "../assets/Header2.jpeg";
import Footer from "../Components/footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const VendorRegister = () => {
  const [governorates, setGovernorates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    getGovernorates()
      .then((res) => {
        setGovernorates(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedGovernorate) {
      getCities(selectedGovernorate)
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    }
  }, [selectedGovernorate]);

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
        console.log(data.secure_url);
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
            top: "35vh",
            right: 0,
            height: "120vh",
            zIndex: 1,
          }}
        >
          {/* عنوان الصفحه الشخصيه */}
          <Box
            sx={{
              display: "flex",
              direction: "rtl",
            }}
          >
            <svg
              style={{ margin: "9.5vh 15vw 0 0" }}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_4153)" />
              <defs>
                <linearGradient
                  id="paint0_linear_29_4153"
                  x1="-29875"
                  y1="87704.3"
                  x2="-29853.6"
                  y2="87705.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB629" />
                  <stop offset="0.507189" stopColor="#FFDA56" />
                  <stop offset="1" stopColor="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>
            <Typography
              sx={{
                margin: "7vh 1vw 0 0",
                fontSize: "2em",
                fontFamily: "Rubik",
              }}
            >
              بيانات حساب جديد لبائع
            </Typography>
          </Box>
          <Box sx={{ direction: "rtl", mt: "5vh", mr: "15vw" }}>
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
              id="standard-basic"
              label="المهنه"
              variant="standard"
              placeholder="ادخل المهنه"
              inputProps={{ style: { direction: "rtl" } }}
              sx={{ width: "30vw", textAlign: "start" }}
              InputLabelProps={{ direction: "rtl", textAlign: "start" }}
            />
            <TextField
              id="standard-basic"
              label=" رقم الهاتف"
              variant="standard"
              type="number"
              placeholder="ادخل  رقم  الهاتف"
              inputProps={{ style: { direction: "rtl" } }}
              sx={{ width: "30vw", direction: "rtl", mb: "1vh" }}
              InputLabelProps={{ direction: "rtl" }}
            />
            <Box sx={{ display: "flex" }}>
              <TextField
                id="standard-select-currency"
                select
                label=" المحافظه"
                value={selectedGovernorate}
                onChange={(e) => setSelectedGovernorate(e.target.value)}
                variant="standard"
                sx={{ width: "14vw", mt: "5vh" }}
              >
                {governorates.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {" "}
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-currency"
                select
                label="  المدينه"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                variant="standard"
                sx={{
                  width: "14vw",
                  mt: "5vh",
                  mr: "2vw",
                }}
              >
                {cities.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {" "}
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ mt: "5vh", width: "55%" }}>
              <TextField
                id="outlined-multiline-flexible"
                label="نبذه عنك"
                multiline
                maxRows={6}
                sx={{ width: "30vw" }}
              />
            </Box>
            <Button
              sx={{
                background: "#091242",
                color: "white",
                height: "7vh",
                width: "30vw",
                padding: "0 30px",
                mt: "8vh",
                display: "block",
                "&:hover": { backgroundColor: "gray" },
              }}
            >
              استكمال
            </Button>
          </Box>

          {/* box البيانات */}
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "120vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  pt: "20vh",
                  fontSize: "2.3vw",
                  pl: "3vw",
                  fontFamily: "Rubik",
                }}
              >
                نحن نتيح لك فرصة
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2.3vw",
                  pl: "3vw",
                  fontFamily: "Rubik",
                }}
              >
                سريعة وسهله لكل
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2.3vw",
                  pl: "3vw",
                  fontFamily: "Rubik",
                }}
              >
                ما يحتاج اليه <span style={{ color: "#FFBE34" }}>منزلك </span>
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#5B86E5",
                  width: "12vw",
                  height: "27vh",
                  borderRadius: "0 40% 40% 0",
                  ml: "5vw",
                  mt: "15vh",
                }}
              >
                <img
                  src={logo}
                  style={{ width: "50%", height: "50%", padding: "3vw" }}
                ></img>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default VendorRegister;
