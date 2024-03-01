import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../Styles/footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        className="footer"
        sx={{ display: "flex", justifyContent: "center", direction: "rtl" }}
      >
        <Grid container>
          <Grid item xs={3} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3vh",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/58fa/77b1/c4116a603798eb5034b06c16696f7a8d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izNvOJ6N5sREq3uJ1wxHkwYOIsPud0PEjHdmCqA8LoIOYcEKfSpj3XIla1qSKMxCBH03VSsZ2eDJwKG9ngfUESp78eXT7ubvu1BLsoXhkUqMc~7x2s~IIft8Z9hD2jc0KELpbMicepfJCKYny07nQjfZ20L6b02QXqipx7suK6sHi9QV3DDtmRfJqH6Pys-ERDLvTmbsk9elD0kATYAGVHlWsNcDcE8Fi1cGUE6AEpZhkWNtGFJuHirwbkq9N9zjc7fhVyrmgzJ9BZoI9rxLND5vyOadgxzUE61EFWQedeETLMFMNv1QaAnwieEGjW6ChmwvSRc31oucjsGW8-Hfrg__"
                alt="Logo"
                style={{ width: "2vw", height: "3vh", marginLeft: "5px" }}
              />
              <Typography className="name" sx={{ fontSize: "3vw" }}>
                لوكال كرافت
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "start",
                margin: "2vh 5vw 0 0",
                fontSize: "13px",
                color: "white",
              }}
            >
              {" "}
              موقعنا يتيح لك شراء العديد من المنتجات والحصول علي خدمات مميزه
              وسريعه ويمكنك شراء العديد من المنتجات{" "}
            </Typography>
          </Grid>

          <Grid item xs={5} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                display: "block",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "3vh 0",
                color: "white",
                fontSize: "1.6vw",
              }}
            >
              الصفح
            </Typography>
            <Link
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
                margin: "3vh",
              }}
            >
              الرئيسيه
            </Link>
            <Link
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
                margin: "3vh",
              }}
            >
              المنتجات
            </Link>
            <Link
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
                margin: "3vh",
              }}
            >
              الخدمات
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{
                display: "block",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "3vh 0",
                textAlign: "start",
                color: "white",
                fontSize: "1.6vw",
              }}
            >
              تواصل معنا
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "6vh" }}
            >
              <Box sx={{ display: "block" }}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "white",
                    marginLeft: "1vw",
                    fontSize: "1vw",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{ color: "white", marginLeft: "1vw", fontSize: "1vw" }}
                >
                  Eman@gmail.com
                </Typography>
              </Box>
              <MailOutlineIcon
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "10vw",
                  padding: "1vw",
                  color: "gold",
                  width: "1.5vw",
                }}
              ></MailOutlineIcon>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                color: "white",
                justifyContent: "start",
                marginTop: "5vh",
              }}
            >
              <LinkedInIcon></LinkedInIcon>
              <TwitterIcon></TwitterIcon>
              <FacebookIcon></FacebookIcon>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ color: "wheat" }}></Divider>
      <Typography
        sx={{
          backgroundColor: "#091242",
          textAlign: "center",
          color: "white",
          fontSize: ".8rem",
          padding: "10px 0",
        }}
      >
        Copyright &copy;2024 LocalCrafts. All rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
