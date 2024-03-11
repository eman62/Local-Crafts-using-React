import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SearchInput from "./SharedComponnent/NaveBar/search";
//import { useDispatch } from "react-redux";
import { changeLocation } from "../stores/slice/location";
import { Grid } from "@mui/material";

const pages = ["الرئيسية", "منتجات", "خدمات", "عن موقعنا"];
const pagePaths = ["/", "/products", "/services", "about"];

function NaveBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    const userDataFromStorage = JSON.parse(localStorage.getItem("userData"));

    setToken(tokenFromStorage);
    setUserData(userDataFromStorage);
  }, []);

  const userRole = userData ? userData.role : null;
  return (
    <AppBar
      position="static"
      sx={{
        direction: "rtl",
        backgroundColor: "rgba(9, 18, 66, 0.25)",
        position: "absolute",
        fontFamily: "Rubik",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <img
            src={logo}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            width={60}
            height={50}
          />
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Rubik",
              fontWeight: 700,
              color: "inherit",

              textDecoration: "none",
            }}
          >
            لوكال كرافت
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="h4" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: "Rubik" }}>
              لوكال كرافت
            </Typography>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginRight: "2.5rem",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Rubik",
                  marginRight: "1rem",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`${pagePaths[index]}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { md: "flex" } }}>
            <Box ml={2} sx={{ width: "50%" }}>
              <SearchInput onChange={handleSearchChange} />
            </Box>
            {token ? (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <PersonIcon sx={{ fontSize: "1.5em" }} />
              </IconButton>
            ) : (
              <Button
                sx={{ color: "white", fontSize: "1rem", fontFamily: "Rubik" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"/user-login"}
                >
                  تسجيل الدخول
                </Link>
              </Button>
            )}
          </Box>

          {/* User Menu */}
          <Menu
            sx={{
              width: "30%",
              direction: "rtl",
              fontFamily: "'Rubik', sans-serif",
              marginTop: "3%",
            }}
            id="menu-appbar"
            variant="selectedMenu"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {token && userRole === "vendor"
              ? [
                  <Grid p={1.5} onClick={handleCloseNavMenu}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Box mt={0.5}>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={"/vendorProfile"}
                        >
                          الصفحة الشخصية
                        </Link>
                      </Box>
                      <Box>
                        <PersonIcon />
                      </Box>
                    </Box>
                  </Grid>,
                  <Box onClick={handleCloseNavMenu}>
                    <Grid
                      p={1.5}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box mt={0.5}>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={"/vendorOrders"}
                        >
                          خدماتي أو منتجاتي
                        </Link>
                      </Box>

                      <DesignServicesIcon />
                    </Grid>
                  </Box>,
                  <Box onClick={handleCloseNavMenu}>
                    <Grid
                      p={1.5}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box mt={0.5}>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={"/addService"}
                        >
                          أضف خدمة أو منتج
                        </Link>
                      </Box>

                      <Inventory2Icon />
                    </Grid>
                  </Box>,
                ]
              : [
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={"/favorites"}
                    >
                      المفضلة
                    </Link>
                  </MenuItem>,
                  // /userOrders
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={"/userOrders"}
                    >
                      الطلبات
                    </Link>
                  </MenuItem>,
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={"/profile"}
                    >
                      الصفحة الشخصية
                    </Link>
                  </MenuItem>,
                ]}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NaveBar;
