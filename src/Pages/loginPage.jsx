import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "../Components/footer";
import { Link, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const LoginPage = () => {
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
            top: "35vh",
            right: 0,
            height: "120vh",
            // transform: "translateX(-50%)",
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
              style={{ margin: "32.5vh 15vw 0 0" }}
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
                margin: "30vh 1vw 0 0",
                fontSize: "2em",
              }}
            >
              تسجيل الدخول
            </Typography>
          </Box>
          <Box sx={{ direction: "rtl", mt: "5vh", mr: "15vw" }}>
            <TextField
              id="standard-basic"
              label="البريد"
              variant="standard"
              placeholder="ادخل البريد الإلكتروني"
              inputProps={{ style: { direction: "rtl" } }}
              sx={{ width: "30vw", direction: "rtl", mb: "1vh" }}
              InputLabelProps={{ direction: "rtl" }}
            />
            <TextField
              id="standard-basic"
              label="كلمه السر"
              variant="standard"
              placeholder="ادخل كلمه السر"
              inputProps={{ style: { direction: "rtl" } }}
              sx={{ width: "30vw", textAlign: "start" }}
              InputLabelProps={{ direction: "rtl", textAlign: "start" }}
            />
            <Button
              sx={{
                background: "#091242",
                color: "white",
                height: "7vh",
                width: "30vw",
                padding: "0 30px",
                mt: "6vh",
                display: "block",
                "&:hover": { backgroundColor: "gray" },
              }}
            >
              دخول
            </Button>
            <Typography
              sx={{
                mr: "8vw",
                mt: "4vh",
                fontFamily: "Rubik",
                fontSize: "1.2vw",
              }}
            >
              ليس لديك حساب؟{" "}
              <Link sx={{ textDecoration: "none", color: "blue" }}>
                انشاء حساب
              </Link>
            </Typography>
            <Button
              sx={{
                border: "1px solid black",
                color: "black",
                mr: "8vw",
                mt: "5vh",
              }}
            >
              تسجيل الدخول بواسطه Google
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.7998 14.6437H30.6251V14.5832H17.5001V20.4165H25.7419C24.5395 23.8122 21.3085 26.2498 17.5001 26.2498C12.6679 26.2498 8.75008 22.332 8.75008 17.4998C8.75008 12.6676 12.6679 8.74984 17.5001 8.74984C19.7306 8.74984 21.7599 9.59129 23.305 10.9658L27.4299 6.84088C24.8253 4.41348 21.3413 2.9165 17.5001 2.9165C9.44643 2.9165 2.91675 9.44619 2.91675 17.4998C2.91675 25.5535 9.44643 32.0832 17.5001 32.0832C25.5537 32.0832 32.0834 25.5535 32.0834 17.4998C32.0834 16.522 31.9828 15.5675 31.7998 14.6437Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.59814 10.712L9.3895 14.2259C10.686 11.0161 13.8257 8.74984 17.5 8.74984C19.7305 8.74984 21.7598 9.59129 23.3049 10.9658L27.4298 6.84088C24.8252 4.41348 21.3413 2.9165 17.5 2.9165C11.8986 2.9165 7.04085 6.0789 4.59814 10.712Z"
                  fill="#FF3D00"
                />
                <path
                  d="M17.4999 32.0833C21.2668 32.0833 24.6895 30.6418 27.2773 28.2975L22.7638 24.4781C21.2996 25.5872 19.4796 26.25 17.4999 26.25C13.7068 26.25 10.486 23.8314 9.27271 20.4561L4.51709 24.1201C6.93063 28.8429 11.8321 32.0833 17.4999 32.0833Z"
                  fill="#4CAF50"
                />
                <path
                  d="M31.7997 14.644H30.625V14.5835H17.5V20.4168H25.7418C25.1643 22.048 24.115 23.4545 22.7617 24.479C22.7624 24.4783 22.7631 24.4783 22.7639 24.4776L27.2774 28.2969C26.958 28.5871 32.0833 24.7918 32.0833 17.5002C32.0833 16.5224 31.9827 15.5679 31.7997 14.644Z"
                  fill="#1976D2"
                />
              </svg>
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
                  src="https://s3-alpha-sig.figma.com/img/58fa/77b1/c4116a603798eb5034b06c16696f7a8d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izNvOJ6N5sREq3uJ1wxHkwYOIsPud0PEjHdmCqA8LoIOYcEKfSpj3XIla1qSKMxCBH03VSsZ2eDJwKG9ngfUESp78eXT7ubvu1BLsoXhkUqMc~7x2s~IIft8Z9hD2jc0KELpbMicepfJCKYny07nQjfZ20L6b02QXqipx7suK6sHi9QV3DDtmRfJqH6Pys-ERDLvTmbsk9elD0kATYAGVHlWsNcDcE8Fi1cGUE6AEpZhkWNtGFJuHirwbkq9N9zjc7fhVyrmgzJ9BZoI9rxLND5vyOadgxzUE61EFWQedeETLMFMNv1QaAnwieEGjW6ChmwvSRc31oucjsGW8-Hfrg__"
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

export default LoginPage;
