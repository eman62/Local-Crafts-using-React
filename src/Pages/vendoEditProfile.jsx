import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Footer from "./../Components/footer";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const VendorEditProfilePage = () => {
  const [selectedValueCity, setSelectedValueCity] = useState("المنصوره");
  const [selectedValueState, setSelectedValueState] = useState("القاهره");

  const handleStateChange = (event) => {
    setSelectedValueState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedValueCity(event.target.value);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-dGzk1BZ7AzXsytxPi6tPDQGedhQNe-fnxuhUubZEHGmJGV3Mv7ViyEdH~h1mEoLCLZ8bGvOMHOac9P10gmWkZUvNbdtKWNZFPEeVUDFqS~ZRZfxiSZ-Bfn0ETk6BhRY67QaLL7ERh4Tt5XNHQJoa9j6TeSL6C5SuJc79nQ37shNjVlPVaXOzUxa5SY6cvUscKDALerDU7CDku6S5EHwZ1hlb2sUHyC6a71TKY~D00y8~YzvGecVrgd3XjbDRMF1mhq5Tgo~TxSxoDkjuf3ZxQ-wlKLEi1C30bdkPyA9ezOh37aeshkILVrPjvVBKeJKsfNXN5CUsrMZj7KM5BWoQ__')",
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
            width: "80vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "165vh",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          {/* عنوان الصفحه الشخصيه */}
          <Box sx={{ display: "flex", direction: "rtl" }}>
            <svg
              style={{ margin: "5vh 2vw 0 0" }}
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
                display: "block",
                margin: "3vh 1vw 0 0",
                fontSize: "2em",
              }}
            >
              تعديل الصفحه الشخصية
            </Typography>
          </Box>
          {/* box البيانات */}
          <Grid
            container
            sx={{
              direction: "rtl",
              justifyContent: "center",
            }}
            spacing={1}
          >
            <Grid item xs={2}>
              <IconButton sx={{ mt: "6vh" }}>
                <PersonIcon sx={{ fontSize: "15vw", color: "" }} />
              </IconButton>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5em",
                  paddingRight: "2.5vw",
                }}
              >
                اسم البائع
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.3em",
                  paddingRight: "2.5vw",
                  fontFamily: "Krub",
                  fontWeight: "500",
                }}
              >
                البائع
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{ margin: "3vw 2vw" }}>
              <Box
                sx={{
                  backgroundColor: "#091242",
                  height: "130vh",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="4"
                    height="5vh"
                    viewBox="0 0 4 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="4"
                      height="32"
                      fill="url(#paint0_linear_49_2162)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_49_2162"
                        x1="-0.113402"
                        y1="6.93333"
                        x2="4.94361"
                        y2="6.97822"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFB629" />
                        <stop offset="0.507189" stop-color="#FFDA56" />
                        <stop offset="1" stop-color="#FFD7A6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      marginRight: "4px",
                      color: "white",
                      marginTop: "1vh",
                      backgroundColor: "rgb(50,50,50,.5)",
                    }}
                  >
                    البيانات
                  </Typography>
                </Box>
                <Grid container sx={{ paddingTop: "2vw" }} spacing={10}>
                  <Grid item sx={{ marginRight: "3vw" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                      }}
                    >
                      الأسم الأول
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="اسم اليوزر"
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "2vh",
                      }}
                    >
                      البريد
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="عنوان البريد "
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography
                          sx={{
                            color: "white",
                            fontFamily: "Kurb",
                            fontSize: "1.5em",
                            mt: "4vh",
                          }}
                        >
                          المحافظة
                        </Typography>

                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectedValueState}
                          onChange={handleStateChange}
                          sx={{
                            width: "120px",
                            height: "40px",
                            backgroundColor: "#1F2A69",
                            border: "1px solid #8E8E8E",
                            color: "white",
                          }}
                        >
                          <MenuItem value="القاهره">القاهره</MenuItem>
                          <MenuItem value="الأسكندريه">الأسكندريه</MenuItem>
                          <MenuItem value="الدقهليه">الدقهليه</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{
                            color: "white",
                            fontFamily: "Kurb",
                            fontSize: "1.5em",
                            mt: "4vh",
                          }}
                        >
                          المدينه
                        </Typography>

                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectedValueCity}
                          onChange={handleCityChange}
                          sx={{
                            width: "120px",
                            height: "40px",
                            backgroundColor: "#1F2A69",
                            border: "1px solid #8E8E8E",
                            color: "white",
                          }}
                        >
                          <MenuItem value="القاهره">المنصوره</MenuItem>
                          <MenuItem value="الأسكندريه">العجمي</MenuItem>
                          <MenuItem value="الدقهليه">العبور</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "2vh",
                      }}
                    >
                      الهاتف
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=" رقم الهاتف"
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "5vh",
                      }}
                    >
                      نبذة
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginRight: "3vw" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                      }}
                    >
                      الأسم الثانى
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="اسم اليوزر"
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "2vh",
                      }}
                    >
                      رقم السر
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="رقم السر  "
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "2vh",
                      }}
                    >
                      العنوان
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="  العنوان"
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                        mt: "2vh",
                      }}
                    >
                      المهنه
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=" المهنه "
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          width: "260px",
                          height: "40px",
                          backgroundColor: "#1F2A69",
                          border: "1px solid #8E8E8E",
                          color: "white",
                          direction: "rtl",
                          mt: "2vh",
                        },
                      }}
                    />
                    <Grid item>{/*  */}</Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "150vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={6} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </Box>
  );
};
export default VendorEditProfilePage;
