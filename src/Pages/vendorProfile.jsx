import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Footer from "../Components/footer";
import { useEffect, useState } from "react";
import { getUserData } from "../api/users";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VendorProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getUserData(userData._id, token)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleEditProfile = () => {
    navigate("/vendorEditProfile");
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
            width: "70vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "155vh",
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
              sx={{ display: "block", margin: "3vh 1vw 0 0", fontSize: "2em" }}
            >
              الصفحة الشخصية
            </Typography>
          </Box>
          {/* box البيانات */}
          <Grid
            container
            sx={{
              direction: "rtl",
              justifyContent: "center",
            }}
            spacing={3}
          >
            <Grid item md={2} xs={12} sx={{ mt: "7vh" }}>
              {userData.photo ? (
                <Avatar
                  src={userData.photo}
                  alt="User Photo"
                  sx={{
                    width: 150,
                    height: 150,
                    mr: "2vw",
                  }}
                />
              ) : (
                <IconButton>
                  <PersonIcon sx={{ fontSize: "15vw", color: "black" }} />
                </IconButton>
              )}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5em",
                  paddingRight: "2vw",
                }}
              >
                {userData.name}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5em",
                  paddingRight: "2vw",
                }}
              >
                {userData.job}
              </Typography>
              {/* <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #1F2A69  0%, #091242 100%)",
                  border: 0,
                  color: "White",
                  height: 48,
                  padding: "0 2vw",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  marginRight: "2vw",
                  marginTop: "2vh",
                  position: "relative",
                  borderRadius: 0,
                  textWrap: "nowrap",
                  fontSize: "1.5vw",
                }}
              >
                ذهاب الى الطلبات
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
              </Button> */}
            </Grid>
            <Grid item xs={8} sx={{ margin: "3vw 5vw" }}>
              <Box
                sx={{
                  backgroundColor: "#091242",
                  height: "120%",
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
                <Grid container sx={{ paddingTop: "2vw" }}>
                  <Grid item sx={{ marginRight: "3vw", color: "white" }}>
                    <Typography>الأسم</Typography>
                    <Typography>البريد</Typography>
                    <Typography>الهاتف</Typography>
                    <Typography>المحافظه</Typography>
                    <Typography>مدينه</Typography>
                    <Typography>المهنه</Typography>
                    <Typography>نبذة</Typography>
                  </Grid>
                  <Grid item sx={{ marginRight: "1vw", color: "gray" }}>
                    <Typography> {userData.name}</Typography>
                    <Typography> {userData.email}</Typography>
                    <Typography> {userData.phone}</Typography>
                    <Typography> {userData.address.gov}</Typography>
                    <Typography> {userData.address.city}</Typography>
                    <Typography> {userData.job}</Typography>
                    <Typography sx={{ textWrap: "wrap", width: "30vw" }}>
                      {userData.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                onClick={handleEditProfile}
                sx={{
                  background:
                    "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                  borderRadius: 0,
                  color: "black",
                  height: 48,
                  padding: "0 30px",
                  marginRight: "4vw",
                  marginTop: ".5vw",
                  position: "relative",
                  fontWeight: "bold",
                  mt: "5vh",
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
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "140vh", position: "relative" }}>
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

export default VendorProfile;
