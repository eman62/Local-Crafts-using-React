import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "./../Components/footer";
import VendorOrderCard from "../Components/vendorOrderCard";
import VendorPaggenation from "../Components/Vendor/VendorPaggenation";
import { axiosInstance } from "../api/config";
import { useEffect, useState } from "react";
import { getProductListDetails } from "../api/Products";
import { useParams } from "react-router-dom";
const VendorOrdersPage = () => {
  const [orders, setOrders] = useState([])
  const [productData ,setProductData]=useState({})
  const params = useParams();
  const token = localStorage.getItem("token")
  const productId =orders.product


  useEffect(() => {
    const fetchVendorOrders = async () => {
      try {
        const response = await axiosInstance.get("/orders", {
          headers: {
            token
          }
        })
        setOrders(response.data);
        console.log(orders)
        

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchVendorOrders();
  }, []);


  


  return (
    <Box >
      <Box
        sx={{
          backgroundImage: "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          objectFit: "cover",
          padding: "10%",
        }}
      >

        <Box
          sx={{
            position: "absolute",
            width: "80vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "225vh",
            transform: "translateX(-50%)",
            zIndex: 1,
            direction: "rtl",
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
                fontSize: "1.8em",
                fontFamily: "Rubik",
                fontWeight: "700",
              }}
            >
              الطلبات
            </Typography>

          </Box>
          <Box>
            { orders && <VendorPaggenation data={orders}  />}
          </Box>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "200vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "200vh" }}>
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
export default VendorOrdersPage;
