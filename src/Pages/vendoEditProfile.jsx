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
import { useEffect, useState } from "react";
import { getCities, getGovernorates } from "../api/locations";
import { getUserData } from "../api/users";
import { Avatar } from "@mui/material";

const VendorEditProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [governorates, setGovernorates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState();

  const [selectedCity, setSelectedCity] = useState("");

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

  useEffect(() => {
    getUserData(userData._id, token)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
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
            height: "215vh",
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
              {user.photo ? (
                <Avatar
                  src={user.photo}
                  alt="User Photo"
                  sx={{
                    width: 150,
                    height: 150,
                    mr: "2vw",
                    mt: "7vh",
                  }}
                />
              ) : (
                <IconButton>
                  <PersonIcon
                    sx={{
                      fontSize: "15vw",
                      color: "black",
                      mr: "2vw",
                      mt: "7vh",
                    }}
                  />
                </IconButton>
              )}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5em",
                  paddingRight: "2.5vw",
                }}
              >
                {user.name}
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
                {user.job}
              </Typography>
            </Grid>
            <Grid
              item
              xs={9}
              sx={{
                margin: "3vw 2vw",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#091242",
                  height: "170vh",
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
                <Grid
                  container
                  sx={{
                    paddingTop: "2vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  spacing={10}
                >
                  <Grid item sx={{ marginRight: "3vw" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Kurb",
                        fontSize: "1.5em",
                      }}
                    >
                      الأسم
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
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
                      variant="outlined"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
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
                          label=" المحافظه"
                          value={selectedGovernorate}
                          onChange={(e) => {
                            setSelectedGovernorate(e.target.value);
                            // setVendorFormData((prevState) => ({
                            //   ...prevState,
                            //   address: {
                            //     ...prevState.address,
                            //     gov: e.target.value,
                            //   },
                            // })
                            // );
                          }}
                          sx={{
                            width: "120px",
                            height: "40px",
                            backgroundColor: "#1F2A69",
                            border: "1px solid #8E8E8E",
                            color: "white",
                          }}
                        >
                          {governorates.map((option) => (
                            <MenuItem key={option._id} value={option._id}>
                              {" "}
                              {option.name}
                            </MenuItem>
                          ))}
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
                          value={selectedCity}
                          onChange={(e) => {
                            setSelectedCity(e.target.value);
                            // setVendorFormData((prevState) => ({
                            //   ...prevState,
                            //   address: {
                            //     ...prevState.address,
                            //     city: e.target.value,
                            //   },
                            // }));
                          }}
                          sx={{
                            width: "120px",
                            height: "40px",
                            backgroundColor: "#1F2A69",
                            border: "1px solid #8E8E8E",
                            color: "white",
                          }}
                        >
                          {cities.map((option) => (
                            <MenuItem key={option._id} value={option._id}>
                              {" "}
                              {option.name}
                            </MenuItem>
                          ))}
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
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
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
                      variant="outlined"
                      name="job"
                      value={user.job}
                      onChange={handleChange}
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
                    <TextField
                      name="description"
                      value={user.description}
                      onChange={handleChange}
                      id="outlined-multiline-static"
                      defaultValue="رسالة صغيرة"
                      multiline
                      rows={6}
                      InputProps={{
                        style: { color: "white" },
                      }}
                      sx={{
                        width: "40vw",
                        direction: "rtl",
                        backgroundColor: "#1F2A69",
                        border: "1px solid #8E8E8E",
                        color: "white",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      // onClick={handleEditProfile}
                      sx={{
                        background:
                          "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                        borderRadius: 0,
                        color: "black",
                        height: 48,
                        padding: "0 30px",
                        // marginRight: "4vw",

                        position: "relative",
                        fontWeight: "bold",
                      }}
                    >
                      تعديل
                      <Box
                        sx={{
                          position: "absolute",
                          background: "rgb(50,50,50,.7)",
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
                      // onClick={handleEditProfile}
                      sx={{
                        background: "white",
                        borderRadius: 0,
                        color: "black",
                        height: 48,
                        padding: "0 30px",
                        marginRight: "4vw",

                        position: "relative",
                        fontWeight: "bold",
                      }}
                    >
                      الغاء
                      <Box
                        sx={{
                          position: "absolute",
                          background: "rgb(50,50,50,.7)",
                          width: "20%",
                          borderRadius: "50% 0 0",
                          bottom: "0",
                          height: "40%",
                          opacity: "70%",
                          right: "0",
                        }}
                      ></Box>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "200vh", position: "relative" }}>
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
